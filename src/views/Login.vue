<template>
  <div>
    <h1>This is login page</h1>
    <form @submit.prevent="handleLogin">
      <label for="email">Email</label>
      <input type="email" placeholder="email" v-model="email" />
      <br />
      <label for="email">Password</label>
      <input type="password" placeholder="password" v-model="password" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import axios from "@/apis/server";
export default {
  name: "Login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      axios({
        method: "POST",
        url: "/login",
      });
    },
  },
};
</script>

<style></style>
