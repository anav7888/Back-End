import React, { useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleFormSubmit(e){
        e.preventDefault()

    //    await axios.post("http://localhost:3000/api/auth/register",{
    //         username,
    //         email,
    //         password
    //     },{
    //         withCredentials:true
    //     })
    //     .then(res => {
    //         console.log(res.data)
    //     })
    
    }


    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleFormSubmit}>
                    <input
                        onInput={(e) => { setUsername(e.target.value) }}
                        type="text"
                        name='Username'
                        placeholder='Enter username' />
                    <input
                        onInput={(e) => { setEmail(e.target.value) }}
                        type="text"
                        name='Email'
                        placeholder='Enter email' />
                    <input
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name='Password'
                        placeholder='Enter password' />
                    <button type='submit'>Registration</button>
                </form>

                <p>Already have an account? <Link className='toggleAuthForm' to='/login'>Login</Link> </p>
            </div>
        </main>
    )
}

export default Register
