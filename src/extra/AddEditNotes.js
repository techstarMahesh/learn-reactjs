import React, { useState } from 'react';

const AddEditNote = ({ onSave, onCancel, note }) => {
  const [title, setTitle] = useState(note ? note.title : '')
  const [content, setContent] = useState(note ? note.content : '')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSave({ title, content })
  }

  return (
    <div className="container">
      <h1>{note ? 'Edit Note' : 'Add Note'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label"
          >
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="content"
            className="form-label"
          >
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={onCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default AddEditNote
