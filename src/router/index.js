import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import FoodDetail from "../views/FoodDetail.vue";
import Register from "../views/Register.vue";
import Bookmark from "../views/Bookmark.vue";
import FoodCard from "../components/FoodCard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/food/:id",
    name: "FoodDetail",
    component: FoodDetail,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/bookmark",
    name: "Bookmark",
    component: Bookmark,
    beforeEnter: function (to, from, next) {
      if (localStorage.getItem("access_token")) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/foodcard",
    name: "FoodCard",
    component: FoodCard,
  },
  // {
  //   path: "/bookmark",
  //   name: "Bookmark",
  //   component: () =>
  //     import(/* webpackChunkName: "bookmark" */ "../views/Bookmark.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
