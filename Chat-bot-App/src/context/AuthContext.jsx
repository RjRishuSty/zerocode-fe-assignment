import React, { createContext, useEffect, useState } from "react";

//* Create context
export const AuthContext = createContext();

//* Create provider component
const AuthProvider = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(null);

   useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) setIsAuthUser(JSON.parse(user));
  }, []);
 
  const login = (userData) => {
    localStorage.setItem("token", "dummy-jwt-token");
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthUser, login, logout, }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
