import api from "../../api/endpoints";

export const mutationTypes = {
  SET_USERS_LIST_MT: "mutation/SET_USERS_LIST_MT",
};
export const actionTypes = {
  SET_USERS_LIST: "actions/SET_USERS_LIST",
};

export default {
  namespaced: true,
  state: () => ({
    usersList: [],
  }),

  mutations: {
    SET_USERS_LIST_MT(state, users) {
      state.usersList = users;
    },
  },

  actions: {
    async [actionTypes.SET_USERS_LIST]({ commit }) {
      try {
        await api
          .getUsers()
          .then((res) => {
            commit("SET_USERS_LIST_MT", res.data);
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
