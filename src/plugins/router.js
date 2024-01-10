import { createRouter, createWebHistory } from "vue-router";
import Auth from "./../views/Auth.vue";
import Home from "./../views/Home.vue";
import Posts from "./../views/Posts.vue";
import { authMiddleware } from "../middleware/authGuard";

const routes = [
  {
    path: "/login",
    component: Auth,
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: true },
    beforeEnter: authMiddleware,
  },
  {
    path: "/posts/:id",
    component: Posts,
    name: "Posts",
    meta: { requiresAuth: true },
    beforeEnter: authMiddleware,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
