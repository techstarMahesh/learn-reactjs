const ChildData = (props) => {
  const data = 'I am Child Data'
  const handleData = (e) => {
    e.preventDefault()
    props.onclick(data)
  }
  return (
    <>
      <h1>Child Data</h1>
      <button onClick={handleData}>Send Data to parrent</button>
    </>
  )
}

export default ChildData
