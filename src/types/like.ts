export interface Like {
    userId: string;
    postId: string;
}

export interface StateLike {
    like: Like,
    loading: boolean,
    error: string | null;
}