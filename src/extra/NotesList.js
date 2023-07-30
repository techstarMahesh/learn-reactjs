import React, { useState, useEffect } from 'react'
import AddEditNote from './AddEditNotes'

const NotesList = () => {
  const [notes, setNotes] = useState([])
  const [editingNote, setEditingNote] = useState(null)

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'))
    if (storedNotes) {
      setNotes(storedNotes)
    }
  }, [])

  const handleAddNote = () => {
    setEditingNote({})
  }

  const handleEditNote = (note) => {
    setEditingNote(note)
  }

  const handleSaveNote = (note) => {
    if (editingNote) {
      const updatedNotes = notes.map((n) =>
        n.id === editingNote.id ? { ...n, ...note } : n
      )
      localStorage.setItem('notes', JSON.stringify(updatedNotes))
      setNotes(updatedNotes)
      setEditingNote(null)
    } else {
      const newNote = { ...note, id: Date.now() }
      const updatedNotes = [...notes, newNote]
      localStorage.setItem('notes', JSON.stringify(updatedNotes))
      setNotes(updatedNotes)
      setEditingNote(null)
    }
  }

  const handleCancelNote = () => {
    setEditingNote(null)
  }

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
                <button
                  className="btn btn-primary"
                  onClick={() => handleEditNote(note)}
                >
                  Edit
                </button>
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
      <button
        className="btn btn-success"
        onClick={handleAddNote}
      >
        Add Note
      </button>
      {editingNote && (
        <AddEditNote
          onSave={handleSaveNote}
          onCancel={handleCancelNote}
          note={editingNote}
        />
      )}
    </div>
  )
}

export default NotesList
