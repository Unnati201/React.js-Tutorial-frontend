import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = (params) => {
    setIsUserLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
