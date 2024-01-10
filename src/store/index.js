import { createStore } from "vuex";
import userModule from "./modules/user";
import usersListModule from "./modules/usersList";

const store = createStore({
  state: () => ({}),

  modules: {
    user: userModule,
    usersList: usersListModule,
  },
});

export default store;
