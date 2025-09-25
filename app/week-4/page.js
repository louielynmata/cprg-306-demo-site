"use client";
import { useState } from "react";

/* GOALS:
- extract Button.js and make callback dynamically assigned
- create button layout component
- explore differences between onClick={functionName} and onClick={() => functionName()}
*/

export default function Page() {
  const characterName = "Edmund Fildergasterberger";
  const [characterAge, setCharacterAge] = useState(399);
  function alertWithStaticMessage() {
    alert(`Hello user, Look into why the static function doesn't read msg`);
  }
  function alertWithMessage(msg = "this is a great time to be a developer!") {
    alert(`Hello user, ${msg}`);
  }
  function increaseAge() {
    setCharacterAge(characterAge + 1);
  }
  function decreaseAge() {
    setCharacterAge(characterAge - 1);
  }

  return (
    <main className="mx-4 xl:mx-8  my-4">
      <header className="py-8 bg-blue-200 md:bg-purple-300   px-4 rounded-md">
        <h1 className="text-4xl font-semibold mb-4">Week 4 Demo</h1>
        <p className="text-lg">Events and useState. basic Interactivity</p>
        <div className="flex gap-4">
          <button
            className="bg-black py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-900 cursor-pointer"
            onClick={alertWithStaticMessage}
          >
            Alert Static
          </button>
          <button
            onClick={() => alertWithMessage("Heya! ")}
            className="bg-white py-4 px-12 my-4 rounded-lg  hover:bg-blue-100 cursor-pointer"
          >
            Alert Dynamic
          </button>
        </div>
      </header>
      <section>
        <header>
          <h2 className="text-2xl font-semibold mb-2">
            Demonstrate buttons that use state to update visual data
          </h2>
        </header>
        <div>
          <p className="text-lg">Name: {characterName}</p>
          <p>Age: {characterAge}</p>
          <div className="flex gap-4">
            <button
              onClick={increaseAge}
              className="bg-black py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-900 cursor-pointer"
            >
              Increase Age
            </button>
            <button
              onClick={decreaseAge}
              className="bg-red-700 py-4 px-12 my-4 rounded-lg text-white hover:bg-red-500 cursor-pointer"
            >
              Decrease Age
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
