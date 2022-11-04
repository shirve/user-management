import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import { CurrentUserContextProvider } from 'context'
import { AuthenticationRoute } from 'components'
import { Home, Unauthorized } from 'pages'

const App = () => (
  <CurrentUserContextProvider>
    <AuthenticationRoute>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/unauthorized' element={<Unauthorized />} />
          </Routes>
        </main>
      </Router>
    </AuthenticationRoute>
    <ReactQueryDevtools />
    <ToastContainer />
  </CurrentUserContextProvider>
)

export default App
