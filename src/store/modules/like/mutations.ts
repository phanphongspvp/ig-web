import { Like, StateLike } from "@/types/like";
import { MutationTree } from "vuex";

export const mutations: MutationTree<StateLike> = {
    SET_LOADING(state: StateLike, loading: boolean) {
        state.loading = loading;
    },
    SET_ERROR(state: StateLike, error: string) {
        state.error = error;
    },
    SET_LIKE(state: StateLike, like: Like) {
        state.like = like;
    }
}