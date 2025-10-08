import PageHeader from "../components/PageHeader";
export default function Page() {
  const testArr = [1, 2, 3, 4];
  const identities = [
    {
      name: "Abramham Delacy",
      age: 6,
      species: "Cat",
      variant: "Alley",
    },
    { name: "Giusuppe Casey", age: 8, species: "Cat", variant: "Alley" },
    {
      name: "Thomas O'Mally",
      age: 10,
      species: "Cat",
      variant: "Alley",
    },
  ];

  return (
    <main>
      <PageHeader
        title="List Rendering Demo"
        description="Using map to render list of arrays"
      />
      <div>
        <h2>Example that has a return in the map</h2>
        <ul>
          {testArr.map((num) => {
            return <li>{num}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2>O'Mally the Alley Cat</h2>
        <p>
          If you write your map function using curly brackets after fat arrow.
          you need to use a return
        </p>
        <ul>
          {identities.map((identity, index) => (
            <li key={index} className="text-2xl">
              <h3>
                {index + 1}- {identity.name}
              </h3>
              <p>
                {identity.variant} {identity.species}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
