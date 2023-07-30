import React, { createContext, useReducer } from 'react'

const initialState = {
  notes: [],
  currentUser: null,
  showEditModal: false,
  showDeleteModal: false,
  selectedNote: null,
}

export const NoteContext = createContext(initialState)

export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SHOW_EDIT_MODAL = 'SHOW_EDIT_MODAL'
export const HIDE_EDIT_MODAL = 'HIDE_EDIT_MODAL'
export const SHOW_DELETE_MODAL = 'SHOW_DELETE_MODAL'
export const HIDE_DELETE_MODAL = 'HIDE_DELETE_MODAL'
export const SET_SELECTED_NOTE = 'SET_SELECTED_NOTE'

function reducer(state, action) {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] }
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      }
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      }
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case SHOW_EDIT_MODAL:
      return { ...state, showEditModal: true }
    case HIDE_EDIT_MODAL:
      return { ...state, showEditModal: false }
    case SHOW_DELETE_MODAL:
      return { ...state, showDeleteModal: true }
    case HIDE_DELETE_MODAL:
      return { ...state, showDeleteModal: false }
    case SET_SELECTED_NOTE:
      return { ...state, selectedNote: action.payload }
    default:
      return state
  }
}

export const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addNote = (note) => {
    dispatch({ type: ADD_NOTE, payload: note })
  }

  const updateNote = (note) => {
    dispatch({ type: UPDATE_NOTE, payload: note })
  }

  const deleteNote = (id) => {
    dispatch({ type: DELETE_NOTE, payload: id })
  }

  const setCurrentUser = (user) => {
    dispatch({ type: SET_CURRENT_USER, payload: user })
  }

  const showEditModal = () => {
    dispatch({ type: SHOW_EDIT_MODAL })
  }

  const hideEditModal = () => {
    dispatch({ type: HIDE_EDIT_MODAL })
  }

  const showDeleteModal = () => {
    dispatch({ type: SHOW_DELETE_MODAL })
  }

  const hideDeleteModal = () => {
    dispatch({ type: HIDE_DELETE_MODAL })
  }

  const setSelectedNote = (note) => {
    dispatch({ type: SET_SELECTED_NOTE, payload: note })
  }

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        currentUser: state.currentUser,
        showEditModal: state.showEditModal,
        showDeleteModal: state.showDeleteModal,
        selectedNote: state.selectedNote,
        addNote,
        updateNote,
        deleteNote,
        setCurrentUser,
        showEditModal,
        hideEditModal,
        showDeleteModal,
        hideDeleteModal,
        setSelectedNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  )
}

