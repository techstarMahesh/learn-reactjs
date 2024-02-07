import React, { useState } from 'react'

export function useInput() {
  const [value, setValue] = useState('')
  const handleValue = (e) => {
    setValue(e.target.value)
  }
  return [value, handleValue]
}
