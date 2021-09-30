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

<style  lang="scss">

.carousel__pagination{
    display: none;
}

.carousel__prev{
border-radius: 0;
background: #148AAE;
box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
left: 50px;

}
.carousel__next{
border-radius: 0;
background: #148AAE;
box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
right: 50px;
}
@media screen and (max-width: 767px){
  .my-container{
    width: 100%;
  }
}

</style>



