// import { createContext, useState, useEffect } from 'react'
// import { register, login, getMe} from './services/auth.api'

// export const AuthContext = createContext()

// export function AuthProvider({ children }) {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(false)

//     /**
//    * login
//    */
//     const handleLogin = async (email, password) => {

//         setLoading(true)

//         try {
//             const response = await login(email, password)
//             setUser(response.user)
//         } catch (err) {
//             console.log(err)
//         }
//         finally {
//             setLoading(false)
//         }
//     }

//     /**
//      * register
//      */
//     const handleRegister = async (email, username, password) => {

//         setLoading(true)

//         try {
//             const response = await login(email, username, password)
//             setUser(response.user)

//         } catch (err) {
//             console.log(err)
//         }
//         finally {
//             setLoading(false)
//         }
//     }

//     return <AuthContext.Provider value={{ user, loading, handleLogin, handleRegister }}>
//         {children}
//     </AuthContext.Provider>
    
// }

import { createContext, useState } from 'react'
import { register, login } from './services/auth.api'

export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (username, password) => {
        setLoading(true)
        try {
            const response = await login(username, password)
            setUser(response.user)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async (email, username, password) => {
        setLoading(true)
        try {
            const response = await register(email, username, password)
            setUser(response.user)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, handleLogin, handleRegister }}>
            {children}
        </AuthContext.Provider>
    )
}
