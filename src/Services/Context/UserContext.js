import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '../Firebase/firebase';

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, res => {
            res ? setUser(res) : setUser(null);
        });
        setError('');
        setLoading(false);
        return unsubscribe;
    }, []);

    const registerUser = (email, name, password) => {
        setLoading(true);
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                return updateProfile(auth.currentUser, { displayName: name });
            })
            .then(res => {
                console.log(res);
                setSuccess('Registrado exitosamente');
                setError('');
            })
            .catch(err => setError(err.code))
            .finally(() => setLoading(false));
    };

    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                navigate('/home');
                setError('');
                setSuccess('');
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    };

    const logOutUser = () => {
        signOut(auth);
        navigate('/');
    };
    const forgetPassword = email => {
        return sendPasswordResetEmail(auth, email);
    };

    const contextValue = {
        user,
        loading,
        error,
        setError,
        registerUser,
        signInUser,
        logOutUser,
        forgetPassword,
        success,
        setSuccess,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserContext;
