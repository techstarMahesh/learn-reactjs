import React from 'react'

function Note({ note, onEdit, onDelete }) {
  return (
    <div className="Note">
      <div className="note-header">
        <h3>{note.title}</h3>
        <div className="note-buttons">
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
      <p>{note.content}</p>
      <p className="note-author">By: {note.author}</p>
    </div>
  )
}

export default Note
