<template>
  <div class="about">
    <h1>This is a bookmark page</h1>
    <ul class="list-group list-group-horizontal">
      <li
        v-for="food in bookmarks"
        :key="food.id"
        class="list-group-item flex-fill"
      >
        <FoodCard :singleFood="food"></FoodCard>
      </li>
    </ul>
  </div>
</template>
<script>
import FoodCard from "@/components/FoodCard.vue";
export default {
  name: "Bookmark",
  components: {
    FoodCard,
  },
  created: function () {
    this.$store.dispatch("getBookmark");
  },
  computed: {
    bookmarks: function () {
      return this.$store.state.bookmarkList;
    },
  },
};
</script>
