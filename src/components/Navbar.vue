<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/">Home&nbsp;</router-link> |
      <router-link to="/login">&nbsp;Sign In&nbsp;</router-link> |
      <router-link to="/register">&nbsp;Sign Up</router-link>
    </nav>
    <!-- <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul v-if="isLogin" class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Disabled</a
          >
        </li>
      </ul>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {},
  computed: {
    isLogin: function () {
      return this.isLogin;
    },
  },
};
</script>

<style></style>
