import { useEffect, useState } from 'react'

export const UseEffectExp = () => {
  const [num, setNum] = useState(5)
  const handleClick = () => {
    setNum((num) => num + 1)
  }

  const [num2, setNum2] = useState(5)
  const handleClick2 = () => {
    setNum2((num2) => num2 + 2)
  }
  useEffect(() => {
    console.log('Button Clicked')
    return () => {
      console.log('Button clicked on return')
      setNum((num) => 0)
      setNum2((num2) => 1)
    }
  }, [])
  useEffect(() => {
    console.log('Button Clicked')
    return () => {
      console.log('Button clicked on return')
      setNum((num) => 0)
      setNum2((num2) => 1)
    }
  }, [num])
  return (
    <>
      <h3>User Effect Example</h3>
      <h2>{num}</h2>
      <h2>{num2}</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click 2</button>
    </>
  )
}
