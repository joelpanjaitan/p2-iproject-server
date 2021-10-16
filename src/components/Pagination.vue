<template>
  <nav aria-label="Page navigation example ">
    <ul class="pagination">
      <li class="page-item" v-for="(item, index) in totalpage" :key="index">
        <a class="page-link" @click="changePage(item)">{{ item }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  data: function () {
    return {};
  },
  methods: {
    changePage: function (page) {
      this.$store.dispatch("pagination", page);
    },
  },
  created() {
    this.$store.dispatch("totalpage");
  },
  computed: {
    totalpage: function () {
      return this.$store.state.totalPage;
    },
  },
};
</script>

<style></style>
