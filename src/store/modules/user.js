import api from "../../api/endpoints";
import Cookies from "js-cookie";
export const mutationTypes = {
  SET_USER_MT: "mutation/SET_USER_MT",
  SET_USER_POSTS_MT: "mutation/SET_USER_POSTS_MT",
  CLEAR_USER_POSTS_MT: "mutation/CLEAR_USER_POSTS_MT",
};
export const actionTypes = {
  SET_USER: "action/SET_USER",
  GET_USER_POSTS: "action/GET_USER_POSTS",
  CLEAR_USER_POSTS: "action/CLEAR_USER_POSTS",
};

export default {
  namespaced: true,
  state: () => ({
    staticUserData: {
      name: "user",
      password: "password",
    },
    user: {
      name: "",
      password: "",
    },
    isAuth: false,
    userPosts: [],
  }),

  mutations: {
    [mutationTypes.SET_USER_MT](state, user) {
      state.user = user;
      if (
        state.staticUserData.name === state.user.name &&
        state.staticUserData.password === state.user.password
      ) {
        state.isAuth = true;
        Cookies.set("token", "mockToken", { expires: 7 });
      } else {
        alert("Неправильный логин или пароль");
      }
    },
    [mutationTypes.SET_USER_POSTS_MT](state, user) {
      state.userPosts = user;
    },
    [mutationTypes.CLEAR_USER_POSTS_MT](state) {
      state.userPosts = "";
    },
  },

  actions: {
    [actionTypes.SET_USER]({ commit }, user) {
      commit(mutationTypes.SET_USER_MT, user);
    },
    [actionTypes.CLEAR_USER_POSTS]({ commit }) {
      commit(mutationTypes.CLEAR_USER_POSTS_MT);
    },
    async [actionTypes.GET_USER_POSTS]({ commit }, id) {
      try {
        await api
          .getPosts(id)
          .then((res) => {
            commit(mutationTypes.SET_USER_POSTS_MT, res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
