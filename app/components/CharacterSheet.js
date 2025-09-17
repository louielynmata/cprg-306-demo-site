/*
  ## Definition of Done
    Use Case: Create a bound character sheet that shows information about any character in our data set
    Scope: render list of information, use conditionals for information that varies from character to character
    Styling: Add tailwind css for basic visual hierarchy
  */
export default function CharacterSheet({ name, species, age }) {
  return (
    <article className="bg-blue-900 my-4 py-6 px-4 rounded-md max-w-sm">
      <header className="mb-4">
        <h3 className="text-xl font-semibold">Character Sheet: {name}</h3>
      </header>
      <div>
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
