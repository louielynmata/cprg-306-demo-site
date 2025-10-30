import { useState } from "react";
export function useCounter(initialValue = 0, byValue = 1) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + byValue);
  const decrement = () => setCount(count - byValue);
  return { count, increment, decrement };
}
