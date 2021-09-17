<template>
  <div>
    <div
      class="bgActiveGallery mt-14 mb-4"
      :style="`background-image: url(` + activeImage + `)`"
    ></div>
    <div class="flex">
      <div class="slack-left mr-5 my-auto">
        <img
          @click="prev"
          class="mr-2 cursor-pointer"
          src="@/assets/icons/slideSlackLeft.svg"
          alt=""
        />
      </div>
      <div class="gallerySlid mt-4" ref="seaSliderblock">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          @click="doActive(index)"
          :ref="`seaSliderblock${index}`"
          class="cursor-pointer"
          :class="{ 'ml-6': index, 'opacity-50': slide.active }"
          :style="`background-image: url(` + slide.image + `)`"
        ></div>
      </div>
      <div class="slack-rigth ml-5 my-auto">
        <img
          @click="next"
          class="ml-2 cursor-pointer"
          src="@/assets/icons/slideSlackRigth.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template> 
 
<script>
import ImgSea from "@/assets/news/media/sliderPhoto.png";
import Africa from "@/assets/career/joinUs.png";
import { ref, reactive, computed } from "vue";
export default {
  setup() {
    // /trip_photos/
    const slides = reactive([
      { image: ImgSea, active: true },
      { image: Africa, active: false },
      { image: ImgSea, active: false },
      { image: ImgSea, active: false },
      { image: Africa, active: false },
      { image: ImgSea, active: false },
      { image: ImgSea, active: false },
      { image: ImgSea, active: false },
      { image: ImgSea, active: false },
    ]);
    const activeImage = computed(() => {
      let key;
      for (key = 0; key < slides.length; key++) {
        if (slides[key].active) {
          return slides[key].image;
        }
      }
    });
    const seaSliderblock = ref();
    const seaSliderblock1 = ref();
    const doActive = (index) => {
      let key;
      for (key = 0; key < slides.length; key++) {
        if (key == index) {
          slides[key].active = true;
        } else {
          slides[key].active = false;
        }
      }
      seaSliderblock.value.scrollLeft =
        seaSliderblock1.value.offsetWidth * index;
    };
    const next = () => {
      seaSliderblock.value.scrollLeft += seaSliderblock1.value.offsetWidth;
      // console.log(seaSliderblock.value.scrollWidth-seaSliderblock.value.clientWidth, 'seyran', seaSliderblock.value.scrollLeft)
      let key;
      for (key = 0; key < slides.length; key++) {
        if (slides[key].active && key !== slides.length - 1) {
          slides[key + 1].active = true;
          slides[key].active = false;
          return;
        } else if (slides[key].active && key == slides.length - 1) {
          slides[0].active = true;
          slides[key].active = false;
          seaSliderblock.value.scrollLeft = 0;
          return;
        }
      }
    };
    const prev = () => {
      seaSliderblock.value.scrollLeft -= seaSliderblock1.value.offsetWidth;
      let key;
      for (key = 0; key < slides.length; key++) {
        if (slides[key].active && key !== 0) {
          slides[key - 1].active = true;
          slides[key].active = false;
          return;
        } else if (slides[key].active && key == 0) {
          slides[slides.length - 1].active = true;
          slides[0].active = false;
          seaSliderblock.value.scrollLeft =
            seaSliderblock.value.scrollWidth - seaSliderblock.value.clientWidth;
          return;
        }
      }
    };

    return {
      slides,
      seaSliderblock,
      seaSliderblock1,
      activeImage,
      next,
      prev,
      doActive,
    };
  },
};
</script> 
 
<style scoped lang="scss">
.gallerySlid > div {
  width: 100px;
  height: 100px;
}
/* .carousel-inner{ 
        border-radius: 24px !important; 
    }  */
.carousel-control-next,
.carousel-control-prev {
  opacity: 1 !important;
}
.gallerySlid > div {
  counter-increment: item;
}
.gallerySlid {
  width: 100%;
  margin: auto;
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* scroll-snap-type: x mandatory; */
  -webkit-overflow-scrolling: touch;
}
.gallerySlid::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.gallerySlid::-webkit-scrollbar-track {
  opacity: 0;
}
.gallerySlid::-webkit-scrollbar-thumb {
  opacity: 0;
  /* background: linear-gradient(114.12deg, #00FFD1 -104.63%, #0C9AC6 115.04%); 
        border-radius: 100px; */
}
.bgActiveGallery {
  width: 100%;
  height: 63vh;
  background-repeat: no-repeat;
  background-size: cover;
  /* border-radius: 20px;  */
}
.gallerySlid > div {
  width: 318px;
  height: 203px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  /* border-radius: 20px;  */
  scroll-snap-align: center;
  border: 2px solid #c1121f;
  box-sizing: border-box;
  backdrop-filter: blur(1px);
}
.slack-rigth, .slack-left {
  width: 48px;
  height: 48px;
  background: #148aae;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
  padding: 8px 16px 8px 16px;
}
@media only screen and (max-width: 767px) {
  .bgActiveGallery{
      width: 100%;
  }
  .gallerySlid {
    div {
      width: 170px;
      height: 108px;
    }
  }
  }
</style>