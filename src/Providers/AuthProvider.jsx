import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updatePro = (displayName, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoUrl
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth ,currentUser => {
            setUser(currentUser);
            if(currentUser){
                axios.post('https://just-music-server-side.vercel.app/jwt', {email: currentUser.email})
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('token');
                setLoading(false);
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    
    const allData = {
        user,
        loading,
        registerUser,
        login,
        googleLogin,
        logout,
        updatePro
    }
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;