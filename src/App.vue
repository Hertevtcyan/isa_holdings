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

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app{
  /*background: white;*/
  background-image: url("./assets/icons/Rectangle.png");
}

</style>
