<template>
  <div>
    <OurCompaniesMapinPhoto />
    <div class="brands-block">
      <OurBrands />
    </div>
    <div class="flex container items-center mx-auto">
      <ExploreOur />
    </div>
    <div v-if="showProductsPhoto" class="ttttte container flex mx-auto">
      <div v-for="item in items" :key="item.id" class="ttr">
        <exploreMinPhotos :items="item" @showItem="showItem" />
      </div>
    </div>

    <div
      v-if="showProductsHome"
      class="flex container mx-auto justify-between ddd"
    >
      <div class="brands-photo">
        <ExploreSlider :showItemPhotos="showItemPhotos" />
      </div>
      <ExploreText :showItemParams="showItemParams" @closeItem="closeItem" />
    </div>
  </div>
</template>

<script>
import OurCompaniesMapinPhoto from "./OurCompaniesModules/OurCompaniesMapinPhoto.vue";
import OurBrands from "./OurCompaniesModules/OurBrands.vue";
import ExploreSlider from "./OurCompaniesModules/ExploreSlider.vue";
import ExploreText from "./OurCompaniesModules/ExploreText.vue";
import ExploreOur from "./OurCompaniesModules/ExploreOur.vue";
import exploreMinPhotos from "./OurCompaniesModules/exploreMinPhotos.vue";
export default {
  components: {
    OurCompaniesMapinPhoto,
    OurBrands,
    ExploreSlider,
    ExploreText,
    ExploreOur,
    exploreMinPhotos,
  },

  data() {
    return {
      items: [
        {
          id: 1,
          image: "OurCompanies/exploreSlider1.png",
          paragraph:
            "1Our current portfolio includes some of the most respected and influential brands in the region and beyond. State-of-the-art facilities and award-winning practices ensure the highest operational qualities and best working practices enable our businesses to enjoy strong customer retention levels and productive working relationships.",
          photos: [
            { img: "OurCompanies/exploreSlider3.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
          ],
        },
        {
          id: 2,
          image: "OurCompanies/exploreSlider2.png",
          paragraph:
            "2Our current portfolio includes some of the most respected and influential brands in the region and beyond. State-of-the-art facilities and award-winning practices ensure the highest operational qualities and best working practices enable our businesses to enjoy strong customer retention levels and productive working relationships.",
          photos: [
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
          ],
        },
        {
          id: 3,
          image: "OurCompanies/exploreSlider3.png",
          paragraph:
            "3Our current portfolio includes some of the most respected and influential brands in the region and beyond. State-of-the-art facilities and award-winning practices ensure the highest operational qualities and best working practices enable our businesses to enjoy strong customer retention levels and productive working relationships.",
          photos: [
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
          ],
        },
        {
          id: 4,
          image: "OurCompanies/exploreSlider4.png",
          paragraph:
            "4Our current portfolio includes some of the most respected and influential brands in the region and beyond. State-of-the-art facilities and award-winning practices ensure the highest operational qualities and best working practices enable our businesses to enjoy strong customer retention levels and productive working relationships.",
          photos: [
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
          ],
        },
        {
          id: 5,
          image: "OurCompanies/exploreSlider5.png",
          paragraph:
            "5Our current portfolio includes some of the most respected and influential brands in the region and beyond. State-of-the-art facilities and award-winning practices ensure the highest operational qualities and best working practices enable our businesses to enjoy strong customer retention levels and productive working relationships.",
          photos: [
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
          ],
        },
        {
          id: 6,
          image: "OurCompanies/exploreSlider6.png",
          paragraph:
            "6Our current portfolio includes some of the most respected and influential brands in the region and beyond. State-of-the-art facilities and award-winning practices ensure the highest operational qualities and best working practices enable our businesses to enjoy strong customer retention levels and productive working relationships.",
          photos: [
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
            { img: "OurCompanies/exploreSlide.png" },
          ],
        },
      ],
      showProductsPhoto: true,
      showProductsHome: false,
      showItemParams: "",
      showItemPhotos: [],
    };
  },
  methods: {
    showItem(val) {
      this.showItemParams = val.paragraph;
      console.log(val.image,1);
      this.showItemPhotos = val.photos;
      console.log(this.showItemPhotos, 3434);
      this.showProductsPhoto = false;
      this.showProductsHome = true;
    },
    closeItem() {
      console.log(222222223);
      this.showProductsPhoto = true;
      this.showProductsHome = false;
    },
  },
};
</script>


<style scoped lang="scss">
.brands-block {
  margin-top: 56px;
}
.brands-photo {
  width: 65%;
}

</style>