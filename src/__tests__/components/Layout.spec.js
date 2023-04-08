import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
/* eslint-env jest */
import Layout from '../../components/Layout'
import { queryParam } from '../../store/queryParam'

const mockStore = configureStore([])

describe('Layout component', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      queryParam: {
        value: ''
      }
    })

    component = render(
      <Provider store={store}>
        <Layout>
          <div>Test child component</div>
        </Layout>
      </Provider>
    )
  })

  it('should render the navbar and child component', () => {
    const navbar = component.getByRole('navigation')
    const childComponent = component.getByText('Test child component')
    expect(navbar).toBeInTheDocument()
    expect(childComponent).toBeInTheDocument()
  })

  it('should update the queryParam value when search input is changed', () => {
    const searchInput = component.getByPlaceholderText('Search')
    fireEvent.change(searchInput, { target: { value: 'test' } })
    const actions = store.getActions()
    expect(actions).toEqual([queryParam('test')])
  })
})
