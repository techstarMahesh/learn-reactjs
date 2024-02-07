import { useMemo, useState } from 'react'

export const UseMemos = () => {
  const [num, setNum] = useState(0)
  const handleClick = () => {
    setNum((num) => num + 1)
  }

  const [randNum, setRandNum] = useState(0)

  const handleRandomClick = () => {
    setRandNum(() => Math.floor(Math.random() * 100))
  }

  const isEven = useMemo(() => {
    console.log('isEven Called')
    if (num % 2 === 0) {
      return 'Yes'
    } else {
      return 'No'
    }
  }, [num])
  return (
    <>
      <h3>
        is {num} Even {isEven}
      </h3>
      <button onClick={handleClick}>Incress Number</button>
      <hr />
      <h3>Random Number {randNum}</h3>
      <button onClick={handleRandomClick}>Random Number</button>
    </>
  )
}
