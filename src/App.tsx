import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import { CurrentUserContextProvider } from 'context'
import { AuthenticationRoute, Navbar } from 'components'
import { Login, Profile, Register, Unauthorized, User, Users } from 'pages'

const App = () => (
  <CurrentUserContextProvider>
    <main className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<AuthenticationRoute />}>
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<User />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/unauthorized' element={<Unauthorized />} />
            <Route path='/' element={<Navigate to='/login' />} />
          </Route>
        </Routes>
      </Router>
    </main>
    <ReactQueryDevtools />
    <ToastContainer />
  </CurrentUserContextProvider>
)

export default App
