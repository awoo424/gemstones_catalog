<template>
  <div id="app">
    <div>
      <b-navbar id="nav" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand id="nav-title" href="/">Gemstones 💎</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="pl-2">
              <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item class="px-3">
              <router-link to="/about">About</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/admin">Admin</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-title {
  color: #ffffff;
  font-weight: bold;
  padding-left: 0.5rem;
}

#nav-collapse a {
  font-weight: bold;
  color: #bfbfbf;
  text-decoration: none;
}

#nav-collapse a:hover {
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

.badge,
.btn,
.btn:hover,
.jumbotron {
  -webkit-box-shadow: 0 0 0 0;
  box-shadow: 0 0 0 0;
}

.btn {
  font-size: 0.8rem !important;
}
</style>
