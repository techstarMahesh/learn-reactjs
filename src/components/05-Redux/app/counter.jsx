import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmmount,
} from '../features/counter/counterSlice'

export const CounterExmp = () => {
  const count = useSelector((state) => state.Counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <h3>Counter Example</h3>
      <hr />
      <button onClick={() => dispatch(increment())}>+</button>
      <span> Count: {count} </span>
      <button
        className="butt"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <hr />
      <h3>Want to incress by 10</h3>
      <hr />
      <button onClick={() => dispatch(incrementByAmmount(10))}>
        Incress By 10
      </button>
    </>
  )
}
