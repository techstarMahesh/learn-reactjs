import { useState } from 'react'

export const SingleForm = () => {
  const [firstName, setFirstName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName)
  }
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  return (
    <>
      <h3>This is simple User Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="FirstName">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstName}
        />

        <input type="submit" />
      </form>
    </>
  )
}
