import React from 'react';
import { useCounter } from './counterHook';

export function MyUseCounterComponent() {
  const { count, handleCount } = useCounter(1);
  console.log(useCounter(1));
  return (
    <>
      <h1>
        This is simple counter
      </h1>
      <h2><span>{count}</span></h2>
      <button onClick={handleCount}>Increment</button>
    </>
  );
}
