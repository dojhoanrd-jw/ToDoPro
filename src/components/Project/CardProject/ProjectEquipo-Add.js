import React, { useState } from 'react';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { ModalContainer, ModalContent, Input, Error, ButtonContainer, ModalButton } from './ProjectEquipo-Add.styles';

const AddMemberModal = ({ isOpen, onClose, onAddMember, projectId }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const db = getFirestore();

  // Function to handle adding a member
  const handleAddMember = async () => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        const newMember = {
          id: userDoc.id,
          name: userData.name || email,
          role: 'Not assigned',
          status: 'Active',
          tasksAssigned: 0,
          avatar: userData.photoURL || 'https://via.placeholder.com/50',
        };

        const projectRef = doc(db, 'projects', projectId);

        await updateDoc(projectRef, {
          members: arrayUnion(newMember),
          lastUpdated: serverTimestamp(),
        });

        onAddMember(newMember);
        onClose();
        setEmail('');
        setError('');
      } else {
        setError('No user found with that email.');
      }
    } catch (e) {
      setError('An error occurred while searching for the user.');
      console.error(e);
    }
  };

  return (
    isOpen && (
      <ModalContainer>
        <ModalContent>
          <h3>Search Member by Email</h3>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Error>{error}</Error>
          <ButtonContainer>
            <ModalButton onClick={handleAddMember}>Add</ModalButton>
            <ModalButton onClick={onClose}>Cancel</ModalButton>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    )
  );
};

export default AddMemberModal;
