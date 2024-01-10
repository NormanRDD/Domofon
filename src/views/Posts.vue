<template>
  <div v-if="userPosts.length" class="postsWrapper">
    <h2 class="posts__goBack" @click="$router.push('/')">Назад</h2>
    <div class="posts">
      <div v-for="post in userPosts" :key="post.id" class="posts__card">
        <PostCard :title="post.title" :body="post.body" />
      </div>
    </div>
  </div>
  <Loader v-else />
</template>
<script>
import { mapState, mapActions } from "vuex";
import { actionTypes } from "../store/modules/user";
import PostCard from "../components/posts/PostCard.vue";
import Loader from "../components/UI/Loader.vue";

export default {
  components: {
    PostCard,
    Loader,
  },
  computed: {
    ...mapState("user", ["userPosts"]),
  },
  methods: {
    ...mapActions("user", {
      GET_USER_POSTS: actionTypes.GET_USER_POSTS,
      CLEAR_USER_POSTS: actionTypes.CLEAR_USER_POSTS,
    }),
  },
  mounted() {
    if (!this.userPosts.lengt) this.GET_USER_POSTS(this.$route.params?.id);
  },
  unmounted() {
    this.CLEAR_USER_POSTS();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/media.scss";
.postsWrapper {
  margin: 20px;
  h2 {
    max-width: min-content;
  }
}
.posts {
  column-count: 2;
  @include media("desktop-up") {
    column-count: 3;
  }
  @include media("phone-only") {
    column-count: 1;
  }
  &__card {
    margin-bottom: 20px;
  }
  &__goBack {
    transition: 0.3s;
    cursor: pointer;
    color: wheat;
    font-family: sans-serif;
    text-align: left;
    font-size: 25px;
    margin-bottom: 10px;

    &:hover {
      color: rgb(64, 59, 50);
      transition: 0.3s;
      transform: translate3d(10px);
    }
  }
}
</style>
