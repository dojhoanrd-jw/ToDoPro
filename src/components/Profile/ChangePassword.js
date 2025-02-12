import React, { useState } from 'react';
import { updatePassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { RiLockPasswordFill } from "react-icons/ri";
import { Section, SectionTitle, SectionContent, Input, ActionButton } from './ChangePassword.styles'; 

const ChangePassword = ({ isGoogleUser }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Function to handle password change
  const handlePasswordChange = async () => {
    if (currentPassword && newPassword) {
      try {
        if (isGoogleUser) return;

        await updatePassword(auth.currentUser, newPassword);
        alert('Password updated successfully');
      } catch (error) {
        console.error('Error changing password:', error);
        alert('Error changing password');
      }
    }
  };

  return (
    <Section>
      <SectionTitle><RiLockPasswordFill style={{ marginRight: '10px' }} />Change Password</SectionTitle>
      <SectionContent>
        <strong>Current Password: </strong>
        <Input
          type="password"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          disabled={isGoogleUser}
        />
      </SectionContent>
      <SectionContent>
        <strong>New Password: </strong>
        <Input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={isGoogleUser}
        />
      </SectionContent>
      {!isGoogleUser && (
        <ActionButton onClick={handlePasswordChange}>Change Password</ActionButton>
      )}
    </Section>
  );
};

export default ChangePassword;
