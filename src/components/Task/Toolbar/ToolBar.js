import React, { useState, useEffect } from 'react';
import { RiAddFill, RiProjectorFill, RiListCheck2 } from 'react-icons/ri'; // Added RiListCheck2 for List view
import AddTask from './AddTask';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../../Firebase';
import { 
  ToolbarContainer, 
  ProjectDropdownContainer, 
  ButtonGroup, 
  ToolbarButton, 
  Dropdown 
} from './ToolBar.styles';

const Toolbar = ({
  onChangeView,
  onSelectProject,
  currentView,
  selectedProject,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const querySnapshot = await getDocs(collection(db, 'projects'));
          const userProjects = querySnapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
            .filter(
              (project) =>
                Array.isArray(project.members) &&
                project.members.some((member) => member.id === user.uid)
            );
          setProjects(userProjects);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Handle project change
  const handleProjectChange = (event) => {
    const projectId = event.target.value;
    onSelectProject(projectId);
  };

  // Toggle view
  const toggleView = () => {
    onChangeView(currentView === 'list' ? 'kanban' : 'list');
  };

  return (
    <>
      <ToolbarContainer>
        <ProjectDropdownContainer>
          <label htmlFor="projectDropdown">Project:</label>
          <Dropdown
            id="projectDropdown"
            value={selectedProject}
            onChange={handleProjectChange}
          >
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </Dropdown>
        </ProjectDropdownContainer>

        <ButtonGroup>
          <ToolbarButton onClick={toggleView}>
            {currentView === 'list' ? (
              <RiListCheck2 size={24} /> // Icon for List view
            ) : (
              <RiProjectorFill size={24} /> // Icon for Kanban view
            )}
            <span>{currentView === 'list' ? 'Kanban View' : 'List View'}</span>
          </ToolbarButton>

          <ToolbarButton onClick={() => setIsModalOpen(true)}>
            <RiAddFill size={24} />
            <span>Add Task</span>
          </ToolbarButton>
        </ButtonGroup>
      </ToolbarContainer>

      {isModalOpen && <AddTask onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Toolbar;
