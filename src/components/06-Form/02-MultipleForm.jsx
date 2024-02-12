import { useState } from 'react'

export const UserForm = () => {
  const [input, setFormData] = useState({
    firstName: '',
    lastName: '',
  })
  const handleChange = (e) => {
    setFormData({ ...input, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
  }
  return (
    <>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={input.firstName}
          name="firstName"
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="submit"
        />
      </form>
    </>
  )
}
