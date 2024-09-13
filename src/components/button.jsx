import React from "react";
import { useCounter } from "../utils/counter";

const Button = () => {
  const [count, setCount, resetCount] = useCounter();

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Button;
