import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import styled from 'styled-components';

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(prev => !prev);
  };

  return (
    <AuthWrapper>
      <FormContainer>
        <FormContent>
          {isSignUp ? <SignUp /> : <SignIn />}
          <ToggleLink onClick={toggleForm}>
  {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
</ToggleLink>
        </FormContent>
      </FormContainer>
    </AuthWrapper>
  );
};

export default Authentication;

// styled-components

const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ffff;
  padding: 3rem;
  box-sizing: border-box;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2rem;
  color: #333;
  box-sizing: border-box;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleLink = styled.p`
  color: #3498db;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
    text-decoration: underline;
  }
`;
