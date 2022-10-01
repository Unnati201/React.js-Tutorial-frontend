import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const isTokenPresent = localStorage.getItem("token");
    if (isTokenPresent) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  const handleLogin = (params) => {
    const value = "somelargetoken";
    localStorage.setItem("token", value);
    setIsUserLoggedIn(true);
  };

  const handleLogout = (params) => {
    localStorage.removeItem("token");
    setIsUserLoggedIn(false);
  };

  const handleAddTutorial = (formData) => {
    setTutorials([...tutorials, formData]);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        tutorials,
        handleLogin,
        handleLogout,
        handleAddTutorial,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
