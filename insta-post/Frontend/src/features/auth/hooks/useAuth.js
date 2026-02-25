import { useContext } from "react";
import { AuthContext } from "../auth.connect.jsx";

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}