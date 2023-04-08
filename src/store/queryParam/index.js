import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

const queryParamSlice = createSlice({
  name: 'queryParam',
  initialState,
  reducers: {
    queryParam: (state, actions) => {
      state.value = actions.payload
    }
  }
})

export const { queryParam } = queryParamSlice.actions

export default queryParamSlice.reducer
