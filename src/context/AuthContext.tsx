import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi, signupApi, refreshTokenApi } from '../api/AuthApi';
import { User } from '../models/User';

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const restoreSession = async () => {
            const userStr = await AsyncStorage.getItem('user');
            if (userStr) {
                const user: User = JSON.parse(userStr);
                const now = Date.now();

                const MAX_SESSION_AGE = 1000 * 60 * 60 * 24;
                const REFRESH_THRESHOLD = 1000 * 60 * 60 * 12;

                if (now - user.issuedAt < MAX_SESSION_AGE) {
                    if (now - user.issuedAt > REFRESH_THRESHOLD) {
                        try {
                            const { token, issuedAt } = await refreshTokenApi();
                            const updatedUser = { ...user, token, issuedAt };
                            await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
                            setUser(updatedUser);
                            return;
                        } catch {
                            await AsyncStorage.removeItem('user');
                            setUser(null);
                            return;
                        }
                    }

                    setUser(user);
                    return;
                }
            }

            await AsyncStorage.removeItem('user');
            setUser(null);
        };


        restoreSession();
    }, []);

    const login = async (email: string, password: string) => {
        const user = await loginApi(email, password);
        setUser(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
    };

    const signup = async (name: string, email: string, password: string) => {
        const user = await signupApi(name, email, password);
        setUser(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
    };


    const logout = async () => {
        setUser(null);
        await AsyncStorage.multiRemove(['user', 'token', 'token_issued_at']);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};