// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import styled from 'styled-components';

const TaskListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const TaskItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 10px;
  background-color: ${props => (props.completed ? '#e9f5e9' : '#ffffff')};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  border: 1px solid #ddd;

  &:hover {
    background-color: ${props => (props.completed ? '#d3f0d3' : '#f1f1f1')};
  }
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskTitle = styled.span`
  flex-grow: 1;
  margin-left: 10px;
  font-size: 16px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  color: ${props => (props.completed ? '#7f8c8d' : '#2c3e50')};
`;

const TaskDescription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

const TaskDate = styled.span`
  font-size: 12px;
  color: #999;
`;

const TaskActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TaskCheckbox = styled.input`
  width: 18px;
  height: 18px;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const auth = getAuth();
  const firestore = getFirestore();

  useEffect(() => {
    const userId = auth.currentUser.uid;
    const q = query(collection(firestore, 'tasks'), where('userId', '==', userId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasksData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
    });

    return () => unsubscribe();
  }, [firestore, auth]);

  const toggleComplete = async (task) => {
    await updateDoc(doc(firestore, 'tasks', task.id), {
      completed: !task.completed,
    });
  };

  const deleteTask = async (taskId) => {
    await deleteDoc(doc(firestore, 'tasks', taskId));
  };

  return (
    <TaskListContainer>
      {tasks.map(task => (
        <TaskItem key={task.id} completed={task.completed}>
          <TaskHeader>
            <TaskCheckbox
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task)}
            />
            <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
            <TaskActions>
              <TaskDate>{task.dueDate}</TaskDate>
              <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
            </TaskActions>
          </TaskHeader>
          <TaskDescription>{task.description}</TaskDescription>
        </TaskItem>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;
