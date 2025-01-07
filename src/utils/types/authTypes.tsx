// utils/types.ts
export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string; // Token de autenticación
    user: {
        id: string;
        name: string;
        email: string;
    };
}
