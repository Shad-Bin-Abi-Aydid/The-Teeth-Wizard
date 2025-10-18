import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSignUp = (email, password) =>{

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) =>{
        setLoading(true)

        return signInWithEmailAndPassword (auth,email, password);
    }

    const handleLogOut = () =>{

        return signOut(auth)
    }

    const handleGoogleLogin = () =>{
        setLoading(true)

        return signInWithPopup(auth, provider);
    }

    const manageProfile = (name, image) =>{

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }



    const authInfo = {
        user,
        loading,
        handleSignUp,
        handleLogin,
        handleLogOut,
        handleGoogleLogin,
        manageProfile

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setUser(null)
            }

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