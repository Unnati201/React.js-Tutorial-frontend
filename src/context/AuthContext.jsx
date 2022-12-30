import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsUserLoggedIn(true);
  };

  const handleLogout = (params) => {
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
