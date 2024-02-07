import { useState } from 'react'

export const UseStates = (e) => {
  const [num, setNum] = useState(0)
  const handleIncressClick = () => {
    setNum((num) => num + 1)
  }

  const handleDecressClick = (e) => {
    setNum((num) => num - 1)
  }
  return (
    <>
      <h3>Use Hook is example</h3>
      <h3>Number is {num}</h3>
      <button onClick={handleIncressClick}>Incress Number</button>
      <button onClick={handleDecressClick}>Decress Number</button>
    </>
  )
}
