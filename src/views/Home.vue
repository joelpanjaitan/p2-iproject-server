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
          {{ food.name }} {{ food.description }} |
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
      <div class="col-md-4">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
          />
        </div>
      </div>
      <div class="col-4"></div>
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
    };
  },
  components: { Title, FoodCard, Pagination },
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
