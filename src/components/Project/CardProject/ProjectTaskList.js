import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import {
  TaskContainer,
  Header,
  Title,
  TaskList,
  TaskItem,
  TaskInfo,
  TaskTitle,
  TaskDetails,
  TaskAssignedTo,
  TaskStatus,
  TaskDeadline,
  RemoveButton
} from './ProjectTaskList.styles';

const ProjectTaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tasks data from Firestore
  useEffect(() => {
    const fetchTeamAndTasks = async () => {
      try {
        setLoading(true);
        const projectRef = doc(db, 'projects', projectId);
        const projectSnap = await getDoc(projectRef);

        if (projectSnap.exists()) {
          const projectData = projectSnap.data();
          console.log('Proyecto encontrado:', projectData);

          const tasks = projectData.tasks || [];
          console.log('Tasks found:', tasks);
          setTasks(tasks);
        } else {
          console.warn(`The project with ID ${projectId} does not exist.`);
        }
      } catch (error) {
        console.error('Error loading project tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchTeamAndTasks();
    }
  }, [projectId]);

  // Handle removing a task
  const handleRemoveTask = async (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    try {
      const projectRef = doc(db, 'projects', projectId);
      await updateDoc(projectRef, { tasks: updatedTasks });
      console.log(`Task with ID ${taskId} successfully removed.`);
    } catch (error) {
      console.error('Error deleting Firestore task:', error);
    }
  };

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <TaskContainer>
      <Header>
        <Title>Assigned Tasks</Title>
      </Header>
      <TaskList>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id}>
              <TaskInfo>
                <TaskTitle>{task.name || 'Title not available'}</TaskTitle>
                <TaskDetails>
                  <TaskAssignedTo>{task.assignedToName || 'Assigned to Unknown'}</TaskAssignedTo>
                  <TaskStatus status={task.status}>{task.status || 'Status not available'}</TaskStatus>
                </TaskDetails>
                <TaskDeadline>Deadline: {task.deadline || 'Not available'}</TaskDeadline>
              </TaskInfo>
              <RemoveButton onClick={() => handleRemoveTask(task.id)}>
                Remove
              </RemoveButton>
            </TaskItem>
          ))
        ) : (
          <p>There are no assigned tasks.</p>
        )}
      </TaskList>
    </TaskContainer>
  );
};

export default ProjectTaskList;
