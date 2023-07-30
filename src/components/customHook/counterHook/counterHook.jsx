import React, { useState } from 'react'

export function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue)

  function handleCount() {
    setCount(count + 1)
  }

  return { count, handleCount }
}
