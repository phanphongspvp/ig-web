import { GetterTree } from "vuex";
import { StateUser } from "@/types/user";

export const getters: GetterTree<StateUser, any> = {
    user: state => state.user
};
