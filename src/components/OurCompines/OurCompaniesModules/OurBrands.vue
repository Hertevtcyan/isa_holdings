<template>
  <div class="main-cont container flex justify-between mx-auto">
    <div class="my-container">
      <TextRedLine
        componentStyle="our-brands"
        v-for="(data, index) in content"
        :key="index"
        v-bind="data"
      />
    </div>
    <div class="brands-photo">
      <img src="@/assets/OurCompanies/brands.png" alt="" />
    </div>
  </div>
</template>


<script>
import TextRedLine from "@/components/ui/TextRedLine.vue";
export default {
  components: {
    TextRedLine,
  },
  data() {
    return {
      content: [
        {
          subTitle: "Brands and group strengths",
          paragraph:
            "Our current portfolio includes some of the most respected and influential brands in the region and beyond. State-of-the-art facilities and award-winning practices ensure the highest operational qualities and best working practices enable our businesses to enjoy strong customer retention levels and productive working relationships.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.my-container {
  width: 626px;
  margin-top: 30px;
}
.brands-photo {
  width: 794px;
  img {
    width: 100%;
  }
}
@media screen and (max-width: 1488px) {
  .brands-photo {
    width: 700px;
  }
  .my-container {
    width: 545px;
  }
}
@media screen and (max-width: 1279px) {
  .brands-photo {
    width: 538px;
  }
  .my-container {
    margin-top: 0;
    width: 445px;
  }
}
@media screen and (max-width: 1024px) {
  .brands-photo {
    width: 325px;
    height: 437px;
    img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      height: 437px;
    }
  }
  .my-container {
    
    width: 409px;
  }
}
@media screen and (max-width: 767px){
.main-cont{
  flex-direction: column-reverse;
}
.brands-photo {
  width: 100%;
  height: auto;
  img {
    width: 100%;
  height: auto;
  }
}
.my-container {
      width: 100%;
    margin-top: 25px;
}
}
</style>