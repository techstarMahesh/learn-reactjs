export const InlineCSSExmp = () => {
  const buttonColor = {
    color: 'black',
    backgroundColor: 'red',
  }
  return (
    <>
      <h1>This is an example of Inline CSS</h1>
      <p style={{ fontSize: '200px', color: 'blue' }}>This text blue</p>
      <button style={buttonColor}>Click</button>
      <h4 style={{ ...buttonColor, fontSize: '500px' }}>Apply Both Color</h4>
    </>
  )
}
