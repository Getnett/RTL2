import { useState, useCallback } from "react";

export default function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return {
    count,
    increment: handleIncrement,
    decrement: handleDecrement,
  };
}
