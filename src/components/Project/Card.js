import React from 'react';
import { FaClipboardList, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import { CardContainer, CardHeader, CardDescription, TaskSummary, TaskItem, LastUpdated } from './Card.styles'; // Importar Styled Components

const Card = ({ project, onClick }) => {
  const { name, description, tasksToDo = 0, tasksInProgress = 0, tasksCompleted = 0, lastUpdatedTime } = project;

  return (
    <CardContainer onClick={onClick}>
      <CardHeader>{name}</CardHeader>
      <CardDescription>{description}</CardDescription>
      <TaskSummary>
        <TaskItem>
          <FaClipboardList className="icon" />
          <span>{tasksToDo}</span>
        </TaskItem>
        <TaskItem>
          <FaSpinner className="icon" />
          <span>{tasksInProgress}</span>
        </TaskItem>
        <TaskItem>
          <FaCheckCircle className="icon" />
          <span>{tasksCompleted}</span>
        </TaskItem>
      </TaskSummary>
      <LastUpdated>Last update: {lastUpdatedTime}</LastUpdated>
    </CardContainer>
  );
};

export default Card;
