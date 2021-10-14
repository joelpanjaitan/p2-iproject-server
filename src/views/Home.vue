<template>
  <div class="home">
    <Title :data="title" />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
export default {
  name: "Home",
  props: ["foodData"],
  data: function () {
    return {
      title: "Welcome to food restaurant App!",
      count: 0,
    };
  },
  components: { Title },
  created() {
    this.$emit("display");
  },
};
</script>
