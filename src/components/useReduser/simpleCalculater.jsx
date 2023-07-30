import React, { useReducer } from 'react'

const Counter = (state, action) => {
  switch (action.type) {
    case 'FIRST': {
      return { ...state, first: action.data }
    }
    case 'LAST': {
      return { ...state, last: action.data }
    }

    case 'ADD': {
      return {
        ...state,
        sum: parseInt(state.first) + parseInt(state.last),
        last: 0,
      }
    }
  }
  return state
}

export const COUNTER = () => {
  const [calculator, dispatch] = useReducer(Counter, {
    first: 0,
    last: 0,
    sum: 0,
  })
  return (
    <>
      <label>First Input</label>
      <input
        value={calculator.first}
        onChange={(e) => dispatch({ type: 'FIRST', data: e.target.value })}
      />
      <label>First Input</label>
      <input
        value={calculator.last}
        onChange={(e) => dispatch({ type: 'LAST', data: e.target.value })}
      />
      <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
      <div>
        <h1>{calculator.sum}</h1>
      </div>
    </>
  )
}
