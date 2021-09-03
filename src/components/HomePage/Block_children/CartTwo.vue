<template>
  <div class="rounded overflow-hidden shadow-lg card">
    <Children :content="{title, description}" />
    <ReadMoreButton type="text" class="card_button">Read More</ReadMoreButton>
  </div>
</template>

<script>
import Children from './Children'
import {ref} from "vue";
import ReadMoreButton from "../../ui/ReadMoreButton";

export default {
  components: {ReadMoreButton, Children},

  setup(){
    const title = ref("Helping a space business reach for the stars");
    const description = ref("We’ve financed a space electronics inventor to bring satellite technology to market.")

    return{title, description}
  }
}

</script>

<style scoped>


.card{
  width: 716px;
  height:auto;
}

.card_button{
  margin-left: 60%;
}


</style>
