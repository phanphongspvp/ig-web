import { MutationTree } from "vuex";
import { StateAuth } from "@/types/auth";

export const mutations: MutationTree<StateAuth> = {
  setAccessToken(state, token: string) {
    state.accessToken = token;
  },
  clearAccessToken(state) {
    state.accessToken = null;
  }
};
