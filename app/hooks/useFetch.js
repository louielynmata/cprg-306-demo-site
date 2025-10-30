import { useState, useEffect } from "react";

export function useFetch(url) {
  // STATE MANAGEMENT
  // Empty array cause cause trouble and undefined errors
  const [data, setData] = useState([]);
  // so we're going tomake something that handels that
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url) => {
    // Turn on loading state
    setIsLoading(true);
    // Reset error state before fetching
    setError(null);

    // Try fetching data
    try {
      // Fetch data from the provided URL fetch
      const res = await fetch(url);
      // Handle HTTP errors
      if (!res.ok) {
        throw new Error(`HTTP Response Error: ${res.status} ${res.statusText}`);
      }
      // Parse JSON response
      const result = await res.json();
      // Update data state
      setData(result);
    } catch (error) {
      // console.error(error);
      setError(error);
    } finally {
      setIsLoading(false); // When done, turn off loading state
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, error, isLoading };
}
