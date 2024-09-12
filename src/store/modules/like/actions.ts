import { ActionTree, Commit } from "vuex";
import axiosInstance from "@/utils/axiosInstance";
import { StateLike } from "@/types/like";

export const actions: ActionTree<StateLike, any> = {
    async getLikeByUserAndPost({ commit }: { commit: Commit }, data) {
        commit("SET_LOADING", true);
        try {
            const { userId, postId } = data;            
            const res = await axiosInstance.get(`likes/users/${userId}/posts/${postId}`);            
            commit("SET_LIKE", res.data);
        } catch (error) {
            commit("SET_ERROR", error);
        } finally {
            commit("SET_LOADING", false);
        }
    }
}