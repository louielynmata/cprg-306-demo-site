"use client";
import { useCounter } from "../hooks/useCounter";
export default function CounterDemoSection() {
  const { count, increment, decrement } = useCounter(0, 5);
  return (
    <section>
      <h2>Counter demo</h2>
      <p>CurrentCount: {count}</p>
      <button
        onClick={increment}
        className="rounded-full mx-2 p-4 cursor-pointer bg-blue-500 hover:bg-blue-700 dark:bg-orange-500 hover:dark:bg-orange-700"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="rounded-full mx-2 p-4 cursor-pointer bg-gray-500 hover:bg-gray-700 dark:bg-gray-600 hover:dark:bg-gray-80"
      >
        Decrement
      </button>
    </section>
  );
}
