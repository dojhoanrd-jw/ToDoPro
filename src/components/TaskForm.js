// src/components/TaskForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const FormContainer = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #e0e0e0;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  height: 100px;
  box-sizing: border-box;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const auth = getAuth();
  const firestore = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim()) {
      const userId = auth.currentUser.uid;
      await addDoc(collection(firestore, 'tasks'), {
        title,
        description,
        dueDate,
        completed: false,
        createdAt: new Date().toISOString(),
        userId,
      });
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add New Task</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <SubmitButton type="submit">Add Task</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default TaskForm;
