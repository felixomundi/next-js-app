import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,  
    },
  })
}





