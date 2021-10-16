<template>
  <div>
    <div class="card mx-auto my-2" style="width: 12rem">
      <img :src="singleFood.imgUrl" class="card-img-top" />
      <div class="card-body card-body">
        <h5 class="card-title">{{ singleFood.name }}</h5>
        <p class="card-text">{{ singleFood.description }}</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodCard",
  props: ["singleFood"],
};
</script>

<style></style>
