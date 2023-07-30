import React, { useEffect } from 'react'
import { useInput } from '../customHook/inputHook/takeInput'

export const Pokemon = () => {
  const [name, setName] = useInput()
  const inputHandler = (e) => {
    e.preventDefault()
    console.log('enterd', name)
  }
  return (
    <>
      <div>
        <form>
          <label>Pokemon Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={setName}
          />
          <button
            onClick={inputHandler}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
