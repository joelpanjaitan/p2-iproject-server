<template>
  <div class="home">
    <div class="row justify-content-start">
      <Title :data="title" />

      <ul class="list-group list-group-horizontal">
        <li
          v-for="food in foodList"
          :key="food.id"
          class="list-group-item flex-fill"
        >
          <FoodCard :singleFood="food"></FoodCard>
          <a @click="addBookmark(food.id)">Add to bookmark</a> |
          <router-link
            :to="{
              name: 'FoodDetail',
              params: { id: food.id },
            }"
            >Details</router-link
          >
        </li>
      </ul>
    </div>
    <br />
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-4">
        <div class="input-group mb-3">
          <div class="input-group-prepend"></div>
          <form @submit.prevent="searchQuery">
            <label>Search Query</label>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
              v-model="search"
            />
            <label>Minimum Price</label>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
              v-model="minimum"
            />
            <label>Maximum Price</label>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with checkbox"
              v-model="maximum"
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
      <div class="col-3"></div>
      <div class="col-4">
        <Pagination></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FoodCard from "@/components/FoodCard.vue";
import Title from "@/components/Title.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "Home",
  props: [],
  data: function () {
    return {
      title: "Welcome to food restaurant App!",
      page: "",
      search: "",
      minimum: "",
      maximum: "",
    };
  },
  components: { Title, FoodCard, Pagination },
  methods: {
    addBookmark: function (id) {
      this.$store.dispatch("addBookmark", id);
    },
    searchQuery: function () {
      this.$store.dispatch("searchQuery", {
        search: this.search,
        minimum: this.minimum,
        maximum: this.maximum,
      });
    },
  },
  created() {
    this.$store.dispatch("fetchFoods");
  },
  computed: {
    foodList: function () {
      return this.$store.state.foodList;
    },
  },
};
</script>
<style></style>
