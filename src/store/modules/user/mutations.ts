import { StateUser, User } from "@/types/user";
import { MutationTree } from "vuex";

export const mutations: MutationTree<StateUser> = {
    setUser(state: StateUser, user: User) {
        state.user = user;
    },
    setLoading(state: StateUser, loading: boolean) {
        state.loading = loading;
    },
    setError(state: StateUser, error: string) {
        state.error = error;
    },
    clearUser(state: StateUser) {
        state.user = null;
    }
}