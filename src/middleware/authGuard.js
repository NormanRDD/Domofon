import Cookies from "js-cookie";
export function authMiddleware(to, from, next) {
  let cookieValue = Cookies.get("token");
  console.log(cookieValue);
  if (to.meta.requiresAuth && !cookieValue) {
    next("/login");
  } else {
    next();
  }
}
