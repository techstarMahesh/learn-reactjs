import React, { useContext } from 'react'
import { FormContext } from './FormContext'

const NoteList = () => {
  const [formNotes, setFormNotes] = useContext(FormContext)

  return (
    <div>
      {formNotes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
      <h1 className="text-success">I am Mahesh</h1>
    </div>
  )
}

export default NoteList
