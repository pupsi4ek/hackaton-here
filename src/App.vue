<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
body {
  background-color: #EDF2F7;
}
#app {
  font-family: "Montserrat", sans-serif;
}
</style>