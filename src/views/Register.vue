<template>
  <div>
    <h1>This is register page</h1>
    <div class="card col-4 mx-auto my-2">
      <div class="card-body d-flex flex-row">
        <form class="col-12" @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="caption">Password</label>
            <input
              id="caption"
              type="password"
              class="form-control"
              v-model="password"
              required
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-info">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  components: {},
  methods: {
    handleRegister: function () {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
