const Events = () => {
  const handleClick = (e) => {
    console.log('This is test')
  }
  return (
    <>
      <h1>Event Example</h1>
      <button onClick={handleClick}>Click and see on console</button>
    </>
  )
}

export default Events
