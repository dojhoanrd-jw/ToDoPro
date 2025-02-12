import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaUser, FaSignOutAlt } from 'react-icons/fa'; 
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { 
  MenuContainer, 
  DropdownMenu, 
  MenuItem, 
  MenuIcon, 
  UserIcon, 
  InitialIcon 
} from './UserMenu.styles';

const UserMenu = ({ onIconSelect }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const menuRef = useRef(null);

  // Handle authentication state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, [auth]);

  // Toggle menu
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // Handle sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/auth'); 
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  // Render user icon
  const renderUserIcon = () => {
    if (user) {
      if (user.photoURL) {
        return <img src={user.photoURL} alt="User Profile" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />;
      } else {
        const emailInitial = user.email.charAt(0).toUpperCase();
        return <InitialIcon>{emailInitial}</InitialIcon>;
      }
    }
    return <FaUser />;
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MenuContainer ref={menuRef}>
      <UserIcon onClick={toggleMenu} title={user ? user.displayName : 'User'}>
        {renderUserIcon()}
      </UserIcon>
      <DropdownMenu open={open}>
        <MenuItem onClick={() => onIconSelect('profile')}>
          <MenuIcon><FaUser /></MenuIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <MenuIcon><FaSignOutAlt /></MenuIcon>
          Sign Out
        </MenuItem>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default UserMenu;
