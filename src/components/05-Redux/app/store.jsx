import { configureStore } from '@reduxjs/toolkit'
import counterReducers from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    Counter: counterReducers,
  },
})
