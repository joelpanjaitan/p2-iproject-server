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
    bookmarkList: [],
    totalPage: null,
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
      state.foodList = payload;
    },
    SET_IS_LOGIN: function (state, payload = false) {
      state.isLogin = payload;
    },
    SET_BOOKMARK: function (state, payload = []) {
      state.bookmarkList = payload;
    },
    SET_TOTAL_PAGE: function (state, payload) {
      state.totalPage = payload;
    },
    SET_SEARCH_RESULT: function (state, payload) {
      state.foodList = payload;
    },
  },
  actions: {
    login: function ({ commit }, { email, password }) {
      axios({
        method: "POST",
        url: "/public/login",
        data: {
          email,
          password,
        },
      })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          commit("SET_IS_LOGIN", true);
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
    searchQuery: function ({ commit }, { search, minimum, maximum }) {
      axios({
        method: "GET",
        url: "/public",
        params: {
          name: search,
          minimum: minimum,
          maximum: maximum,
        },
      })
        .then(({ data }) => {
          console.log(data);
          commit("SET_SEARCH_RESULT", data.foods);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register: function (context, { email, password }) {
      axios({
        method: "POST",
        url: "/public/register",
        data: {
          email,
          password,
        },
      })
        .then(({ data }) => {
          console.log(data);
          Swal.fire("Register successful");
          router.push("/login");
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
    totalpage: function ({ commit }) {
      axios({
        method: "GET",
        url: "/public",
      })
        .then(({ data }) => {
          commit("SET_TOTAL_PAGE", data.totalPage);
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
        .then(({ data }) => {
          console.log(data);
          commit("SET_NEW_PAGE", data.foods);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBookmark: function ({ commit }) {
      axios({
        method: "GET",
        url: "/bookmark",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          console.log(data.food);
          commit("SET_BOOKMARK", data.food);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
    addBookmark: function ({ commit }, id) {
      axios({
        method: "POST",
        url: `/bookmark/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          Swal.fire("Bookmmark added");
          console.log(data);
          commit("SET_BOOKMARK", data);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
  },
  modules: {},
});
