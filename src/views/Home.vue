<template>
  <div v-if="usersList.length" class="users">
    <div class="users__list">
      <h2 class="users__title">Список пользователей</h2>
      <div v-for="user in usersList" :key="user.id" class="users__item">
        <UserCard :id="user.id" :name="user.name" :email="user.email" />
      </div>
    </div>
  </div>
  <Loader v-else />
</template>
<script>
import { mapState, mapActions } from "vuex";
import { actionTypes } from "../store/modules/usersList";
import UserCard from "../components/homePage/UserCard.vue";
import Loader from "../components/UI/Loader.vue";
export default {
  components: {
    UserCard,
    Loader,
  },
  data() {
    return {
      userData: {
        name: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState("usersList", ["usersList"]),
  },
  methods: {
    ...mapActions("usersList", {
      setUser: actionTypes.SET_USERS_LIST,
    }),
  },
  mounted() {
    this.setUser();
  },
};
</script>
<style lang="scss" scoped>
.users {
  &__title {
    text-align: center;
    font-family: sans-serif;
    font-size: 25px;
    color: wheat;
    margin-bottom: 10px;
  }
  &__list {
    margin: 0 auto;
    max-width: 500px;
    max-height: 40px;
  }
  &__item a {
    text-decoration: none;
  }
}
</style>
