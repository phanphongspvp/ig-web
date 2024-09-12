import { StateLike } from "@/types/like";

const Like = {
    userId: "",
    postId: ""
}

export const initState = (): StateLike => {
    return {
        like: Like,
        loading: false,
        error: null
    }
}