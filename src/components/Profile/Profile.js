import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, updateProfile, db, doc, setDoc, getDoc } from '../../Firebase';
import ProfileAvatar from './ProfileAvatar';
import ChangePassword from './ChangePassword';
import {
  ProfileContainer,
  LeftPanel,
  RightPanel,
  Section,
  SectionTitle,
  SectionContent,
  InfoColumn,
  Input,
  ActionButton,
} from './Profile.styles';

// Function to validate URLs
const isValidURL = (url) => {
  const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9._-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
  return urlPattern.test(url);
};

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    facebook: '',
    twitter: '',
    instagram: '',
  });
  const [lastSignInTime, setLastSignInTime] = useState('');
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch user data on authentication state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setFormData({
          displayName: currentUser.displayName || '',
        });
        setLastSignInTime(currentUser.metadata.lastSignInTime);
        setIsGoogleUser(currentUser.providerData[0]?.providerId === 'google.com');

        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setFormData((prevState) => ({
              ...prevState,
              facebook: userData.facebook || '',
              twitter: userData.twitter || '',
              instagram: userData.instagram || '',
            }));
          }
        } catch (error) {
          console.error('Error loading data:', error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle edit button click
  const handleEditClick = async () => {
    if (editMode) {
      const newErrors = {};
      if (formData.facebook && !isValidURL(formData.facebook)) {
        newErrors.facebook = 'Invalid URL';
      }
      if (formData.twitter && !isValidURL(formData.twitter)) {
        newErrors.twitter = 'Invalid URL';
      }
      if (formData.instagram && !isValidURL(formData.instagram)) {
        newErrors.instagram = 'Invalid URL';
      }

      setErrors(newErrors);

      if (Object.values(newErrors).some((error) => error)) return;

      try {
        if (formData.displayName !== user.displayName) {
          await updateProfile(auth.currentUser, { displayName: formData.displayName });
        }

        const userDocRef = doc(db, 'users', user.uid);
        await setDoc(
          userDocRef,
          {
            displayName: formData.displayName || '',
            facebook: formData.facebook || '',
            twitter: formData.twitter || '',
            instagram: formData.instagram || '',
          },
          { merge: true }
        );
      } catch (error) {
        console.error('Error updating data:', error);
      }
    }
    setEditMode(!editMode);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (['facebook', 'twitter', 'instagram'].includes(name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value && !isValidURL(value) ? 'Invalid URL' : '',
      }));
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <LeftPanel>
        <ProfileAvatar
          photoURL={user.photoURL}
          onAvatarChange={(url) => setUser((prev) => ({ ...prev, photoURL: url }))}
        />
      </LeftPanel>

      <RightPanel>
        <Section>
          <SectionTitle>
            <FaEdit style={{ marginRight: '10px' }} /> User Information
          </SectionTitle>
          <SectionContent>
            <InfoColumn>
              <strong>Name:</strong>
              {editMode ? (
                <Input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                />
              ) : (
                <div>{formData.displayName || 'Unnamed user'}</div>
              )}
            </InfoColumn>
            <InfoColumn>
              <strong>Email:</strong>
              <div>{user.email}</div>
            </InfoColumn>
            {['facebook', 'twitter', 'instagram'].map((platform) => (
              <InfoColumn key={platform}>
                <strong>{platform.charAt(0).toUpperCase() + platform.slice(1)}:</strong>
                {editMode ? (
                  <>
                    <Input
                      type="text"
                      name={platform}
                      value={formData[platform]}
                      onChange={handleInputChange}
                      placeholder={`https://${platform}.com/your-profile`}
                    />
                    {errors[platform] && (
                      <span style={{ color: 'red' }}>{errors[platform]}</span>
                    )}
                  </>
                ) : formData[platform] ? (
                  <a
                    href={formData[platform]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formData[platform]}
                  </a>
                ) : (
                  <div>No information</div>
                )}
              </InfoColumn>
            ))}
          </SectionContent>
        </Section>

        <ChangePassword isGoogleUser={isGoogleUser} />

        <Section>
          <SectionTitle>
            <MdAccessTimeFilled style={{ marginRight: '10px' }} /> Last Access
          </SectionTitle>
          <SectionContent>{lastSignInTime}</SectionContent>
        </Section>

        <ActionButton onClick={handleEditClick}>
          {editMode ? 'Save Changes' : 'Edit'}
        </ActionButton>
      </RightPanel>
    </ProfileContainer>
  );
};

export default Profile;