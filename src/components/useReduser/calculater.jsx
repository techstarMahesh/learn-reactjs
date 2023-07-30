import React, { useReducer } from 'react'
import { useInput } from '../customHook/inputHook/takeInput'
import { calReduse } from './calReduse'

export const Calculater = () => {
  const [firstInput, setFirstInput] = useInput(0)
  const [lastInput, setSecondInput] = useInput(0)
  const [operator, setOperator] = useInput(0)
  const [result, setResult] = useReducer(calReduse, {
    firstInput: 0,
    lastInput: 0,
    operator: '+',
    sum: 0,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setResult({ type: 'firstInput', data: firstInput })
    setResult({ type: 'lastInput', data: lastInput })
    setResult({ type: operator })
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="firstInput"
            id="firstInput"
            onChange={setFirstInput}
            value={firstInput}
          />
          <input
            type="number"
            name="lastInput"
            id="lastInput"
            onChange={setSecondInput}
            value={lastInput}
          />
          <select
            value={operator}
            onChange={setOperator}
          >
            <option>select Operator</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
          </select>

          <input
            type="submit"
            value="="
            // onClick={() => setResult({ type: '-' })}
          />
        </form>
        <div>
          <h1>{result.sum}</h1>
        </div>
      </div>
    </>
  )
}
