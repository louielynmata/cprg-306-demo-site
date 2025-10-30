"use client"; //so we can scope this component to,
// use cllient stays client side, because this renders interactivity

import { useCounter } from "../hooks/useCounter";

export default function CounterDemoSection() {
  // Use the custom hook
  const { count, increment, decrement } = useCounter();
  return (
    <section>
      <h2>Counter demo</h2>
      <p className="mb-4">Current count: {count}</p>
      <button
        onClick={increment}
        className="bg-blue-500 px-4 py-2 rounded-full mr-4"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="bg-pink-500 px-4 rounded-full mr-4 py-2"
      >
        Decrement
      </button>
    </section>
  );
}
