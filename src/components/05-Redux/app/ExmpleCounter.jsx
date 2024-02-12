import { useSelector } from 'react-redux'

export const CounterExample = () => {
  const count = useSelector((state) => state.Counter.count)

  return (
    <>
      <h5>{count}</h5>
    </>
  )
}
