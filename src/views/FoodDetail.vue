<template>
  <div>
    <h1>This is food detail page</h1>
    <pre>{{ JSON.stringify(foodDetail, null, 2) }}</pre>
  </div>
</template>

<script>
import axios from "@/apis/server";
export default {
  name: "FoodDetail",
  data: function () {
    return {
      // food: null,
    };
  },
  methods: {
    fetchFoods() {
      axios({
        method: "GET",
        url: "/public/" + this.$route.params.id,
      })
        .then(({ data }) => {
          console.log(data);
          this.food = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.$store.dispatch("foodDetail", this.$route.params.id);
    // console.log(this.$route.params.id);
  },
  computed: {
    foodDetail: function () {
      return this.$store.state.food;
    },
  },
};
</script>

<style></style>
