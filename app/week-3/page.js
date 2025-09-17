import CharacterSheet from "../components/CharacterSheet";

const character = {
  name: "Shaggy",
  species: "Human",
  age: 32,
};

const castOfScoobyDoo = [
  {
    name: "Scooby Doo",
    species: "Dog",
    age: 8,
    interests: ["scooby snacks", "hanging out with Shaggy"],
  },
  {
    name: "Velma",
    species: "Human",
    age: 23,
  },
];

export default function Page() {
  // destructuring
  const { name, species, age } = character;
  const {
    name: scientist,
    species: otherSpecies,
    age: humanAge,
  } = castOfScoobyDoo[1];
  return (
    <main>
      <header>
        <h1 className="text-4xl font-bold">Hello Week 3</h1>
      </header>
      <section className="my-6 md:my-12 lg:my-18">
        <header>
          <h2 className="text-2xl font-semibold">
            Simple Destructuring Example
          </h2>
        </header>
        <div>
          {/* TODO: Use destructuring to simplify accessing information from the character object */}
          <ul>
            <li>Name: {name}</li>
            <li>Species: {species}</li>
            <li>Age: {age}</li>
          </ul>
        </div>
      </section>
      <section className="my-6 md:my-12 lg:my-18">
        <header>
          <h2 className="text-2xl font-semibold">
            Character Info Full Details
          </h2>
          <p>Showing information from the array of characters</p>
        </header>
        <ul>
          <li>Name: {character.name}</li>
          <li>Species: {castOfScoobyDoo[0].species}</li>
          <li>Age: {castOfScoobyDoo[0].age}</li>
          <li>
            <h3>Interests:</h3>
            <ul>
              <li>{castOfScoobyDoo[0].interests[0]}</li>
              <li>{castOfScoobyDoo[0].interests[1]}</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Better Example of Scope Management */}
      <section className="my-6 md:my-12 lg:my-18">
        <header>
          <h2 className="text-2xl font-semibold">Character Cards</h2>
          <p>
            Demonstration of using components to scope out logic to respective
            levels of abstraction.
          </p>
        </header>
        <div>
          <CharacterSheet {...character} />
          <CharacterSheet {...castOfScoobyDoo[0]} />
          <CharacterSheet {...castOfScoobyDoo[1]} />
        </div>
      </section>

      <section className="my-6 md:my-12 lg:my-18">
        <h2 className="text-2xl font-semibold">
          Velma Example using an Alias with Destructuring
        </h2>
        <ul>
          <li>Name: {scientist}</li>
          <li>Species: {otherSpecies}</li>
          <li>Age: {humanAge}</li>
        </ul>
      </section>
    </main>
  );
}
