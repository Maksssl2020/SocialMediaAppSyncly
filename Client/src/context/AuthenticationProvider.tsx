import React, { useState } from "react";

export const AuthenticationContext = React.createContext({});

export const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
