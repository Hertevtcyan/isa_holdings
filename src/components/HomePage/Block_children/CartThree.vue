<template>
  <div class="rounded overflow-hidden shadow-lg card">
    <img class="w-full" src="../../../assets/icons/pepole.png">
    <Children :content="{title, description}" />
    <ReadMoreButton type="text" class="text">Read more</ReadMoreButton>
  </div>
</template>

<script>
import ReadMoreButton from "../../ui/ReadMoreButton";
import Children from './Children'
import {ref} from "vue";

export default {
  components: {Children, ReadMoreButton},

  setup(){
    const title = ref("Our Vision helps companies Go for growth");
    const description = ref("ISA Holding virtual community is helping businesses in Turkey to bounce back from the pandemic.")

    return{title, description}
  }
}

</script>

<style scoped>
img{
  width: 100%;
  height: 912px;
}

.card{
  width: 716px;
  height: auto;
}

.text{
  margin-left: 65%;
}
</style>
