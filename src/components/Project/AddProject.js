import React, { useState, useEffect } from 'react';
import { db, auth } from '../../Firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Overlay, ModalContainer, Header, CloseButton, Form, SubmitButton } from './AddProject.styles';

const AddProject = ({ isOpen, onClose, onAddProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    dueDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle modal open/close side effects
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Format date to a specific string format
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting || !formData.name.trim() || !formData.description.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const user = auth.currentUser;

      if (!user) {
        console.error('Unauthenticated user.');
        return;
      }

      const projectRef = doc(collection(db, 'projects'));
      const projectId = projectRef.id;

      const createdAt = formatDate(new Date());
      const dueDate = formData.dueDate ? formatDate(new Date(formData.dueDate)) : 'none';

      const creatorMember = {
        id: user.uid,
        name: user.displayName || user.email,
        role: 'Creator',
        status: 'Asset',
        tasksAssigned: 0,
        avatar: user.photoURL || 'https://via.placeholder.com/50',
      };

      const newProject = {
        id: projectId,
        ...formData,
        creator: user.email,
        createdAt: createdAt,
        dueDate: dueDate,
        lastModified: null,
        members: [creatorMember],
        tasks: [],
      };

      await setDoc(projectRef, newProject);

      onAddProject(newProject);
      setFormData({ name: '', description: '', dueDate: '' });
      onClose();
    } catch (error) {
      console.error('Error adding project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>Add New Project</h2>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>
        <Form onSubmit={handleSubmit}>
          <label>
            Project name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter the project name"
              required
            />
          </label>
          <label>
           Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Write a brief description of the project"
              required
            />
          </label>
          <label>
            Deadline
            <input
              type="datetime-local"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
            />
            <small>If you don't select a date, it will be saved as "none."</small>
          </label>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Project'}
          </SubmitButton>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};

export default AddProject;
