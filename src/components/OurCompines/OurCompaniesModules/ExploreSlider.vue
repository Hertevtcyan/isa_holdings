<template>
  <div class="my-container" >
    <carousel 
    :items-to-show="1"
    wrapAround="true"
    >
      <slide v-for="(slide, index) in showItemPhotos" :key="index">
        <base-image :src="slide.img" alt="slide" />
      </slide>
      <template #addons>
      <navigation class="slackSlider" />
      <pagination />
    </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import BaseImage from '@/components/ui/BaseImage.vue'
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    BaseImage
  },
  props: {
    showItemPhotos: {
      type: Object, 
    }
  },
  mounted(){
    setTimeout(()=> {
      this.slideAnimate=true
    },1000)
  }
};
</script>

<style scoped lang="scss">

.carousel__pagination{
    display: none;
}
.slackSlider {
  right: 50px!important;
}

</style>



