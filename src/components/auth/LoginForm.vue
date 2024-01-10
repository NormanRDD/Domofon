<template>
  <div class="login">
    <h2 class="login__title">Авторизация</h2>
    <div class="loginWrapper">
      <form @submit.prevent="submitLogin">
        <input v-model="userData.name" type="text" name="" id="name" />
        <input
          v-model="userData.password"
          type="password"
          name=""
          id="password"
        />
        <button>Войти</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { actionTypes } from "../../store/modules/user";

export default {
  data() {
    return {
      userData: {
        name: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState("user", ["staticUserData", "user", "isAuth"]),
  },
  methods: {
    ...mapActions("user", {
      setUser: actionTypes.SET_USER,
    }),
    async submitLogin() {
      await this.setUser(this.userData);
      if (this.isAuth) {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  margin-top: 120px;
  &__title {
    text-align: center;
    font-family: sans-serif;
    font-size: 25px;
    color: wheat;
    margin-bottom: 10px;
  }
}
.loginWrapper {
  box-shadow: 0 0 9px rgb(0, 0, 0);
  border-radius: 40px;
  border: 3px inset rgb(154 106 2 / 81%);
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 25px;

  button {
    padding: 5px;
    color: black;
    background-color: rgba(245, 222, 179, 0.795);
    font-size: 25px;
    font-weight: 500;
    margin: 20px 0;
  }
  input {
    border: 2px solid rgba(245, 222, 179, 0.498);
    color: wheat;
    padding: 5px;
    font-size: 20px;
    background-color: rgba(10, 22, 14, 0.043);
    font-family: sans-serif;
  }
}
</style>
