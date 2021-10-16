import Vue from "vue";
import Vuex from "vuex";
import axios from "@/apis/server.js";
import Swal from "sweetalert2";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    foodList: [],
    food: null,
  },
  mutations: {
    SET_FOODS: function (state, payload = []) {
      state.foodList = payload;
    },
    SET_FOOD_DETAIL: function (state, payload = null) {
      state.food = payload;
    },
  },
  actions: {
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
          console.log("-----------------------<<<<<<<", data);
          // console.log(data.foods);
          // this.foodList = data.foods;
          commit("SET_FOOD_DETAIL", data);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire(err);
        });
    },
  },
  modules: {},
});
