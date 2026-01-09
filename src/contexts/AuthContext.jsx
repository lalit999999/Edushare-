import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";


import {
  registerWithEmail,
  loginWithEmail,
  loginWithGoogle,
  logoutUser,
} from "../services/auth.service.js";
import { isOwnerUser } from "../config/env.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        firebaseUser.isOwner = isOwnerUser(firebaseUser.email);
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsub;
  }, []);

  const register = (data) => registerWithEmail(data);
  const login = (email, password) => loginWithEmail(email, password);
  const googleLogin = () => loginWithGoogle();
  const logout = () => logoutUser();

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isOwner: user?.isOwner || false,
        register,
        login,
        googleLogin,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
