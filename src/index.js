import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './store'

// component
import App from './App'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// global styles
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
