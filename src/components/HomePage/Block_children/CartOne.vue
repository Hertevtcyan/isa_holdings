<template>
  <div class="rounded overflow-hidden shadow-lg card">
    <div class="card_img_div">
      <img class="w-full video" src="../../../assets/icons/video.svg">
      <h1>Focuse on stregth</h1>
      <img src="../../../assets/icons/youtube.svg" class="youtube">
    </div>
    <Children :content="{title, description}" />
  </div>
</template>

<script>
import Children from './Children'
import {ref} from "vue";

export default {
  components: {Children},

  setup(){
    const title = ref("Focuse on stregth");
    const description = ref("Watch the video to find out how we’re using what’s unique about ISA Holding to deliver on our strategy and fulfil our purpose.")

    return{title, description}
  }
}

</script>

<style scoped>


.card{
  width: 716px;
  height: auto;
}

.card_img_div{
  position: relative;
  height: 477px;
}

.card_img_div .video{
  position: absolute;
  width: 100%;
  height: 100%;
}

.card_img_div .youtube{
  position: absolute;
  width: 129.68px;
  height: 98.97px;
  bottom: 0;
}

.card_img_div h1{
  position: absolute;
  font-family: Rubik;
  font-size: 58px;
  width: 100%;
  text-align: center;
  line-height: 70px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0.08em;
  color: #FFFFFF;
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
}

</style>
