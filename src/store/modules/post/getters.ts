import { GetterTree } from "vuex";
import { StatePost } from "@/types/post";

export const getters: GetterTree<StatePost, any> = {
    posts: state => state.posts,
    post: state => state.post
};
