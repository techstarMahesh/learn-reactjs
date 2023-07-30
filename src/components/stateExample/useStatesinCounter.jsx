import React, { useState } from 'react'


export function MyUseCounterComponent() {
  const [count, setCount] = useState(1)
  function handleCount() {
    setCount(count + 1)
  }
  return (
    <>
      <h1>
        This is simple counter <span>{count}</span>
      </h1>
      <button onClick={handleCount}>Incriment</button>
    </>
  )
}
