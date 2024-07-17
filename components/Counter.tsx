"use client";
import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div className="flex flex-col items-center">
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Click</button>
    </div>
  );
};
