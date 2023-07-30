import React, { createContext, useState } from 'react'
import { Header } from './Functions'
import { Content } from './Functions'

export const AppContext = createContext()

export const App = () => {
  const [username, setUsername] = useState('Guest')

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Header />
      <Content />
    </AppContext.Provider>
  )
}

export default App
