"use client";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
/* GOALS:
- extract Button.js and make callback dynamically assigned
- create button layout component
- explore differences between onClick={functionName} and onClick={() => functionName()}
*/

export default function Page() {
  const characterName = "Edmund Fildergasterberger";
  const [characterAge, setCharacterAge] = useState(399);
  const [counterNumber, setCounterNumber] = useState(0);

  function decreaseCounter() {
    setCounterNumber(counterNumber - 5);
  }

  function resetCounter() {
    // TODO: Create reset function for counter.
    // use example from logrocket: https://blog.logrocket.com/initialize-state-react-hooks/
  }

  // Static Messages in header
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
    <main>
      <header className="py-12 md:py-20 bg-stone-100 dark:bg-stone-800 px-4 rounded-md">
        <h1 className="text-4xl font-semibold mb-4">Week 4 Demo</h1>
        <p className="text-lg">Events and useState. basic Interactivity</p>
      </header>
      <section>
        <header>
          <h2>Simple Buttons with no state</h2>
          <p>Demonstrates using onClick but not using state with the event</p>
        </header>
        <div className="flex gap-4">
          <button
            className="bg-black py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-900 cursor-pointer"
            onClick={alertWithStaticMessage}
          >
            Alert Static
          </button>

          <button
            onClick={() =>
              alertWithMessage(
                "input a user name in state to make it really nice "
              )
            }
            className="bg-pink-200 dark:bg-pink-800 py-4 px-12 my-4 font-semibold rounded-lg  hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer"
          >
            Alert Dynamic
          </button>
          <button
            onClick={() =>
              console.log("Running functions is a big deal in react")
            }
          >
            Inline Function
          </button>
        </div>
      </section>
      <section>
        <SectionHeader
          title="Counter Demo"
          description="In Class Version"
          bgColor="bg-pink-200 dark:bg-pink-800"
          styles=""
        />

        <div className="px-4">
          <h3 className="text-xl">
            <span className="font-semibold">Counter:</span> {counterNumber}
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => setCounterNumber(counterNumber + 5)}
              className="text-lg font-medium bg-blue-800 text-white px-6 py-4 rounded-full cursor-pointer hover:bg-pink-900 hover:shadow-lg transition ease-linear duration-150"
            >
              Increase Counter
            </button>
            <button
              onClick={decreaseCounter}
              className="text-lg font-medium px-6 py-4 rounded-full cursor-pointer outline-solid outline-2 hover:bg-stone-100 dark:hover:bg-stone-800 hover:shadow-lg transition ease-linear duration-150"
            >
              Decrease Counter
            </button>
          </div>
        </div>
      </section>
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
