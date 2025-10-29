import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url) => {
    setIsLoading(true);
    // failsafe, make sure it resets
    setError(null);
    try {
      // fetch data n stuff
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Response Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError("Data Fetching Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
    // after doing this: read about the "dependency array in useEffect"
  }, [url]);
  return { data, error, isLoading };
}
