"use client";

import { useState, useEffect, use } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "@/app/firebase/config";

// If you use a usual default collection, this is a good place to set it as a default and back-up.
// This is a custom hook to fetch a Firestore collection in real-time
export function useFirestorecollection(collectionName = "users") {
  // start at the start and at the end.
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect to set up real-time listener
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Update state with fetched data
        setData(items);
        // Reset error state
        setIsLoading(false);
        setError(null);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
    // Cleanup subscription on unmount
    return unsubscribe;
  }, [collectionName]);
  // Return the data, error, and loading state
  return { data, error, isLoading };
}
