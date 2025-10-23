"use client";
import { useState, useEffect } from "react";
export default function Page() {
  const [disneyCharacters, setDisneyCharacters] = useState([]);
  const [error, setError] = useState(null);

  // async fetch characters
  async function fetchDisneyCharacters() {
    try {
      const response = await fetch("https://api.disneyapi.dev/character");
      const data = await response.json();
      setDisneyCharacters(data.data);
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  }

  // useEffect to run the fetch async function
  useEffect(() => {
    fetchDisneyCharacters();
  }, []);

  // if there's an error fetching, let the user know
  if (error) {
    return (
      <main>
        <h2>OH NO!</h2>
        <p>{error}</p>
      </main>
    );
  }
  return (
    <main>
      <h2>Data List</h2>
      <ul>
        {/* if the character array has stuff in it... render it */}
        {disneyCharacters.length > 0 ? (
          disneyCharacters.map((character) => (
            <li key={character._id}>{character.name}</li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </main>
  );
}
