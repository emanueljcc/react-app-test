import { Layout, Table } from './components'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className='App'>
    <Layout>
      <div className='p-3'>
        <Table />
      </div>
			<ToastContainer
				position="bottom-center"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
    </Layout>
  </div>
)

export default App
