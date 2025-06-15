import React, { createContext, useState } from 'react';

// 1. Create context
export const AuthContext = createContext();

// 2. Create provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user = null means logged out

  const login = (userData) => {
    setUser(userData); // userData: { name, email, token, etc. }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
