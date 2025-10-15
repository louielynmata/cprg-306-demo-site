"use client";
import { useState } from "react";

export default function Page() {
  const coffeeVarieties = [
    { id: 232, name: "Brazilian Blitz Bonanza", cost: "3.45", quantity: 0 },
    { id: 233, name: "Sumatra Party", cost: "5.30", quantity: 0 },
    { id: 234, name: "Tiny Tim's Toolshed", cost: "2.20", quantity: 0 },
  ];
  const [coffees, setCoffees] = useState([...coffeeVarieties]);

  const [coffeeOfTheDay, setCoffeeOfTheDay] = useState(coffeeVarieties[0]);

  function updateCoffeeOfTheDayQuantity() {
    setCoffeeOfTheDay({
      ...coffeeOfTheDay,
      quantity: coffeeOfTheDay.quantity + 1,
    });
  }

  return (
    <main>
      <header>
        <h1>Exploring State with Objects</h1>
        <p>review of list rendering as well</p>
      </header>
      <section>
        <header>
          <h2>Exploring Immutability</h2>
        </header>
        <div className="my-12">
          <h3>Coffee of the Day: {coffeeOfTheDay.name} </h3>
          <p>{coffeeOfTheDay.cost}</p>
          <p>{coffeeOfTheDay.quantity}</p>
          <button
            className="px-4 py-2 mt-4 rounded-lg bg-pink-800 cursor-pointer"
            onClick={updateCoffeeOfTheDayQuantity}
          >
            Increase Quantity
          </button>
        </div>
      </section>
      <section className="my-4">
        <h2 className="mb-2 text-2xl font-semibold">Array of Objects</h2>
        <ul>
          {coffees.map((coffee) => {
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
                {/* TODO: Add stateful button for individual array items */}
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
