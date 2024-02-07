const JsxExample = (props) => {
  let isLoggedIn = false
  return (
    <>
      <h1>JSX Example</h1>
      <h2>{props.name}</h2>
      <h3>{10 + 30}</h3>
      <div>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}</div>
    </>
  )
}

export default JsxExample
