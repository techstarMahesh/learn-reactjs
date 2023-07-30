import React, { useState, useContext } from 'react'
import { NoteContext, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './NoteContext'
import Note from './Note'

function Notes() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const {
    notes,
    currentUser,
    showEditModal,
    showDeleteModal,
    selectedNote,
    addNote,
    updateNote,
    deleteNote,
    showEditModal: showEditModalAction,
    hideEditModal,
    showDeleteModal: showDeleteModalAction,
    hideDeleteModal,
    setSelectedNote,
  } = useContext(NoteContext)

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      // Create a new note object
      const newNote = {
        id: Date.now(),
        title,
        content,
        author: currentUser,
      }

      // Add the new note to the notes array
      addNote(newNote)

      // Clear the form inputs
      setTitle('')
      setContent('')
    }
  }

  const handleEditNote = () => {
    // Update the selected note object with the new title and content
    const updatedNote = {
      ...selectedNote,
      title,
      content,
    }

    // Update the note in the notes array
    updateNote(updatedNote)

    // Close the edit modal
    hideEditModal()

    // Clear the form inputs
    setTitle('')
    setContent('')
  }

  const handleDeleteNote = () => {
    // Delete the selected note from the notes array
    deleteNote(selectedNote.id)

    // Close the delete modal
    hideDeleteModal()
  }

  return (
    <div className="Notes">
      <h2>Notes</h2>
      <p>Welcome, {currentUser}!</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {!isEdit ? (
          <button onClick={handleAddNote}>Add Note</button>
        ) : (
          <button onClick={handleEditNote}>Save Changes</button>
        )}
      </form>

      <div className="note-list">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onEdit={() => {
              setSelectedNote(note)
              setTitle(note.title)
              setContent(note.content)
              setIsEdit(true)
              showEditModalAction()
            }}
            onDelete={() => {
              setSelectedNote(note)
              showDeleteModalAction()
            }}
          />
        ))}
      </div>

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Note</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="edit-title">Title:</label>
              <input
                type="text"
                id="edit-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label htmlFor="edit-content">Content:</label>
              <textarea
                id="edit-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>

              <div className="modal-buttons">
                <button onClick={handleEditNote}>Save Changes</button>
                <button onClick={hideEditModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Delete Note</h3>
            <p>Are you sure you want to delete this note?</p>
            <div className="modal-buttons">
              <button onClick={handleDeleteNote}>Delete</button>
              <button onClick={hideDeleteModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notes
