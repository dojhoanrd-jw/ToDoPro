import React from 'react';
import KanbanTask from './KanbanTask';
import { ColumnContainer, ColumnHeader } from './KanbanColumn.styles';

// KanbanColumn component
const KanbanColumn = ({ title, tasks, onSelectTask }) => {
  return (
    <ColumnContainer>
      <ColumnHeader>{title}</ColumnHeader>
      {tasks.map((task) => (
        <KanbanTask key={task.id} task={task} onSelect={() => onSelectTask(task.id)} />
      ))}
    </ColumnContainer>
  );
};

export default KanbanColumn;
