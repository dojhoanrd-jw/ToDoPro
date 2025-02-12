import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  updateEmail,
  updatePassword,
  updateProfile,
  sendSignInLinkToEmail,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection } from 'firebase/firestore'; // Importamos collection


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();  
export const db = getFirestore(app); 


export { 
  EmailAuthProvider, 
  reauthenticateWithCredential, 
  sendEmailVerification, 
  updateEmail, 
  updatePassword, 
  updateProfile,
  sendSignInLinkToEmail,
  GoogleAuthProvider, 
  doc,  
  setDoc,
  getDoc,
  updateDoc, 
  collection  
};
