<template>
  <div id="app">
    <Navbar />
    <router-view :foodData="foodList" @display="fetchFoods" />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import axios from "./apis/server";
export default {
  name: "App",
  data: function () {
    return {
      foodList: [],
    };
  },
  methods: {
    fetchFoods() {
      axios({
        method: "GET",
        url: "/public",
      })
        .then(({ data }) => {
          console.log(data.foods);
          this.foodList = data.foods;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    Navbar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
