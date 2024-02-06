import ChildData from './04-childData'

const ParrentData = () => {
  const childDatas = (data) => {
    console.log(data)
  }
  return (
    <>
      <h1>This is child to parent data transafer</h1>
      <ChildData onclick={childDatas} />
    </>
  )
}

export default ParrentData
