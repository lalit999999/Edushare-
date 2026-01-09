import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

/* ===============================
   EMAIL + PASSWORD REGISTER
================================ */
export const registerWithEmail = async (data) => {
  const email = data?.email?.trim();
  const password = data?.password;

  if (!email) {
    throw new Error("Email is required");
  }

  if (!password || password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};

/* ===============================
   EMAIL + PASSWORD LOGIN
================================ */
export const loginWithEmail = async (email, password) => {
  const cleanEmail = email?.trim();

  if (!cleanEmail || !password) {
    throw new Error("Email and password are required");
  }

  const userCredential = await signInWithEmailAndPassword(
    auth,
    cleanEmail,
    password
  );

  return userCredential.user;
};

/* ===============================
   GOOGLE LOGIN / REGISTER
================================ */
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  const result = await signInWithPopup(auth, provider);
  return result.user;
};

/* ===============================
   LOGOUT
================================ */
export const logoutUser = async () => {
  await signOut(auth);
};
