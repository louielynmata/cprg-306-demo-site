"use client";

import { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { userList } from "./data";

// utility function to validate prime number

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  const checkDivisor = (divisor) => {
    if (divisor * divisor > num) return true;
    if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
    return checkDivisor(divisor + 6);
  };
  return checkDivisor(5);
};

export default function Page() {
  const [primes, setPrimes] = useState([1, 2, 3, 5, 7]);
  const [primeCandidate, setPrimeCandidate] = useState("");
  const [users, setUsers] = useState([...userList]);

  const nextPrimes = useRef([11, 13, 17, 19, 23, 29]);

  const addPrimesToListFromCollection = () => {
    if (!nextPrimes.current?.length)
      throw new Error("No more primes available in the next primes array");
    // check if not in array, if so then add. This logic does the same thing as the .some example below
    if (primes.includes(nextPrimes.current)) return;
    setPrimes([...primes, nextPrimes.current.shift()]);
  };
  // logic to handle change of input
  const handlePrimeCandidateChange = (event) => {
    setPrimeCandidate(event.target.value);
  };
  // logic to add new number
  const addToPrimeList = (event) => {
    event.preventDefault();
    // throw is not a number error --> make a user friendly error message later
    if (isNaN(primeCandidate))
      throw new Error("Prime Candidate is not a number");
    // don't add duplicate numbers that are already in the prime list
    if (primes.some((prime) => prime === primeCandidate))
      throw new Error("Prime Candidate is already in the array");
    // add prime candidate to prime list
    // TODO: Add client side error handling
    if (isPrime(primeCandidate)) setPrimes([...primes, primeCandidate]);
  };

  const toggleUserIsActive = (user) => {
    setUsers((prevUsers) =>
      // todo: try using filter
      prevUsers.map((u) =>
        u.id === user.id ? { ...u, isActive: !u.isActive } : u
      )
    );
  };

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
            onClick={addPrimesToListFromCollection}
            className="px-4 py-3 bg-blue-800 cursor-pointer"
          >
            Add prime from collection
          </button>
        </div>
      </section>

      <section className="my-4">
        <header>
          <h2 className="text-3xl">Add prime to list from form</h2>
        </header>
        {/* TODO: Look into why onClick made entire form act like a button */}
        <form className="p-4 my-2 bg-slate-800 w-fit">
          <div className="my-2">
            <label htmlFor="prime-input" className="text-lg font-semibold">
              Input Prime Candidate Number:{" "}
            </label>
            <input
              type="text"
              id="prime-input"
              name="prime-input"
              value={primeCandidate}
              onChange={handlePrimeCandidateChange}
              className="border-1 mx-4 p-1"
            />
          </div>
          <input
            type="submit"
            value="Add Prime Number to List"
            onClick={addToPrimeList}
            className="px-4 py-3 bg-pink-800 cursor-pointer"
          />
        </form>
      </section>
      <section>
        <header>
          <h2>User List</h2>
        </header>
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="my-4 max-w-md">
                <div>
                  <h3 className="text-xl font-bold">{user.name}</h3>
                  <div
                    className={`${
                      user.isActive ? "bg-blue-500" : "bg-red-500"
                    } w-fit p-4`}
                  >
                    {user.isActive ? (
                      <Icon icon="ooui:user-active" width="48" />
                    ) : (
                      <Icon icon="emojione-monotone:no-entry" width="48" />
                    )}
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Role: {user.role}</li>
                    <li>Department: {user.metadata.department}</li>
                  </ul>
                </div>
                <button
                  onClick={() => toggleUserIsActive(user)}
                  className="cursor-pointer rounded-full bg-pink-800 px-8 py-4 transition duration-150 ease-linear hover:bg-pink-900 hover:shadow-lg dark:bg-pink-500 hover:dark:bg-pink-700 active:bg-blue-900 "
                >
                  Toggle Active Status
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
