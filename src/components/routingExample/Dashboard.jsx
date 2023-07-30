import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const NAVIGATE = useNavigate()
  let roll = 'user'
  function nn() {
    if (roll == 'user') {
      NAVIGATE('/logout')
    }
  }
  return (
    <>
      <h1>Welcome dashboard page!</h1>
      <button
        className="btn btn-danger"
        onClick={() => {
          NAVIGATE('/logout')
        }}
      >
        Logout
      </button>
    </>
  )
}

export default Dashboard
