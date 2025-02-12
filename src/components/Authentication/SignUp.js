import React from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth, googleProvider } from '../../Firebase';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { FcGoogle } from 'react-icons/fc'; 
import { FaUser, FaLock, FaRegIdCard } from 'react-icons/fa'; 

import { Form, Field, Icon, Input, Button, Divider, GoogleButton, GoogleIcon } from './SignUp.styles';

// Initialize Firestore
const db = getFirestore();

const SignUp = () => {

  // Function to create or update user in Firestore
  const createOrUpdateUserInFirestore = async (uid, email, displayName, photoURL) => {
    try {
      const userRef = doc(db, "users", uid);
      await setDoc(
        userRef,
        { email, displayName: displayName || '', photoUrl: photoURL || '' },
        { merge: true } 
      );
      console.log("User saved/updated in Firestore:", uid);
    } catch (error) {
      console.error("Error saving/updating user in Firestore:", error);
    }
  };

  // Function to sign up with email and password
  const signUpWithEmail = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile in Firebase Authentication
      await updateProfile(user, { displayName: name });
      console.log("Updated username in Firebase Authentication:", name);

      // Save user data in Firestore
      await createOrUpdateUserInFirestore(user.uid, email, name, user.photoURL);
    } catch (error) {
      console.error("Error registering with email and password:", error);
    }
  };

  // Function to sign up with Google
  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user data in Firestore
      await createOrUpdateUserInFirestore(user.uid, user.email, user.displayName, user.photoURL);
    } catch (error) {
      console.error("Error registering with Google:", error);
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        signUpWithEmail(name, email, password);
      }}
    >
      <Field>
        <Icon>
          <FaRegIdCard />
        </Icon>
        <Input type="text" name="name" placeholder="Full Name" required />
      </Field>
      <Field>
        <Icon>
          <FaUser />
        </Icon>
        <Input type="email" name="email" placeholder="Email" required />
      </Field>
      <Field>
        <Icon>
          <FaLock />
        </Icon>
        <Input type="password" name="password" placeholder="Password" required />
      </Field>
      <Button type="submit">Sign Up</Button>
      <Divider>OR</Divider>
      <GoogleButton onClick={signUpWithGoogle}>
        <GoogleIcon />
        Sign up with Google
      </GoogleButton>
    </Form>
  );
};

export default SignUp;
