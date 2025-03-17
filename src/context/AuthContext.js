'use client';

import { getUser } from '@/services/userService';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth()
    }, [])

    const login = (userData) => {
        localStorage.setItem('token', userData.id);
        setUser(userData);
        setIsAuthenticated(true)
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false)
    }

    const checkAuth = async () => {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
            const userData = await getUser(token);
            if (userData) {
                setUser(userData);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false);
        }
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

