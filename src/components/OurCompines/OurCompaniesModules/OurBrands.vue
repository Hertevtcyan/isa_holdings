<template>
  <div class="container flex justify-between mx-auto ">
    <div class="my-container">
      <TextRedLine
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
</style>