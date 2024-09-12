import { StatePost } from "@/types/post";
import axiosInstance from "@/utils/axiosInstance.ts"
import { ActionTree, Commit } from "vuex";

export const actions: ActionTree<StatePost, any> = {
    async getPosts({ commit, getters }: { commit: Commit, getters: any }) {
        commit("setLoading", true);
        try {
            const userId: string = getters.user.userId;
            const res = await axiosInstance.get(`posts/users/${userId}`);
            commit("setPosts", res.data);
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    },
    async getPostById({ commit }: { commit: Commit }, id: string) {
        commit("setLoading", true);
        try {
            const res = await axiosInstance.get("posts/" + id);
            commit("setPost", res.data);
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    },
    async createPost({ commit }: { commit: Commit }, posts) {
        commit("setLoading", true);
        try {
            await axiosInstance.post(`posts/${posts?.userId}`, {
                content: posts.content,
                imageUrls: posts.images
            });
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    },
    async deletePost({ commit, state }: { commit: Commit, state: StatePost }, id) {
        commit("setLoading", true);
        try {
            const res = await axiosInstance.delete(`posts/${id}`);
            const posts = state.posts?.filter(post => post._id != res.data._id);
            commit("SET_POSTS", posts);
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    },
    async likePost({ commit }: { commit: Commit }, data) {
        const { userId, postId } = data;
        commit("setLoading", true);
        try {
            await axiosInstance.post(`/likes/likePost/users/${userId}/posts/${postId}`);
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    },
    async unLikePost({ commit }: { commit: Commit }, data) {
        const { postId, userId } = data;
        commit("setLoading", true);
        try {
            await axiosInstance.post(`likes/unLikePost/users/${userId}/posts/${postId}`);
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    }
}