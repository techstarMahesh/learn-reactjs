import React, { useReducer } from 'react'

const Counter = (state, action) => {
  if (action.type === 'INCRIMENT') {
    state = state + 1
  }
  if (action.type === 'DECRIMENT') {
    state = state - 1
  }
  return state
}

export const COUNTER = () => {
  const [count, setCount] = useReducer(Counter, 0)
  return (
    <>
      <h1>This is simple COUNTER {count}</h1>
      <button onClick={() => setCount({ type: 'INCRIMENT' })}>Incriment</button>
      <button onClick={() => setCount({ type: 'DECRIMENT' })}>Decriment</button>
    </>
  )
}
