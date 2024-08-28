import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAxiQ3FLqfQMNzbJGC3rOJ-fdFI2GzOki4",
  authDomain: "todolist-530c2.firebaseapp.com",
  projectId: "todolist-530c2",
  storageBucket: "todolist-530c2.appspot.com",
  messagingSenderId: "583742200082",
  appId: "1:583742200082:web:e9a97cb1e6562e1a1dbbcb",
  measurementId: "G-LZCZTSS76D"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
