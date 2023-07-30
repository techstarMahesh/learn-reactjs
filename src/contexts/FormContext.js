import React, { createContext, useState } from 'react'

export const FormContext = createContext()

export const FormProvider = (props) => {
  const [formNotes, setFormNotes] = useState([])

  return (
    <FormContext.Provider value={[formNotes, setFormNotes]}>
      {props.children}
    </FormContext.Provider>
  )
}
