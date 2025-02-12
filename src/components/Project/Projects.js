import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../Firebase';
import { FaPlus } from 'react-icons/fa';
import Card from './Card';
import CardProjectDetails from './CardProject/CardProjectDetails';
import AddProject from './AddProject';
import { ProjectContainer, Title, ProjectList, AddProjectButton } from './Projects.styles';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch projects from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      const user = auth.currentUser;

      if (user) {
        try {
          const projectsCollection = collection(db, 'projects');
          const projectSnapshot = await getDocs(projectsCollection);

          const projectList = [];
          for (const projectDoc of projectSnapshot.docs) {
            const projectData = projectDoc.data();

            const isMember = projectData.members?.some(
              (member) => member.id === user.uid
            );

            if (isMember) {
              const tasks = projectData.tasks || [];
              const tasksToDo = tasks.filter((task) => task.status === 'ToDo').length;
              const tasksInProgress = tasks.filter((task) => task.status === 'InProgress').length;
              const tasksCompleted = tasks.filter((task) => task.status === 'Done').length;

              const lastUpdated = projectData.lastUpdated?.toDate();
              const lastUpdatedTime = lastUpdated
                ? formatLastUpdated(lastUpdated)
                : 'Not available';

              projectList.push({
                id: projectDoc.id,
                ...projectData,
                tasksToDo,
                tasksInProgress,
                tasksCompleted,
                lastUpdatedTime,
              });
            }
          }

          setProjects(projectList);
        } catch (error) {
          console.error('Error getting projects: ', error);
        }
      }
    };

    fetchProjects();
  }, []);

  // Format the last updated time
  const formatLastUpdated = (date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
  
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (seconds < 60) return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  };
  

  // Handle card click
  const handleCardClick = (project) => {
    setSelectedProject(project.id);
  };

  // Handle back to projects view
  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  // Handle adding a new project
  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setIsModalOpen(false);
  };

  return (
    <ProjectContainer>
      {!selectedProject && <Title>Projects</Title>}

      {selectedProject ? (
        <CardProjectDetails projectId={selectedProject} onBack={handleBackToProjects} />
      ) : (
        <ProjectList>
          {projects.map((project) => (
            <Card
              key={project.id}
              project={project}
              onClick={() => handleCardClick(project)}
            />
          ))}
          <AddProjectButton onClick={() => setIsModalOpen(true)}>
            <FaPlus className="icon" />
            Add Project
          </AddProjectButton>
        </ProjectList>
      )}

      <AddProject
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </ProjectContainer>
  );
};

export default Projects;
