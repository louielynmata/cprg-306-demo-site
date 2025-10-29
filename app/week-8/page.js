"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  async function fetchCharacters() {
    try {
      const response = await fetch("https://api.disneyapi.dev/character");
      if (!response.ok) {
        throw new Error(
          `HTTP Error! status ${response.status}\n ${response.message}`
        );
      }
      const data = await response.json();
      setCharacters(data.data);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    fetchCharacters();
  }, [characters]);

  if (error) {
    return (
      <main className="bg-red-500 text-white h-full flex justify-center items-center text-center">
        <h1>Disney API Fetch Error</h1>
        <p>{error.message}</p>
      </main>
    );
  }
  return (
    <main>
      <header className="text-4xl mb-8">
        <h1>List of Disney Characters</h1>
      </header>
      <div>
        {characters.length > 0 ? (
          characters.map((character) => (
            <li key={character._id}>{character.name}</li>
          ))
        ) : (
          <p className="text-5xl text-center">Loading</p>
        )}
        <ul></ul>
      </div>
    </main>
  );
}
