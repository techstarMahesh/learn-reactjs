import { memo } from 'react'

export const UseCallBackChild = memo(({ rand, randomGenerate }) => {
  console.log('clild class of generate random number')
  return (
    <>
      <h1>This is child from useCalbackChild</h1>
      <h2>Random Number {rand}</h2>
      <button onClick={randomGenerate}>Click</button>
    </>
  )
})
