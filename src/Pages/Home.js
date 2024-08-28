import React, { useState } from 'react';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Modal from '../components/Modal';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px;
  width: 100%;
  margin: 0;
  background-color: #f4f4f4;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  position: sticky;
  top: 20px; 
  right: 20px;
  float:right;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 0; 

  &:hover {
    background-color: #2980b9;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  padding-top: 10px; 
 margin-top: 10px;
`;

const TaskListWrapper = styled.div`
  width: 100%;
  margin-top: 50px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <Header />
      <Title>Mis Tareas</Title>
      <ContentWrapper>
        <ToggleButton onClick={showModal}>
          {isModalVisible ? 'Add tasks' : 'Add tasks'}
        </ToggleButton>
        <TaskListWrapper>
          <TaskList />
        </TaskListWrapper>
      </ContentWrapper>
      {isModalVisible && (
        <Modal onClose={hideModal}>
          <TaskForm />
        </Modal>
      )}
    </Container>
  );
};

export default Home;
