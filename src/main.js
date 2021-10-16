import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GAuth from "vue-google-oauth2";
const gauthOption = {
  clientId:
    "806929846932-qoarom0f40vkvej7462lt5b2b51vk83i.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
  fetch_basic_profile: true,
};
Vue.use(GAuth, gauthOption);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
