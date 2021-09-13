<template>
  <div class="brands">
    MEDIA

   
    <!-- <a :href="`${location.origin}/img/`"  download="asd.png">a</a> -->
  </div>
</template>



<script>
export default {
  methods: {
    data() {
      return {
        publicPath: process.env.BASE_URL,
      };
    },
  },
};
</script>


<style scoped>
.brands {
  width: 400px;
  height: 400px;
  border: 1px solid red;
}
</style>