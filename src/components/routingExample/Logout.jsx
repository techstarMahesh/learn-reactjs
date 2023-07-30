import React from 'react'
import { Outlet } from 'react-router-dom'

const Logout = () => {
  return (
    <>
      <h1>This is simple logout page</h1>
      <Outlet />
    </>
  )
}

export default Logout
