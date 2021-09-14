<template>
  <div class="my-container">
    <div class="ShowPhototBlock">
      {{ activePhoto.img }}
    </div>
    <div>
      <carousel :items-to-show="3" :wrapAround="true" snapAlign="start">
        <slide class="redBorder" v-for="(slide, index) in photos" :key="index">
          <base-image
            class="minPhotosItems"
            @click="change($event, index)"
            :src="slide.img"
            alt="slide"
          />
        </slide>
        <template #addons>
          <navigation class="slackSlider" />
        </template>
      </carousel>
    </div>
  </div>
</template>



<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import BaseImage from "@/components/ui/BaseImage.vue";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    BaseImage,
  },
  data() {
    return {
      photos: [
        {
          id: 0,
          img: "OurCompanies/exploreSlider1.png",
        },
        {
          id: 1,
          img: "OurCompanies/exploreSlider2.png",
        },
        {
          id: 2,
          img: "OurCompanies/exploreSlider3.png",
        },
        {
          id: 3,
          img: "OurCompanies/exploreSlider4.png",
        },
        {
          id: 4,
          img: "OurCompanies/exploreSlider5.png",
        },
      ],
      activePhoto: "",
      itemIndex: ''
    };
  },
  mounted() {
    
    this.activePhoto = this.photos[0];
    document.querySelector(".carousel__prev").addEventListener("click", () => {
        console.log(this.itemIndex, 554);
      for (let i = 0; i < this.photos.length; i++) {
        if (this.photos[i].id === this.activePhoto.id) {
          if (i <= 0) {
            i = 5;
          }
          let index = (i = i - 1);
          this.activePhoto = this.photos[index];
          break;
        }
      }
    });
    document.querySelector(".carousel__next").addEventListener("click", () => {
      for (let i = 0; i < this.photos.length; i++) {
        if (this.photos[i].id === this.activePhoto.id) {
          let index = (i = i + 1);
          if (index > 4) {
            index = 0;
          }
          this.activePhoto = this.photos[index];
          break;
        }
      }
    });
  },

  

  //   methods: {
  //     change($event, item) {
  //       this.activePhoto = item;
  //       console.log(item);
  //       let x = document.querySelectorAll(".carousel__slide");
  //       x.forEach((i) => {
  //         i.classList.remove("carousel__slide--active");
  //       });
  //     //   $event.target.parentNode.classList.add("carousel__slide--active");
  //     },
  //     tttg(){
  //         console.log(8888888882);
  //     }
  //   },
};
</script>


<style lang="scss">
.ShowPhototBlock {
  height: 200px;
  border: 1px solid;
}
.minPhotosItems {
  width: 319px;
}

.carousel__prev,
.carousel__next {
  width: 48px;
  height: 48px;
  border-radius: 0;
  background: #148aae;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
}
.carousel__prev {
  top: 50%;
  left: 24px;
  transform: translate(-50%, -50%);
}
.carousel__next {
  top: 50%;
  right: 24px;
  transform: translate(50%, -50%);
}

.carousel__track {
  .carousel__slide {
    width: 327px;
    height: 213px;
    border: 2px solid #c1121f;
    box-sizing: border-box;
    backdrop-filter: blur(1px);
  }
  .carousel__slide--active {
    opacity: 0.3;
  }
}
</style>