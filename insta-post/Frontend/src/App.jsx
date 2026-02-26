import { RouterProvider } from 'react-router'
import { router } from './App.routes'
import { AuthProvider } from './features/auth/auth.connect'
import './features/shared/globel.scss'


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
