import { GetterTree } from "vuex";
import { StateAuth } from "@/types/auth";

export const getters: GetterTree<StateAuth, any> = {
    isAuthenticated: state => !!state.accessToken,
    accessToken: state => state.accessToken,
};
