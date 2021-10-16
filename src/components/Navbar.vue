<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Sign In</router-link> |
    <router-link to="/register">Sign Up</router-link>
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
