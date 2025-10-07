"use client";
import { useState } from "react";

export default function SimpleForm({ onDataSend }) {
  const [userName, setUserName] = useState("");
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    onDataSend(userName);
    console.log(userName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user-name">User Name</label>
      <input
        type="text"
        id="user-name"
        name="user-name"
        value={userName}
        onChange={handleChange}
        className="outline mx-4"
      />
      <input
        type="submit"
        value="Submit User Name"
        className="block bg-blue-800 px-8 py-4 rounded-full my-4"
      />
    </form>
  );
}
