import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const [user, setuser] = useState(null);

    const handleSignUp = (email, password) =>{

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) =>{

        return signInWithEmailAndPassword (auth,email, password);
    }

    const handleLogOut = () =>{

        return signOut(auth)
    }

    const handleGoogleLogin = () =>{

        signInWithPopup(auth, provider);
    }



    const authInfo = {
        handleSignUp,
        handleLogin,
        handleLogOut,
        handleGoogleLogin

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);

            return () =>{
                unsubscribe();
            }

        })

    },[])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;