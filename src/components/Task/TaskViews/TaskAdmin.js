import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import {
  FormGroup,
  ButtonGroup,
  Button,
  ControlsGrid,
  Overlay,
  ModalContainer,
  ContentColumns,
  LeftColumn,
  RightColumn,
  NameContainer,
  DescriptionContainer,
  TitleContainer,
  Toolbar,
} from './TaskAdmin.styles';

const TaskAdmin = ({ taskData, projectId, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [assignedBy, setAssignedTo] = useState('');
  const [priority, setPriority] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    const fetchTaskData = async () => {
      if (projectId && taskData?.id) {
        console.log(`Fetching task from project ID: ${projectId}, Task ID: ${taskData.id}`);
        try {
          const projectRef = doc(db, 'projects', projectId);
          const projectSnap = await getDoc(projectRef);

          if (projectSnap.exists()) {
            const projectData = projectSnap.data();
            const task = projectData.tasks.find((t) => t.id === taskData.id);

            if (task) {
              console.log('Fetched Task Data:', task);
              setTaskName(task.name || '');
              setAssignedTo(task.assignedTo || '');
              setPriority(task.priority || '');
              setExpirationDate(task.expirationDate || '');
              setStatus(task.status || '');
              setCreationDate(task.creationDate || '');
            } else {
              console.warn('No task found with the provided ID in tasks array.');
            }
          } else {
            console.warn('No project found with the provided ID.');
          }
        } catch (error) {
          console.error('Error fetching task:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTaskData();
  }, [projectId, taskData]);

 


  // Handle rich text formatting buttons
  const handleBold = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleItalic = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handleUnderline = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const handleHighlight = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'));
  };

  const handleCode = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'));
  };

  // Handle saving changes
  const handleSaveChanges = async () => {
    if (taskData?.id && projectId) {
      try {
        const projectRef = doc(db, 'projects', projectId);
        const projectSnap = await getDoc(projectRef);
        
        if (projectSnap.exists()) {
          const projectData = projectSnap.data();
          const taskIndex = projectData.tasks.findIndex((t) => t.id === taskData.id);
          
          if (taskIndex !== -1) {
            // Prepare updated task data
            const updatedTask = {
              ...projectData.tasks[taskIndex],
              name: taskName,
              assignedBy,
              priority,
              expirationDate,
              status,
              description: editorState.getCurrentContent().getPlainText(),
            };
            
            // Replace the task with the updated task
            projectData.tasks[taskIndex] = updatedTask;

            // Update project document
            await updateDoc(projectRef, {
              tasks: projectData.tasks,
            });

            console.log('Task updated successfully!');
            onClose();  // Close the modal after saving
          } else {
            console.error('Task not found in project tasks.');
          }
        }
      } catch (error) {
        console.error('Error saving changes:', error);
      }
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TitleContainer>Task Administration</TitleContainer>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <NameContainer>
            <label>Task Name</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
            />
          </NameContainer>
        )}

        <ContentColumns>
          <LeftColumn>
            <DescriptionContainer>
              <label>Description</label>
              <Toolbar>
                <button onClick={handleBold}>B</button>
                <button onClick={handleItalic}>I</button>
                <button onClick={handleUnderline}>U</button>
                <button onClick={handleHighlight}>Highlight</button>
                <button onClick={handleCode}>Code</button>
              </Toolbar>
              <Editor
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Enter task description..."
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  minHeight: '200px',
                  padding: '10px',
                  backgroundColor: '#fff',
                  fontSize: '14px',
                  color: '#333',
                  lineHeight: '1.5',
                  width: '100%',
                }}
              />
            </DescriptionContainer>
          </LeftColumn>

          <RightColumn>
            <ControlsGrid>
              <div>
                <FormGroup>
                  <label>Project</label>
                  <input
                    type="text"
                    value={taskData.projectName}
                    readOnly
                  />
                </FormGroup>

                <FormGroup>
                  <label>Assigned By</label>
                  <input
                    type="text"
                    value={taskData.assignedBy || 'Not Assigned'}
                    readOnly
                  />
                </FormGroup>

                <FormGroup>
                  <label>Creation Date</label>
                  <input
                    type="date"
                    value={creationDate || ''}
                    readOnly
                  />
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <label>Priority</label>
                  <select
                    value={priority || 'Not Set'}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <label>Expiration Date</label>
                  <input
                    type="date"
                    value={expirationDate || ''}
                    onChange={(e) => setExpirationDate(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Status</label>
                  <input
                    type="text"
                    value={status || ''}
                    onChange={(e) => setStatus(e.target.value)}
                    readOnly
                  />
                </FormGroup>
              </div>
            </ControlsGrid>
          </RightColumn>
        </ContentColumns>

        <ButtonGroup>
          <Button onClick={onClose}>Cancel</Button>
          <Button primary onClick={handleSaveChanges}>Save Changes</Button>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default TaskAdmin;
