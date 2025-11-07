// Create context for authentication state
// Then we create a provider to wrap around our app to provide auth state to all components. It's important to have a children.
"use client";

// 1. IMPORT
// context stuff
import { createContext, useContext, useEffect, useState } from "react";
// Firebase SDK Auth Variables
import { onAuthStateChanged } from "firebase/auth";
// our auth
import { auth } from "../firebase/config"; // Import Firebase auth instance

// 2. Create AuthContext
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 3. State to hold authenticated user info
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 7. Listen for auth state changes
useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          console.log("User Authenticated: ", user.email);
        } else {
          console.log("No user found");
        }
        setAuthUser(user);
        setLoading(false);
        console.log("loading complete");
      },
      (error) => {
        console.error("Auth error", error);
        setAuthUser(null);
        setLoading(false);
      }
    );
    return () => {
      console.log("Cleaning up listener");
      unsubscribe();
    };
  }, []);


  // 4. Provide auth state to children
  return (
    <AuthContext.Provider value={{ authUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// 5. Custom hook to use the AuthContext
export function useAuth() {
  const context = useContext(AuthContext);

  // This error is to make sure we are using the context inside the provider meaning even if we try to use the context outside of the provider/wrapper it will give us an error.
  if (context === undefined) {
    throw new Error(
      "Context Error: useAuth must be used within an AuthProvider"
    );
  }

  return context;
}
