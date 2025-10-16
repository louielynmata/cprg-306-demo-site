"use client";
import { useState, useRef } from "react";
export default function Page() {
  const [primes, setPrimes] = useState([1, 2, 3, 5, 7]);
  // ref creates a variable that isn't being destroyed and rebuilt the same way as useState
  const nextPrimesRef = useRef([11, 13, 17, 23, 29]);

  function addPrimesToList() {
    if (!nextPrimesRef.current?.length) {
      throw new Error("No more primes available in the next primes array");
    }
    setPrimes([...primes, nextPrimesRef.current.shift()]);
  }

  return (
    <main className="mx-4">
      <header className="my-4">
        <h1 className="text-4xl">State Management with Arrays and Objects</h1>
        <p>
          Simple to complex examples of using state in react and practicing
          immutability with our code patterns.
        </p>
      </header>
      <section>
        <header className="my-4">
          <h2 className="text-3xl">List of Prime Numbers</h2>
        </header>
        <div>
          <ul>
            {primes.map((prime) => (
              <li key={prime} className="my-1 text-lg">
                {prime}
              </li>
            ))}
          </ul>
          <button
            onClick={addPrimesToList}
            className="px-4 py-3 bg-blue-800 cursor-pointer"
          >
            Add prime from collection
          </button>
        </div>
      </section>
    </main>
  );
}
