import { configureStore } from '@reduxjs/toolkit'

// reducers
import rootReducer from './combineReducers'

// api
import { rtkQueryErrorLogger } from '../services/middleware'
import { apiSlice } from '../services'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_ENVIRONMENT !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {}
    }).concat(apiSlice.middleware, rtkQueryErrorLogger)
})
