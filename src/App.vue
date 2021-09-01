<template>
  <div>
    <div>
      <HeaderMenu />
    </div>
    <div>
      <HomePage class="mt-20"/>
    </div>
  </div>

</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue'
import HomePage from "./view/HomePage";

export default {
  name: 'App',
  components: {
    HomePage,
    HeaderMenu
  }
}
</script>

<style>

</style>
