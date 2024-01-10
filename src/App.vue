<template>
  <router-view />
</template>
<script>
import { mapState, mapActions } from "vuex";
import { actionTypes } from "./store/modules/user";

export default {
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    ...mapActions("user", {
      setUser: actionTypes.SET_USER,
    }),
  },
};
</script>
<style>
body {
  background-color: rgba(10, 22, 14, 0.783);
}
</style>
