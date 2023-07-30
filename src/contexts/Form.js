import React, { useContext, useState } from 'react'
import { FormContext } from './FormContext'

const Form = () => {
  const [note, setNote] = useState('')
  const [formNotes, setFormNotes] = useContext(FormContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormNotes([...formNotes, note])
    setNote('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  )
}

export default Form
