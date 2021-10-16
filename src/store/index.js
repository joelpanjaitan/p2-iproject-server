import Vue from "vue";
import Vuex from "vuex";
import axios from "@/apis/server.js";
import Swal from "sweetalert2";
import newaxios from "axios";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    foodList: [],
    food: null,
    qrCode: null,
    newFoodList: [],
  },
  mutations: {
    SET_FOODS: function (state, payload = []) {
      state.foodList = payload;
    },
    SET_FOOD_DETAIL: function (state, payload = null) {
      state.food = payload;
    },
    SET_QR_CODE: function (state, payload) {
      state.qrCode = payload;
    },
    SET_NEW_PAGE: function (state, payload) {
      state.newFoodList = payload;
    },
  },
  actions: {
    login: function (context, { email, password }) {
      axios({
        method: "POST",
        url: "/public/login",
        data: {
          email,
          password,
        },
      })
        .then(({ data }) => {
          console.log(data);
          localStorage.setItem("access_token", data.access_token);
          router.push("/");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
    fetchFoods: function ({ commit }) {
      axios({
        method: "GET",
        url: "/public",
      })
        .then(({ data }) => {
          // console.log(data.foods);
          // this.foodList = data.foods;
          commit("SET_FOODS", data.foods);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire(err);
        });
    },
    foodDetail: function ({ commit }, id) {
      axios({
        method: "GET",
        url: `/public/${id}`,
        data: {},
      })
        .then(({ data }) => {
          // console.log(data.foods);
          // this.foodList = data.foods;
          commit("SET_FOOD_DETAIL", data);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire(err);
        });
    },
    newQrCode: function ({ commit }, id) {
      newaxios({
        method: "GET",
        url: `https://api.happi.dev/v1/qrcode`,
        params: {
          apikey: "bf5d4ekfjHtBdcIcBYzeC55TXpGhStXyJAtaQ7FF7xlIkuzdz3TI6OVN",
          data: id,
        },
      })
        .then(({ data }) => {
          console.log("-----------------------<<<<<<<", data);
          commit("SET_QR_CODE", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pagination: function ({ commit }, page) {
      axios({
        method: "GET",
        url: "/public",
        params: {
          page: page,
        },
      })
        .then((data) => {
          console.log(data);
          commit("SET_NEW_PAGE");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
