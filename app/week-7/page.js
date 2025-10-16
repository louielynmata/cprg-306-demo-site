"use client";
// first import built in stuff
import { useState, useRef } from "react";
// import 3rd part libraries
import { Icon } from "@iconify/react";
// then import your stuff
import { userList } from "./data";

// TODO: isPrime(num) function to test if a number is actually prime or not
// Source: https://www.geeksforgeeks.org/dsa/check-for-prime-number/
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  // check from 5 to square root of num and iterate by i+6
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || (num % i) + 2 === 0) {
      return false;
    }
  }
  return true;
}

export default function Page() {
  const [primes, setPrimes] = useState([1, 2, 3, 5, 7]);
  const [primeCandidate, setPrimeCandidate] = useState("");
  // user list example
  const [users, setUsers] = useState([...userList]);
  // ref creates a variable that isn't being destroyed and rebuilt the same way as useState
  const nextPrimesRef = useRef([11, 13, 17, 23, 29]);

  // TODO: Add error handling so this can be used alongside of the input field function and not cause id errors
  function addPrimesToListFromCollection() {
    if (!nextPrimesRef.current?.length) {
      throw new Error("No more primes available in the next primes array");
    }
    setPrimes([...primes, nextPrimesRef.current.shift()]);
  }

  function addToPrimeList(event) {
    event.preventDefault();
    // TODO: Stop user from inputing non numerical information
    if (isNaN(primeCandidate))
      throw new Error("Prime candidate is not a number");

    if (primes.includes(primeCandidate)) return;

    if (isPrime(primeCandidate)) setPrimes([...primes, primeCandidate]);
  }

  function handlePrimeCandidateChange(event) {
    setPrimeCandidate(event.target.value);
  }

  function toggleUserIsActive(user) {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === user.id ? { ...u, isActive: !u.isActive } : u
      )
    );
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
        <form onClick={addToPrimeList} className="p-4 my-2 bg-slate-800 w-fit">
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
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{user.name}</h3>
                  <div
                    className={`p-2 rounded-md ${
                      user.isActive ? "bg-blue-500" : "bg-red-500"
                    }`}
                  >
                    {user.isActive ? (
                      <Icon icon="ooui:user-active" />
                    ) : (
                      <Icon icon="emojione-monotone:no-entry" />
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <ul>
                    <li className="text-lg">Role: {user.role}</li>
                    <li className="text-lg">
                      Department: {user.metadata.department}
                    </li>
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
