import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    // observe user check
    useEffect(() =>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
         setUser(currentUser)
         setLoading(false)
         })
         return () =>{
             return unsubscribe;
         }
     },[])

    //  create new user
     const newRegister = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email , password)
    }

    // exiting user sing in 
    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Goggle Sing in
    const googleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleAuth)
    }

    // User LogOUt
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // User name and photo
    const updateUserProfile  = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // Value pass
    const authInfo = {
        user,
        loading,
        newRegister,
        singIn,
        logOut,
        updateUserProfile,
        googleSingIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;