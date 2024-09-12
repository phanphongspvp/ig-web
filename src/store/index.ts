import { createStore } from "vuex";
import { auth } from "./modules/auth";
import { post } from "./modules/post";
import { comment } from "./modules/comment";
import { user } from "./modules/user";
import { like } from "./modules/like";

export const store = createStore({
  modules: {
    auth,
    user,
    post,
    comment,
    like
  }
});
