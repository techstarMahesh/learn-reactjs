import React from 'react'
import { Consumer } from './context'

export const D = () => {
  return (
    <Consumer>
      {(data) => (
        <>
          <h1>D</h1>
          <span>Data from Context: {data.count}</span>
          <button onClick={data.handleMinusClick}>-</button>
        </>
      )}
    </Consumer>
  )
}
