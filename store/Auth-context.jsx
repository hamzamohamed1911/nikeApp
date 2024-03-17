'use client'
import { createContext ,useState ,useContext } from "react";
const AuthContext =  createContext()

export const useAuth =()=>{

return useContext(AuthContext)

}
 
export function AuthProvider ({children}){
    const [authUser, setAuthUser] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(false);
   


    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    

        return(
            <AuthContext.Provider value={value}>
             {children}
           </AuthContext.Provider>
        )

    
}