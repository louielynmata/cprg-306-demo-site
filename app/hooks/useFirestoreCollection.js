"use client";

// useEffect to set up real-time listener
import { useState, useEffect, use } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "@/app/firebase/config";

// If you use a usual default collection, this is a good place to set it as a default and back-up.
// This is a custom hook to fetch a Firestore collection in real-time
export function useFirestoreCollection(collectionName = "users") {
  // start doing your code at the start and at the end.
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [dataError, setDataError] = useState(null);

  // Set up real-time listener using useEffect
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Update state with the fetched data
        setData(items);
        // Reset loading and error states
        setIsDataLoading(false);
        setDataError(null);
      },
      (error) => {
        setError(error.message);
        setIsDataLoading(false);
      }
    );
    // Cleanup subscription on unmount
    return unsubscribe;
  }, [collectionName]);
  // Return the data, loading state, and error state
  return { data, isDataLoading, dataError };
}
