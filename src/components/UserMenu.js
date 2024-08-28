// src/components/UserMenu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { getAuth, signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  color: white;
  padding: 20px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const MenuItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #555;
  }
`;

const UserIcon = styled.div`
  cursor: pointer;
  background-color: #444;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
`;

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(); // Obtén la instancia de autenticación

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
      navigate('/auth');
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
  };

  return (
    <MenuContainer>
      <UserIcon onClick={toggleMenu}>
        <FaUser />
      </UserIcon>
      <DropdownMenu open={open}>
        <MenuItem>Perfil</MenuItem>
        <MenuItem onClick={handleSignOut}>Cerrar Sesión</MenuItem>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default UserMenu;
