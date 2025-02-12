import React, { useState } from 'react';
import Header from '../components/Header';
import TaskList from '../components/Task/TaskViews/Tasklist/TaskList';
import Kanban from '../components/Task/TaskViews/Kanban/Kanban';
import Toolbar from '../components/Task/Toolbar/ToolBar';
import Profile from '../components/Profile/Profile';
import Projects from '../components/Project/Projects';
import Dashboard from '../components/Dashboard/Dashboard';
import { Container, ContentWrapper } from './Home.styles'; // Importa los estilos

const Home = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [viewMode, setViewMode] = useState('list'); // 'list' o 'kanban'
  const [selectedProject, setSelectedProject] = useState(null);

  const handleChangeView = (view) => {
    console.log(`Cambiando vista a: ${view}`);
    setViewMode(view); // Actualiza la vista
  };

  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId); // Actualiza el proyecto seleccionado
  };

  return (
    <Container>
      <Header activeIcon={activePage} onIconSelect={setActivePage} />
      <ContentWrapper>
        {activePage === 'tasks' && (
          <>
            <Toolbar
              onChangeView={handleChangeView}
              onSelectProject={handleSelectProject} // Pasa la función aquí
              selectedProject={selectedProject}
              currentView={viewMode}
            />
            {viewMode === 'list' && <TaskList projectId={selectedProject} />}
            {viewMode === 'kanban' && <Kanban projectId={selectedProject} />}
          </>
        )}
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'projects' && <Projects />}
        {activePage === 'profile' && <Profile />}
      </ContentWrapper>
    </Container>
  );
};

export default Home;
