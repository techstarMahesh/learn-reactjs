import React from 'react';
import { useCounter } from './counterHook';

export function MyUseCounterComponent() {
  const { count, handleCount } = useCounter(1);
  console.log(useCounter(1));
  return (
    <>
      <h4>
        This is simple counter
      </h4>
      <h6><span>{count}</span></h6>
      <button className='btn' onClick={handleCount}>Increment</button>
    </>
  );
}
