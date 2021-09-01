<template>
  <HeaderMenu />
 <router-view />
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue'
// import HomePage from "./view/HomePage";

export default {
  name: 'App',
  components: {
    // HomePage,
    HeaderMenu
  }
}
</script>

<style>

</style>
