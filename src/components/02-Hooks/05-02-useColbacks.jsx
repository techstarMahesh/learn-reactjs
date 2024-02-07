import { useCallback, useState } from 'react'
import { UseCallBackChild } from './05-01-useCalbackChild'

export const UseCalbacks = () => {
  const [num, setNum] = useState(0)
  const random = useCallback(() => {
    setNum(() => Math.floor(Math.random() * 100))
  }, [])
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
      <h1>Example of Use Calbacks</h1>
      <UseCallBackChild
        rand={num}
        randomGenerate={random}
      />
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>count+1</button>
    </>
  )
}
