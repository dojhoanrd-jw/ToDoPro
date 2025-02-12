// Imports: External libraries, services, and styles
import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../Firebase';
import { FaUser, FaLock } from 'react-icons/fa';
import {
  Form,
  Field,
  Icon,
  Input,
  Button,
  Divider,
  GoogleButton,
  GoogleIcon,
  ErrorMessage
} from './SignIn.styles';

// SignIn component
const SignIn = () => {
  // State to handle error messages
  const [error, setError] = useState('');

  // Function: Handle sign-in with email and password
  const handleEmailSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError('');
        console.log('User signed in');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/wrong-password':
            setError('Incorrect password. Please try again.');
            break;
          case 'auth/user-not-found':
            setError('No user found with this email.');
            break;
          case 'auth/invalid-email':
            setError('Invalid email format.');
            break;
          default:
            setError('Incorrect username or password. Please check your details and try again.');
            break;
        }
      });
  };

  // Function: Handle sign-in with Google
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setError('');
        console.log('User signed in with Google');
      })
      .catch((error) => {
        setError('Incorrect username or password. Please check your details and try again.');
        console.error('Error signing in with Google:', error.message);
      });
  };

  // Render sign-in form
  return (
    <Form onSubmit={handleEmailSignIn}>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {/* Email input field */}
      <Field>
        <Icon>
          <FaUser />
        </Icon>
        <Input type="email" name="email" placeholder="Email" required />
      </Field>

      {/* Password input field */}
      <Field>
        <Icon>
          <FaLock />
        </Icon>
        <Input type="password" name="password" placeholder="Password" required />
      </Field>

      {/* Sign in button */}
      <Button type="submit">Sign In</Button>

      {/* Divider */}
      <Divider>OR</Divider>

      {/* Google sign-in button */}
      <GoogleButton onClick={handleGoogleSignIn}>
        <GoogleIcon />
        Continue with Google
      </GoogleButton>
    </Form>
  );
};

export default SignIn;
