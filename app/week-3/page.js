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

// TODO: Move to separate file after prototyping
function CharacterSheet({ name, species, age }) {
  /*
  ## Definition of Done
    Use Case: Create a bound character sheet that shows information about any character in our data set
    Scope: render list of information, use conditionals for information that varies from character to character
    Styling: Add tailwind css for basic visual hierarchy
  */
  return (
    <article className="bg-blue-900 my-4 py-6 px-4 rounded-md max-w-sm">
      <header className="mb-4">
        <h3 className="text-xl font-semibold">Character Sheet: {name}</h3>
      </header>
      <div>
        {/* TODO: Use destructuring to simplify accessing information from the character object */}
        <ul>
          <li>Name: {name}</li>
          <li>Species: {species}</li>
          <li>Age: {age}</li>
          {/* TODO: Add conditional to render interests */}
        </ul>
      </div>
    </article>
  );
}

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
      <section className="my-6 md:my-12 lg:my-18">
        <header>
          <h2 className="text-2xl font-semibold">Character Cards</h2>
          <p>
            Demonstration of using components to scope out logic to respective
            levels of abstraction.
          </p>
        </header>
        <div>
          {/* Add CharacterSheet for each Character */}
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
