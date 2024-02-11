import React from 'react'
import { A } from './a'

export const CountContext = React.createContext()
export const Provider = CountContext.Provider
export const Consumer = CountContext.Consumer

export const ContextAPI = () => {
  return (
    <>
      <h2>This is contextAPI</h2>
      <A />
    </>
  )
}
