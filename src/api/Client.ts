import AsyncStorage from '@react-native-async-storage/async-storage';

export type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: any;
    auth?: boolean;
};

const API_URL = 'http://localhost:3000';

export const request = async <T = any>(
    path: string,
    options: RequestOptions = {}
): Promise<T> => {
    const { method = 'GET', headers = {}, body, auth = false } = options;

    let token: string | null = null;

    if (auth) {
        const stored = await AsyncStorage.getItem('user');
        if (stored) {
            token = JSON.parse(stored)?.token;
        }
    }

    const response = await fetch(`${API_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(auth && token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || 'Request failed');
    }

    return response.json();
};