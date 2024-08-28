// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import UserMenu from './UserMenu';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: #ffffff;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>ToDoPro</Logo>
      <UserMenu />
    </HeaderContainer>
  );
};

export default Header;
