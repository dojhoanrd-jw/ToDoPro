import React from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../firebase';
import styled from 'styled-components';
import { FaUser, FaLock, FaGoogle } from 'react-icons/fa';
import logo from '../img/img.png'; 

const SignUp = () => {
  const signUpWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      console.error("Error signing up with email: ", error);
    });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).catch((error) => {
      console.error("Error signing up with Google: ", error);
    });
  };

  return (
    <Container>
      <Logo src={logo} alt="App Icon" />
      <Title>Register</Title>
      <Form onSubmit={(e) => {
        e.preventDefault();
        signUpWithEmail(e.target.email.value, e.target.password.value);
      }}>
        <InputWrapper>
          <FaUserIcon />
          <Input type="email" name="email" placeholder="Email Address" />
        </InputWrapper>
        <InputWrapper>
          <FaLockIcon />
          <Input type="password" name="password" placeholder="Password" />
        </InputWrapper>
        <SubmitButton type="submit">Create Account</SubmitButton>
      </Form>
      <GoogleButton onClick={signUpWithGoogle}>
        <GoogleIcon />
        Sign up with Google
      </GoogleButton>
    </Container>
  );
};

export default SignUp;

// Styled-components styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #f4f4f4;
  color: #333;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 0.1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  color: #333;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

const FaUserIcon = styled(FaUser)`
  margin-left: 1rem;
  color: #333;
`;

const FaLockIcon = styled(FaLock)`
  margin-left: 1rem;
  color: #333;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const GoogleButton = styled.button`
  background-color: #4285f4;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: #357ae8;
  }
`;

const GoogleIcon = styled(FaGoogle)`
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;
