"use client";
import { createContext, useContext, useState } from "react";

// Create the UserContext
const UserContext = createContext();

// Create the UserProvider component - something we wrap around the layout. This will provide user data to all children components
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Guest",
    icon: "👤",
    loggedIn: false,
  });

  // To toggle user login state
  const toggleUserLogin = () => {
    setUser((prev) => ({ ...prev, loggedIn: !prev.loggedIn }));
  };
  return (
    // How react puts data into all pages and components
    <UserContext.Provider value={{ user, toggleUserLogin }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook to use the UserContext in components to actually view the data
export const useUser = () => useContext(UserContext);
