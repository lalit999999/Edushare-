import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { isOwnerUser } from '../config/env';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      const parsedUser = JSON.parse(stored);
      // Check if user is owner
      parsedUser.isOwner = isOwnerUser(parsedUser.email);
      return parsedUser;
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      // Always verify owner status
      const updatedUser = { ...user, isOwner: isOwnerUser(user.email) };
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email, password) => {
    // Mock login - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: email,
      college: 'MIT College of Engineering',
      semester: 6,
      department: 'Computer Science',
      uploads: 24,
      downloads: 156,
      joinedDate: '2024-09-01',
      isOwner: isOwnerUser(email) // Check owner status
    };
    
    setUser(mockUser);
  };

  const register = async (data) => {
    // Mock registration
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name,
      email: data.email,
      college: data.college,
      semester: data.semester,
      department: data.department,
      uploads: 0,
      downloads: 0,
      joinedDate: new Date().toISOString().split('T')[0],
      isOwner: isOwnerUser(data.email) // Check owner status
    };
    
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isOwner: user?.isOwner || false,
      login,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
