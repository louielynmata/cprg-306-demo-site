// Imports
"use client"; // because it is now a client side component
import { useState } from "react";
// you may check ressetting state
//https://react.dev/learn/preserving-and-resetting-state

// TO OPTIMIZE THE PAGE:
// further cut-out use state with it's own component

// Function
export default function Page() {
  // Use State
  const [userName, setUserName, reset] = useState("");
  // Array or list in use state is not working yet
  // const [userNames, setUserNames] = useState("[]");

  function handleChange(event) {
    setUserName(event.target.value);
  }

  // Maek it do something; To see more `event.target`
  function handleSubmit(event) {
    // make it not referesh every single time
    event.preventDefault();
    // setUserName(userName);
    // setUserNames.push(userName); // for the list
    console.log(userName);
  }

  // Returned and rendered JSX
  return (
    <main>
      <header>
        <h1>Form Example</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-name">User Name</label>
        <input
          type="text"
          id="user-name"
          name="user-name"
          value={userName}
          onChange={handleChange}
          className="border-2 mx-4 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Submit User Name"
          className="block bg-blue-500 px-4 py-2 rounded-full my-4"
        />
      </form>
      <h3 className="text-4xl">{userName}</h3>
    </main>
  );
}
