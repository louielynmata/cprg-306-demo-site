// We're going to move the counter logic to the custom hook for REUSABILITY
// this file can also be .js or .jsx
// Because we are not using "use client" here, this file is treated as a server component by default and only logic.
// hooks are destructured, if we want to extend it we can add more functions and states SO IT IS NOT IN EXPORT DEFAULT
import { useState } from "react";
export function useCounter(initialValue = 0, byValue = 1) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + byValue);
  const decrement = () => setCount(count - byValue);
  return { count, increment, decrement };
}
