import React, { useContext } from 'react'
import { AppContext } from './ContextAPI'

export const Header = () => {
  const { username } = useContext(AppContext)

  return (
    <header>
      <h1>Welcome, {username}!</h1>
    </header>
  )
}

export const Content = () => {
  const { username, setUsername } = useContext(AppContext)

  const handleLogin = () => {
    setUsername('Jane')
  }

  return (
    <div>
      <p>Hello, {username}!</p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  )
}
