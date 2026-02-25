import { RouterProvider } from 'react-router'
import AppRoutes from './AppRoutes'
import './style.scss'
import { AuthProvider } from './features/auth/auth.connect.jsx'


const App = () => {
  return (
    <AuthProvider>
    <AppRoutes />
    </AuthProvider>
  )
}

export default App
