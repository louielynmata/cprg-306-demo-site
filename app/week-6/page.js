const catNames = ["abraham", "delacy", "guisuppe", "casey", "thomas omally"];

function ListItem({ item, bgColor }) {
  return <li className={`${bgColor} text-xl`}>{item}</li>;
}

function NameList() {
  return (
    <ul>
      {catNames.map((name, index) => {
        if (name === "thomas omally") {
          return (
            <ListItem
              item={name}
              key={index}
              bgColor={"bg-green-400 dark:bg-green-800"}
            />
          );
        }
        return <ListItem item={name} key={index} />;
      })}
    </ul>
  );
}

function PersonListItem({ name, age }) {
  return (
    <li>
      {name} - {age}
    </li>
  );
}
export default function Page() {
  const people = [
    { id: 1, name: "Aneesh", age: 25 },
    { id: 2, name: "Baptiste", age: 30 },
    { id: 3, name: "Chun", age: 35 },
  ];
  return (
    <main>
      <header>
        <h1>List of Alley Cat Names</h1>
      </header>
      <section className="m-8">
        <h2 className="text-2xl">Aristocat names</h2>
        <NameList />
      </section>
      <section className="m-8">
        <h2 className="text-2xl">People Names</h2>
        <ul>
          {people.map((person) => (
            <PersonListItem key={person.id} {...person} />
          ))}
        </ul>
      </section>
    </main>
  );
}
