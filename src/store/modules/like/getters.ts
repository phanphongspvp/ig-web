import { StateLike } from "@/types/like";
import { GetterTree } from "vuex";

export const getters: GetterTree<StateLike, any> = {
    like: state => state.like
};
