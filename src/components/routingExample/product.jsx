import { useParams } from 'react-router-dom'

export const Product = () => {
  let { c, id } = useParams()
  return (
    <>
      <h2>This is Catogary = {c}</h2>
      <h1>This is you ID = {id}</h1>
    </>
  )
}
