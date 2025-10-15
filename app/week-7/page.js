const characters = ["Bee", "Planet", "Chipmunk", "Brain"];

const coffeeVarieties = [
  { id: 232, name: "Brazilian Blitz Bonanza", cost: "3.45", quantity: 0 },
  { id: 233, name: "Sumatra Party", cost: "5.30", quantity: 0 },
  { id: 234, name: "Tiny Tim's Toolshed", cost: "2.20", quantity: 0 },
];

function SimpleArrayDemoSection() {
  return (
    <section>
      <h2>Simple Array</h2>
      <p>
        Using index isn't great but better than character due to possible
        duplication
      </p>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <ol>
        {characters.map((character, index) => {
          return (
            <li key={index + 1} className="m-2 text-lg">
              {character}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
export default function Page() {
  return (
    <main>
      <header>
        <h1>Exploring State with Objects</h1>
        <p>review of list rendering as well</p>
      </header>
      <SimpleArrayDemoSection />
      <section className="my-4">
        <h2 className="mb-2 text-2xl font-semibold">Array of Objects</h2>
        <ul>
          {coffeeVarieties.map((coffee) => {
            return (
              <li
                key={coffee.id}
                className="my-6 w-52 bg-blue-800 p-4 rounded-lg"
              >
                <h3 className="font-semibold text-lg">{coffee.name}</h3>
                <div className="flex justify-between gap-4">
                  <p>{coffee.cost}</p>
                  <p className="font-semibold text-lg">{coffee.quantity}</p>
                </div>
                <button className="px-4 py-2 mt-4 rounded-lg bg-pink-800 cursor-pointer">
                  Increase Quantity
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
