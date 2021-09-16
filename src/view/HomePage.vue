<template>
  <div>
    <ImgBlock class="imgBlock"/>
    <Block class="block"/>
    <Focuse class="mt-24"/>
    <MobileManager class="mt-40"/>
    <Images class="mt-40"/>
    <BottomLine class="mt-24 mx-auto" />
    <Partner class="mt-24 mx-auto"/>
  </div>
</template>

<script>
import ImgBlock from '@/components/HomePage/ImgBlock.vue'
import Block from "../components/HomePage/Block";
import Focuse from "../components/HomePage/Focuse";
import MobileManager from "../components/HomePage/MobileManager";
import Images from "../components/HomePage/Images";
import BottomLine from "../components/HomePage/BottomLine";
import Partner from "../components/HomePage/Partner";

export default {
  components:{
    Partner,
    BottomLine,
    Images,
    MobileManager,
    Focuse,
    Block,
    ImgBlock
  }
}
</script>

<style scoped>

</style>