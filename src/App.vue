<template>
  <HeaderMenu />
  <div id="app">
    <router-view />
    <Footer class="mt-20"/>
  </div>

</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue'
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    HeaderMenu
  }
}
</script>

<style scoped>
#app{
  background: #FFFFFF;
}

</style>
