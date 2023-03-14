import React from 'react'
import { useCounter } from './counterHook';

export function MyUseCounterComponent() {
  const [count, handleCount] = useCounter(1)
  return (
    <>
      <h1>
        This is simple counter <span>{count}</span>
      </h1>
      <button onClick={handleCount}>Incriment</button>
    </>
  );
}