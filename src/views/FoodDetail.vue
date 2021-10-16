<template>
  <div>
    <h1>This is food detail page</h1>
    <!-- <pre>{{ JSON.stringify(foodDetail, null, 2) }}</pre> -->
    <img :src="foodDetail.imgUrl" /><br />
    <a>Name: {{ foodDetail.name }}</a
    ><br />
    <a>Description: {{ foodDetail.description }}</a
    ><br />
    <a>Price: {{ foodDetail.price }}</a
    ><br />
    <a>Category: {{ foodDetail.Category.name }}</a
    ><br /><br />
    <img :src="newQrCode.qrcode" />
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
    this.$store.dispatch("newQrCode", this.$route.params.id);
  },
  computed: {
    foodDetail: function () {
      return this.$store.state.food;
    },
    newQrCode: function () {
      return this.$store.state.qrCode;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
