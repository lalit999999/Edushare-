// src/firebase/firebase.auth.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { firebaseApp } from "./firebase.config";

export const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// Register
export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Google login
export const loginWithGoogle = () =>
  signInWithPopup(auth, googleProvider);

// Logout
export const logoutUser = () => signOut(auth);

// Auth listener
export const listenToAuthChanges = (callback) =>
  onAuthStateChanged(auth, callback);
