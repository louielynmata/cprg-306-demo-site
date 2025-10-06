"use client";
import PageHeader from "@/app/components/PageHeader";
import { useState } from "react";
export default function Page() {
  const [userName, setUserName] = useState("");

  const dataArray = [];

  function handleChange(event) {
    setUserName(event.target.value.toUpperCase());
  }
  function handleSubmit(event) {
    event.preventDefault();
    dataArray.push(userName);
    console.log(userName);
    console.log(dataArray);
  }
  return (
    <main>
      <PageHeader
        title="Week 5"
        description="on Change and events with forms in next"
      />
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-semibold">Small Form Example</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="ml-4">
            <label htmlFor="user-name" className="mr-4">
              Name
            </label>
            <input
              type="text"
              id="user-name"
              name="user-name"
              value={userName}
              onChange={handleChange}
              className="outline"
            />
          </div>
          <input
            type="submit"
            value="Submit Form"
            className="block px-4 py-2 bg-blue-800 text-white my-4"
          />
        </form>
        <div>
          <h3 className="text-5xl font-bold">User Name: {userName}</h3>
        </div>
      </div>
    </main>
  );
}
