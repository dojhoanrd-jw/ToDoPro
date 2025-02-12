import React from 'react';
import { TaskCard, TaskHeader, TaskName, Checkbox, TaskDetails } from './kanban.styles';


const KanbanTask = ({
  task: {
    name,
    project,
    creationDate,
    expirationDate,
    duration,
    assignedBy,
    priority,
    completedPercentage,
  },
  onSelect,
}) => {
  return (
    <TaskCard>
      <TaskHeader>
        <TaskName>{name}</TaskName>
        <Checkbox type="checkbox" onChange={onSelect} />
      </TaskHeader>
      <TaskDetails>
        Project: <span>{project}</span>
      </TaskDetails>
      <TaskDetails>
       Creation date: <span>{creationDate}</span>
      </TaskDetails>
      <TaskDetails>
       Expiration date: <span>{expirationDate}</span>
      </TaskDetails>
      <TaskDetails>
        Duration: <span>{duration}</span>
      </TaskDetails>
      <TaskDetails>
        Assigned by: <span>{assignedBy}</span>
      </TaskDetails>
      <TaskDetails>
        Priority: <span>{priority}</span>
      </TaskDetails>
      <TaskDetails>
       % Filled: <span>{completedPercentage}%</span>
      </TaskDetails>
    </TaskCard>
  );
};

export default KanbanTask;

