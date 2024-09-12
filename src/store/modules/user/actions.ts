import { ActionTree, Commit } from "vuex";
import { StateUser } from "@/types/user";
import axiosInstance from "@/utils/axiosInstance";
import { decodeToken } from "@/utils/decodeToken";

export const actions: ActionTree<StateUser, any> = {
    async getUserById({ commit }: { commit: Commit }, id: string) {
        commit("setLoading", true);
        try {
            const res = await axiosInstance.get("users/" + id);
            commit("setUser", res.data);
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    },
    async getUserByAccessToken({ commit }: { commit: Commit }, accessToken: string) {
        commit("setLoading", true);
        try {
            const user = await decodeToken(accessToken);
            commit("setUser", user);
        } catch (error) {
            commit("setError", error);
        } finally {
            commit("setLoading", false);
        }
    },
    clearUser({ commit }: { commit: Commit }) {
        commit("clearUser");
    }
}