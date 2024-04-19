'use client'
import { createContext ,useState ,useContext, useEffect } from "react";
import {createUserWithEmailAndPassword  ,signInWithEmailAndPassword, onAuthStateChanged ,signOut , sendPasswordResetEmail } from "firebase/auth";
import { Auth } from "@/lib/firebase/config";

export const AuthContext =  createContext();

export function AuthProvider ({children}){

    const [authUser, setAuthUser] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

const signUp =  (email,password)=>{
    createUserWithEmailAndPassword( Auth, email,password)
}

const logIn =  (email,password)=>{
    signInWithEmailAndPassword( Auth, email,password)
    setIsLoggedIn(Auth)
}

const logOut = ()=>{
return signOut(Auth);
}
const resetPassword = (email)=>{
    sendPasswordResetEmail(Auth,email)

}
useEffect(()=>{
    const unSubscribe =onAuthStateChanged(Auth , (currentUser)=>{
        setAuthUser(currentUser);
    });
    return ()=>{ unSubscribe()}

},[]);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        signUp,
        logIn,
        logOut,
        resetPassword
    }
    

        return(
            <AuthContext.Provider value={value}>
             {children}
           </AuthContext.Provider>
        )
    
}
export const useAuth = () => useContext(AuthContext);

