import { RouterProvider } from 'react-router'
import { router } from './App.routes'
import { AuthProvider } from './features/auth/auth.connect'
import { PostContextProvider } from './features/post/post.conext'
import './features/shared/globel.scss'


const App = () => {
  return (
    <AuthProvider> 
      <PostContextProvider>
      <RouterProvider router={router}/>
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
