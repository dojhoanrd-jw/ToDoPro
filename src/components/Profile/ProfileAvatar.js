import React, { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth, db } from '../../Firebase'; 
import { doc, setDoc } from 'firebase/firestore';
import { AvatarWrapper, Avatar, ChangeAvatarButton } from './ProfileAvatar.styles'; 

const ProfileAvatar = ({ photoURL, onAvatarChange }) => {
  const [loading, setLoading] = useState(false);

  // Function to handle avatar change
  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'userimg');

    try {
      setLoading(true);
      
      // Upload image to Cloudinary
      const response = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error uploading image to Cloudinary');
      }

      const data = await response.json();
      const imageUrl = data.secure_url;

      // Update user profile in Firebase Authentication
      await updateProfile(auth.currentUser, { photoURL: imageUrl });

      // Save user photo URL in Firestore
      const userDocRef = doc(db, 'users', auth.currentUser.uid); 
      await setDoc(userDocRef, { photoURL: imageUrl }, { merge: true });

      // Update avatar in the component
      onAvatarChange(imageUrl);
    } catch (error) {
      console.error('Error updating profile photo:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AvatarWrapper>
      <Avatar src={photoURL || 'https://via.placeholder.com/180'} alt="profile photo" />
      <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleAvatarChange} />
      <ChangeAvatarButton onClick={() => document.getElementById('fileInput').click()} disabled={loading}>
        {loading ? 'Charging...' : 'Update Photo'}
      </ChangeAvatarButton>
    </AvatarWrapper>
  );
};

export default ProfileAvatar;
