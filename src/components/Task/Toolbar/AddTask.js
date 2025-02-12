import React, { useState, useEffect } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  Modifier
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
  arrayUnion,
  serverTimestamp
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../../Firebase';
import {
  Overlay,
  ModalContainer,
  TitleContainer,
  NameContainer,
  ContentColumns,
  LeftColumn,
  RightColumn,
  DescriptionContainer,
  ControlsGrid,
  FormGroup,
  ButtonGroup,
  Button,
  Toolbar
} from './AddTask.styles';

const AddTask = ({ onClose }) => {
  const today = new Date().toISOString().split('T')[0];
  const [taskData, setTaskData] = useState({
    name: '',
    project: '',
    creationDate: today,
    expirationDate: '',
    assignedTo: '',
    priority: '',
    status: 'ToDo',
    assignedBy: '',
    projectName: ''
  });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);
  const [currentUserName, setCurrentUserName] = useState('');

  // Fetch current user's name
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const userQuery = query(
          collection(db, 'users'), 
          where('email', '==', user.email)
        );
        
        try {
          const querySnapshot = await getDocs(userQuery);
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0].data();
            const userName = userDoc.displayname || user.email;
            setCurrentUserName(userName);
            setTaskData(prev => ({ ...prev, assignedBy: userName }));
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchCurrentUser();
  }, []);

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const userProjects = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((project) =>
            project.members?.some((member) => member.id === user.uid)
          );
        setProjects(userProjects);
      }
    };
    fetchProjects();
  }, []);

  // Set members based on selected project
  useEffect(() => {
    setMembers(
      projects.find((project) => project.id === taskData.project)?.members || []
    );
  }, [taskData.project, projects]);

  // Handle style click
  const handleStyleClick = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  // Handle block click
  const handleBlockClick = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  // Add highlight
  const addHighlight = () => {
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const newContentState = Modifier.applyInlineStyle(
      contentState,
      selection,
      'HIGHLIGHT'
    );
    setEditorState(EditorState.push(editorState, newContentState, 'change-inline-style'));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskData.project) return alert('Please select a project.');

    const user = getAuth().currentUser;
    if (!user) return alert('Please log in to add a task.');

    // Double-check that we have assignedBy, if not use current user's email as fallback
    const assignedBy =  user.displayName;

    const selectedProject = projects.find(
      (project) => project.id === taskData.project
    );
  
    if (!selectedProject) {
      alert('Error: Proyecto no encontrado.');
      return;
    }

    try {
      const newTask = {
        id: crypto.randomUUID(),
        ...taskData,
        projectName: selectedProject.name,
        assignedBy, // Explicitly set assignedBy here
        description: convertToRaw(editorState.getCurrentContent()),
        createdAt: new Date().toISOString()
      };
      
      // First update: Add the task to the array
      await updateDoc(doc(db, 'projects', taskData.project), {
        tasks: arrayUnion(newTask)
      });

      // Second update: Update the lastUpdated field
      await updateDoc(doc(db, 'projects', taskData.project), {
        lastUpdated: serverTimestamp()
      });
      
      alert('Task saved successfully.');
      onClose();
    } catch (error) {
      console.error('Error saving task:', error);
      alert('There was an error saving the task. Please try again.');
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TitleContainer>Add Task</TitleContainer>
        
        {/* Task Name - Full Width */}
        <NameContainer>
          <label>Task Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            value={taskData.name}
            onChange={(e) => setTaskData({ ...taskData, name: e.target.value })}
            required
          />
        </NameContainer>

        {/* Two Main Columns */}
        <ContentColumns>
          {/* Left Column - Description */}
          <LeftColumn>
            <DescriptionContainer>
              <label>Description</label>
              <Toolbar>
                <button onClick={() => handleStyleClick('BOLD')}>B</button>
                <button onClick={() => handleStyleClick('ITALIC')}>I</button>
                <button onClick={() => handleStyleClick('UNDERLINE')}>U</button>
                <button onClick={addHighlight}>Highlight</button>
                <button onClick={() => handleBlockClick('code-block')}>Code</button>
              </Toolbar>
              <Editor
                editorState={editorState}
                onChange={setEditorState}
              />
            </DescriptionContainer>
          </LeftColumn>

          {/* Right Column - Controls */}
          <RightColumn>
            <ControlsGrid>
              {/* Left subcolumn */}
              <div>
                <FormGroup>
                  <label>Project</label>
                  <select
                    name="project"
                    value={taskData.project}
                    onChange={(e) => setTaskData({ ...taskData, project: e.target.value })}
                    required
                  >
                    <option value="">Select</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </FormGroup>
                <FormGroup>
                  <label>Creation Date</label>
                  <input
                    type="date"
                    name="creationDate"
                    value={taskData.creationDate}
                    onChange={(e) => setTaskData({ ...taskData, creationDate: e.target.value })}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>Priority</label>
                  <select
                    name="priority"
                    value={taskData.priority}
                    onChange={(e) => setTaskData({ ...taskData, priority: e.target.value })}
                    required
                  >
                    <option value="">Select</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </FormGroup>
              </div>

              {/* Right subcolumn */}
              <div>
                <FormGroup>
                  <label>Assigned To</label>
                  <select
                    name="assignedTo"
                    value={taskData.assignedTo}
                    onChange={(e) => setTaskData({ ...taskData, assignedTo: e.target.value })}
                    disabled={!taskData.project}
                    required
                  >
                    <option value="">Select</option>
                    {members.map((member) => (
                      <option key={member.id} value={member.id}>
                        {member.name} - {member.role}
                      </option>
                    ))}
                  </select>
                </FormGroup>
                <FormGroup>
                  <label>Expiration Date</label>
                  <input
                    type="date"
                    name="expirationDate"
                    value={taskData.expirationDate}
                    onChange={(e) => setTaskData({ ...taskData, expirationDate: e.target.value })}
                  />
                </FormGroup>
              </div>
            </ControlsGrid>
          </RightColumn>
        </ContentColumns>

        <ButtonGroup>
          <Button onClick={onClose}>Cancel</Button>
          <Button primary onClick={handleSubmit}>
            Save
          </Button>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default AddTask;