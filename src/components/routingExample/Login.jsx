import React from 'react'
import { useLocation } from 'react-router-dom'

function Login() {
    let location = useLocation()
  return <h1>Welcome to login page! {location.state} </h1>
}

export default Login
