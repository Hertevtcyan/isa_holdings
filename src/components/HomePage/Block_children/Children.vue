<template>
  <div class="children">
    <h1 class="ml-14 mt-14">{{content.title}}</h1>
    <p class="ml-14 mt-6">{{content.description}}</p>
  </div>
</template>

<script>
export default {
  props:{
    content:{
      type: Object,
    }
  }
}
</script>

<style scoped>
.children{
  width: 716px;
  height: 331px;
}

.children h1{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 57px;
  color: #1D3557;
}

.children p{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #1D3557;
}
</style>