import { useContext } from "react";
import { AuthContext } from "../auth.connect.jsx";
import { login, register, getMe } from "../services/auth.api"


export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    /**
* login
*/
    const handleLogin = async (username, password) => {

        setLoading(true)

        try {
            const response = await login(username, password)
            setUser(response.user)
        } catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    /**
     * register
     */
    const handleRegister = async (email, username, password) => {

        setLoading(true)

        try {
            const response = await register(email, username, password)
            setUser(response.user)

        } catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    return {
        user,loading,handleLogin,handleRegister
    }


}