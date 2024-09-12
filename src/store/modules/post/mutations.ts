import { Post, StatePost } from "@/types/post";
import { MutationTree } from "vuex";

export const mutations: MutationTree<StatePost> = {
    setPosts(state: StatePost, posts: Post[]) {        
        state.posts = posts;
    },
    setPost(state: StatePost, post) {
        state.post = post;
    },
    setLoading(state: StatePost, loading: boolean) {
        state.loading = loading;
    },
    setError(state: StatePost, error: string) {
        state.error = error;
    }
}