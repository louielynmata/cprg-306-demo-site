"use client";
/* Minimal Viable Product Objective:
- create ability to increase, decrease, and reset the power level of Goku 
- apply conditional logic so a message shows up for when the power level is over 9000
- Final task: Extract necessary components
- Optimization task: Extract presentational components and apply across site
*/

export default function Page() {
  const userName = "Goku";
  // TODO: Implement state so we can make this properly reactive
  let userPowerLevel = 9000;

  // TODO: fix this function to manage the dom update
  function increasePowerLevel() {
    alert(`${(userPowerLevel += 1)}`);
  }
  return (
    <main className="mx-4">
      {/* TODO: Make a PageHeader.js component */}
      <header className="my-4">
        <h1 className="text-4xl font-bold">Counter Button Example</h1>
      </header>
      <div>
        <h2 className="text-2xl font-semibold mb-2">User: {userName}</h2>
        <p className="text-lg">
          Power Level: <strong>{userPowerLevel}</strong>
        </p>
        <button
          onClick={increasePowerLevel}
          className="bg-blue-500 text-white font-bold p-2 rounded-md hover:bg-blue-700"
        >
          Increase Power Level
        </button>
      </div>
    </main>
  );
}
