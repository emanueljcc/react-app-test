import { combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from '../services'

// reducers
import queryParamReducer from './queryParam'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  queryParam: queryParamReducer
})

export default rootReducer
