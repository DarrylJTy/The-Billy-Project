import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import SessionService from '../services/SessionService';

const ProtectedRoute = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const loggedIn = await SessionService.isLoggedIn();
                setIsLoggedIn(loggedIn);
            } catch (err) {
                console.error('Error checking login status:', err);
            } finally {
                setLoading(false);
            }
        };

        checkLogin();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // or a spinner component
    }

    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
