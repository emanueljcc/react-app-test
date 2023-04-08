import PropTypes from 'prop-types'
import {
  Container,
  Form,
  Navbar
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// actions
import { queryParam } from '../store/queryParam'

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const { value: queryParamVal = '' } = useSelector(state => state.queryParam)

  /**
* Getting the search value
*
* @param e - The parameter `e` is an event object that is passed to the `handleSearch` function when
* it is triggered by an event (such as a form submission).
*/
  const handleSearh = (e) => {
    e.preventDefault()
    const val = e.target.search.value
    dispatch(queryParam(val))
  }

  const handleChange = (e) => {
    const val = e.target.value
    dispatch(queryParam(val))
  }

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid className='navbar-custom'>
          <Navbar.Brand>React test app</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Form className='d-flex' onSubmit={handleSearh}>
              <Form.Control
                name='search'
                type='text'
                placeholder='Search'
                aria-label='Search'
                onChange={handleChange}
                value={queryParamVal}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
