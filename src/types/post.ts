export interface Post {
    _id: string;
    content: string;
    imageUrls: string[];
    audio: string;
    like: string[];
    user: string;
}

export interface StatePost {
    posts: Post[] | null;
    post: Post | null;
    loading: boolean;
    error: string | null;
}