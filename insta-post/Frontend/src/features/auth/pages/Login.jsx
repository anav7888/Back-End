import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
import '../style/form.scss'
import { useNavigate } from 'react-router'


const Login = () => {
  
  const {handleLogin,loading,user} = useAuth()
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  
    const handleFormSubmit = async(e)=>{
      e.preventDefault()
      
      
   await  handleLogin(username,password)
    console.log("user logged in")
    navigate('/')

  }

  if(loading){
    return (
      <main>
        <h1>Loading.....</h1>
      </main>
    )
  }

  
 
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form  onSubmit={handleFormSubmit}>
          <input
          onInput={(e) => {setUsername(e.target.value) }}
           type="text" 
           name='Username' 
           placeholder='Enter username' />
          <input
          onInput={(e) => {setPassword(e.target.value) }}
           type="password" 
           name='Password' 
           placeholder='Enter password' />
          <button className='button primary-button' type='submit'>Login</button>
        </form>
        <p>Don't have account <Link className='toggleAuthForm' to="/register">Register</Link></p>
      </div>
    </main>
  )
}

export default Login
