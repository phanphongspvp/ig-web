export interface User {
    userId: string;
    username: string;
    name: string;
    avatar: string;
    roles: string;
}

export interface StateUser {
    user: User | null;
    loading: boolean;
    error: string | null;
}