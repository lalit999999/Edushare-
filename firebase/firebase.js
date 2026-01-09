// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzE5Da0H3JhKUcCKZwb0Zy8L2h9-6YwQE",
  authDomain: "app-8b003.firebaseapp.com",
  databaseURL: "https://app-8b003-default-rtdb.firebaseio.com",
  projectId: "app-8b003",
  storageBucket: "app-8b003.firebasestorage.app",
  messagingSenderId: "790357474054",
  appId: "1:790357474054:web:ec0b2ccb4d1d05f369bc87"
};

const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
