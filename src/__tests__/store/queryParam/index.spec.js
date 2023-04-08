/* eslint-env jest */
import queryParamReducer, { queryParam } from '../../../store/queryParam'

describe('queryParamSlice', () => {
  const initialState = {
    value: ''
  }

  it('should handle initial state', () => {
    expect(queryParamReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle queryParam', () => {
    const payload = 'test'
    const nextState = queryParamReducer(initialState, queryParam(payload))
    expect(nextState.value).toEqual(payload)
  })

  it('should handle empty payload', () => {
    const payload = ''
    const nextState = queryParamReducer(initialState, queryParam(payload))
    expect(nextState.value).toEqual(payload)
  })

  it('should handle null payload', () => {
    const payload = null
    const nextState = queryParamReducer(initialState, queryParam(payload))
    expect(nextState.value).toEqual(payload)
  })

  it('should handle undefined payload', () => {
    const payload = undefined
    const nextState = queryParamReducer(initialState, queryParam(payload))
    expect(nextState.value).toEqual(undefined)
  })
})
