"use client";
import { useState, useEffect } from "react";

export default function Page() {
  //Add comments to outline the steps to complete the code and determine your approach and mental model

  // 2- Create variable to hold disney Character data
  const [characters, setCharacters] = useState([]);
  // const queryParamFromUser = "page=2&pageSize=10"; // Example query parameters if you want to start from somewhere

  // 3- Create variable to handle error stack
  const [error, setError] = useState(null);

  // 4- function to fetch the data
  async function fetchCharacters() {
    // If you want to use query parameters
    // const reponse = await fetch(
    // `https://api.disneyapi.dev/character?${queryParamFromUser}`
    // );
    try {
      const response = await fetch("https://api.disneyapi.dev/character");
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} \n ${response.message}`
        );
      }

      const data = await response.json();
      // console.log("Data from api\n", data);
      setCharacters(data.data);
    } catch (error) {
      // console.log("Error fetching data: ", err);
      setError(error.message);
    }
  }

  // 5- run function that fetches data
  useEffect(() => {
    // run our fetch code
    fetchCharacters();
    // 6- you can run and check console log to see data if it works
  }),
    []; //why do we need this

  // 1- Handle Major Errors with an error page
  // This is good to do before any other stuff, so if you have an error, you can can see this immediately.
  if (error) {
    return (
      <main className="bg-red-700 text-white h-full flex justify-center items-center text-center p-4">
        <h1>Disney API Fetch Error</h1>
        <p>{error.message}</p>
        {/* You can also add error codes */}
      </main>
    );
  }

  // 0 - Render JSX
  return (
    <main className="p-5">
      <header className="text-4xl mb-8 font-bold">
        <h1>List of Disney Characters</h1>
      </header>
      <div>
        {characters.length > 0 ? (
          <ul>
            {characters.map((character) => (
              <li key={character._id}>{character.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-xl">Loading...</p>
        )}
      </div>
    </main>
  );
}
