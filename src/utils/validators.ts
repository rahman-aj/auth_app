export const validateEmail = (email: string): string | null => {
    if (!email.trim()) return 'Email is required';

    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/;

    if (!emailRegex.test(email)) return 'Invalid email format';

    return null;
};


export const validatePassword = (password: string): string | null => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return null;
};

export const validateName = (name: string): string | null => {
    if (!name.trim()) return 'Name is required';
    return null;
};