import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //registration for the website
    // eslint-disable-next-line no-unused-vars
    const userRegistrations = (email, password, name, url) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //log in to the website
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut from the website
    const userLogout = () => {
        return signOut(auth)
    }

    //log In with google account
    const provider = new GoogleAuthProvider();
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // add name and image url to the account
    const profileUpdate = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name || 'no name', photoURL: url || 'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'
        })
    }


    // user Authentication  Management 
    useEffect(() => {
        const unRegister = onAuthStateChanged(auth, (subscriber) => {
            setUser(subscriber)
            setLoading(false)
        })
        return () => {
            unRegister()
        }
    }, [auth])



    const userInfo = {
        user, loading,
        userRegistrations,
        userLogin,
        googleLogIn,
        profileUpdate,
        userLogout
    }





    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;