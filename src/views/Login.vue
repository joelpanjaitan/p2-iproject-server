<template>
  <div>
    <h1>This is login page</h1>
    <div class="card col-4 mx-auto my-2">
      <div class="card-body d-flex flex-row">
        <form class="col-12" @submit.prevent="handleLogin">
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
            <button type="submit" class="btn btn-info">Login</button>
          </div>
        </form>
      </div>
      <button class="col-12" @click="googleSignIn">Google Sign in</button>
    </div>
  </div>
</template>

<script>
import axios from "../apis/server";
import Swal from "sweetalert2";
import router from "../router";
export default {
  name: "Login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  components: {},
  methods: {
    handleLogin: function () {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    googleSignIn: function () {
      this.$gAuth
        .signIn()
        .then((response) => {
          var id_token = response.$b.id_token;
          // console.log(id_token);
          axios({
            method: "POST",
            url: "/public/login-google",
            data: {
              token: id_token,
            },
          })
            .then((resp) => {
              console.log(resp.data.access_token);
              localStorage.setItem("access_token", resp.data.access_token);
              // this.$emit("toHome");
              router.push("/");
              // this.fetchFoods();
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response
                  ? `${err.response.data.message}`
                  : "Something Wrong!",
              });
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://apis.google.com/js/platform.js?onload=renderButton"
    );
    document.body.appendChild(externalScript);
  },
};
</script>

<style></style>
