"use client";
import { useCounter } from "../hooks/useCounter";
import { AppButton } from "../components/Button";
export default function CounterDemoSection() {
  const { count, increment, decrement } = useCounter(0);
  return (
    <section>
      <header>
        <h2>Counter Custom Hook</h2>
      </header>
      <div>
        <h3>Count Value: {count}</h3>
        <AppButton text="increment" onClick={increment} />
        <AppButton text="decrement" onClick={decrement} variant="secondary" />
      </div>
    </section>
  );
}
