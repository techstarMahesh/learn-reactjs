import React, { useState, useEffect } from 'react'

export const NotesCRUD = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'))
    if (storedNotes) {
      setNotes(storedNotes)
    }
  }, [])

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    localStorage.setItem('notes', JSON.stringify(newNotes))
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <h1>Notes List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.title}</td>
              <td>{note.content}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
