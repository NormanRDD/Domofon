<template>
  <!-- <router-link :to="{ name: 'Posts', params: { id: id } }"> -->
  <div @click="goToPosts()" class="card">
    <p class="card__name">{{ name }}</p>
    <p class="card__mail">{{ email }}</p>
  </div>
  <!-- </router-link> -->
</template>
<script>
import { mapActions } from "vuex";
import { actionTypes } from "../../store/modules/user";
export default {
  props: {
    id: {
      type: Number,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions("user", {
      GET_USER_POSTS: actionTypes.GET_USER_POSTS,
    }),
    goToPosts() {
      this.GET_USER_POSTS(this.id);
      this.$router.push({ name: "Posts", params: { id: this.id } });
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  cursor: pointer;
  padding: 30px;
  margin: 10px 0;
  border-radius: 40px;
  border: 3px inset rgb(166 131 56 / 81%);
  font-family: sans-serif;
  font-weight: 600;
  font-size: 20px;
  transition: 0.3s;
  p {
    color: rgba(245, 222, 179, 0.911);
  }
  &:hover {
    transition: 0.3s;
    box-shadow: 0 0 9px rgb(0, 0, 0);
  }
}
</style>
