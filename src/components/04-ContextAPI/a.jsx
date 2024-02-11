import React, { useState } from 'react'
import { Provider } from './context'
import { B } from './b'

export const A = () => {
  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
    setCount(count + 1)
  }

  const handleMinusClick = () => {
    setCount(count - 1)
  }

  const contextValue = {
    count,
    handleMinusClick,
  }

  return (
    <Provider value={contextValue}>
      <h1>A</h1>
      <button onClick={handlePlusClick}>+</button>
      <span>Count {count}</span>
      <button onClick={handleMinusClick}>-</button>
      <B />
    </Provider>
  )
}
