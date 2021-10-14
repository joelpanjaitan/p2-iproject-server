import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import FoodDetail from "../views/FoodDetail.vue";
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
  },
  {
    path: "/:id",
    name: "FoodDetail",
    component: FoodDetail,
  },
  {
    path: "/bookmark",
    name: "Bookmark",
    component: () =>
      import(/* webpackChunkName: "bookmark" */ "../views/Bookmark.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
