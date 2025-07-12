import { request } from './Client';
import { User } from '../models/User';

export const loginApi = async (
    email: string,
    password: string
): Promise<User> => {
    const { user, token, issuedAt } = await request('/auth/login', {
        method: 'POST',
        body: { email, password },
    });

    return {
        ...user,
        token,
        issuedAt,
    };
};

export const signupApi = async (
    name: string,
    email: string,
    password: string
): Promise<User> => {
    const { user, token, issuedAt } = await request('/auth/signup', {
        method: 'POST',
        body: { name, email, password },
    });

    return {
        ...user,
        token,
        issuedAt,
    };
};

export type RefreshTokenResponse = {
    token: string;
    issuedAt: number;
};

export const refreshTokenApi = async (): Promise<RefreshTokenResponse> => {
    console.log('used refreshtoken api')
    return request<RefreshTokenResponse>('/auth/refresh', {
        method: 'POST',
        auth: true,
    });
};