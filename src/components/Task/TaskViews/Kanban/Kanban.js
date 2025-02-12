import React, { useState, useEffect } from 'react';
import { db, doc, getDoc, setDoc } from '../../../../Firebase';
import { FaUser, FaClock, FaExclamationCircle, FaCalendarAlt } from 'react-icons/fa';
import TaskAdmin from '../TaskAdmin';
import { KanbanContainer, Column, ColumnTitle, TaskCard, TaskHeader, TaskTitle, TaskDetails, PriorityTag, DatesWrapper, KanbanWrapper } from './Kanban.styles';

const Kanban = ({ projectId }) => {
  const [columns, setColumns] = useState({ todo: [], inProgress: [], done: [] });
  const [selectedTask, setSelectedTask] = useState(null);

  // Fetch tasks from Firestore
  useEffect(() => {
    if (!projectId) return;

    const fetchTasks = async () => {
      try {
        const projectRef = doc(db, 'projects', projectId);
        const projectSnap = await getDoc(projectRef);

        if (projectSnap.exists()) {
          const projectData = projectSnap.data();
          const tasks = projectData.tasks || [];

          const categorizedTasks = {
            todo: tasks.filter((task) => task.status === 'ToDo'),
            inProgress: tasks.filter((task) => task.status === 'InProgress'),
            done: tasks.filter((task) => task.status === 'Done'),
          };
          setColumns(categorizedTasks);
        } else {
          console.error('The project was not found.');
        }
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };

    fetchTasks();
  }, [projectId]);

  // Update tasks in Firestore
  const updateTasksInFirestore = async (updatedColumns) => {
    try {
      const projectRef = doc(db, 'projects', projectId);
      const allTasks = [
        ...updatedColumns.todo.map((task) => ({ ...task, status: 'ToDo' })),
        ...updatedColumns.inProgress.map((task) => ({ ...task, status: 'InProgress' })),
        ...updatedColumns.done.map((task) => ({ ...task, status: 'Done' })),
      ];

      await setDoc(projectRef, { tasks: allTasks }, { merge: true });
    } catch (error) {
      console.error('Error updating tasks in Firestore:', error);
    }
  };

  // Handle drag start
  const handleDragStart = (event, taskId, sourceColumn) => {
    event.dataTransfer.setData('task', JSON.stringify({ taskId, sourceColumn }));
  };

  // Handle drop
  const handleDrop = (event, targetColumn) => {
    event.preventDefault();
    const { taskId, sourceColumn } = JSON.parse(event.dataTransfer.getData('task'));

    if (sourceColumn !== targetColumn) {
      setColumns((prev) => {
        const task = prev[sourceColumn].find((t) => t.id === taskId);
        const updatedColumns = {
          ...prev,
          [sourceColumn]: prev[sourceColumn].filter((t) => t.id !== taskId),
          [targetColumn]: [...prev[targetColumn], { ...task, status: targetColumn }],
        };
        updateTasksInFirestore(updatedColumns);
        return updatedColumns;
      });
    }
  };

  // Handle drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle task click
  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  // Close modal
  const closeModal = () => setSelectedTask(null);

  return (
    <>
      <KanbanWrapper>
        <KanbanContainer>
          {Object.entries(columns).map(([columnId, tasks]) => (
            <Column
              key={columnId}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, columnId)}
            >
              <ColumnTitle>
                {columnId === 'todo'
                  ? 'To Do'
                  : columnId === 'inProgress'
                  ? 'In Progress'
                  : 'Completed'}
              </ColumnTitle>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  draggable
                  onDragStart={(event) => handleDragStart(event, task.id, columnId)}
                  onClick={() => handleTaskClick(task)}
                >
                  <TaskHeader>
                    <TaskTitle>{task.name}</TaskTitle>
                  </TaskHeader>
                  <TaskDetails>
                    <span>
                      <FaUser /> {task.assignedBy}
                    </span>
                    
                    <PriorityTag priority={task.priority}>
                      <FaExclamationCircle /> {task.priority}
                    </PriorityTag>
                  </TaskDetails>
                  <DatesWrapper>
                    <span>
                      <FaCalendarAlt /> Creation: {task.creationDate}
                    </span>
                    <span>
                      <FaCalendarAlt /> Expiration: {task.expirationDate}
                    </span>
                  </DatesWrapper>
                </TaskCard>
              ))}
            </Column>
          ))}
        </KanbanContainer>
      </KanbanWrapper>

      {selectedTask && <TaskAdmin taskData={selectedTask} projectId={projectId} onClose={closeModal} />}
    </>
  );
};

export default Kanban;
