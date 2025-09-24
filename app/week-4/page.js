/* Minimal Viable Product Objective:
- create ability to increase, decrease, and reset the power level of Goku 
- apply conditional logic so a message shows up for when the power level is over 9000
- Final task: Extract necessary components
- Optimization task: Extract presentational components and apply across site
*/

export default function Page() {
  let userName = "Goku";
  let userPowerLevel = 9000;
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
        <button>Increase Power Level</button>
      </div>
    </main>
  );
}
