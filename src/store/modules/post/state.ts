import { StatePost } from "@/types/post";

export const initState = (): StatePost => {
    return {
        posts: null,
        post: null,
        loading: false,
        error: null
    }
}