import { useState } from 'react'

export const Condications = () => {
  const status = false
  const [sts, setStatus] = useState(status)
  const hadleStatus = () => {
    setStatus(() => true)
  }
  return (
    <>
      <h1>This is simple login test</h1>
      {sts === true ? (
        <>
          <h1>Mahesh Sharma</h1>
        </>
      ) : (
        <>
          <h3>Login Page</h3>
          <button onClick={hadleStatus}>Change Status</button>
        </>
      )}
    </>
  )
}
