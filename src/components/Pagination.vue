<template>
  <nav aria-label="Page navigation example ">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="changePage">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" @click="changePage">1</a></li>
      <li class="page-item"><a class="page-link" @click="changePage">2</a></li>
      <li class="page-item"><a class="page-link" @click="changePage">3</a></li>
      <li class="page-item">
        <a class="page-link" @click="changePage">Next</a>
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
    changePage: function () {},
  },
};
</script>

<style></style>
