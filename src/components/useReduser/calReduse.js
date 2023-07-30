import React from 'react'

export const calReduse = (state, action) => {
  switch (action.type) {
    case 'firstInput':
      return { ...state, firstInput: action.data }
    case 'lastInput':
      return { ...state, lastInput: action.data }
    case 'operator':
      return { ...state, operator: action.data }
    case '+':
      return {
        ...state,
        sum: parseInt(state.firstInput) + parseInt(state.lastInput),
        firstInput: 0,
        lastInput: 0,
      }
    case '-':
      return {
        ...state,
        sum: parseInt(state.firstInput) - parseInt(state.lastInput),
        firstInput: 0,
        lastInput: 0,
      }
    case '*':
      return {
        ...state,
        sum: parseInt(state.firstInput) * parseInt(state.lastInput),
        firstInput: 0,
        lastInput: 0,
      }
    case '/':
      return {
        ...state,
        sum: parseInt(state.firstInput) / parseInt(state.lastInput),
        firstInput: 0,
        lastInput: 0,
      }
    case '%':
      return {
        ...state,
        sum: parseInt(state.firstInput) % parseInt(state.lastInput),
        firstInput: 0,
        lastInput: 0,
      }
    default:
      return  {
        ...state,
        sum: "plese enter currect opertator"
      }
  }
}
