<template>
  <div class="explore-text">
    <div @click="closeItem" class="close">x</div>
    <div class="explore-main-text">
      <div class="textLogo">
        <img src="@/assets/OurCompanies/exploreTextLogo.png" alt="" />
      </div>
      <TextRedLine componentStyle="slider-text" :paragraph="`${showItemParams}`" />
      <a href="#"> www.Isa-costruction.com </a>
    </div>
  </div>
</template>

<script>
import TextRedLine from "@/components/ui/TextRedLine.vue";
export default {
  components: { TextRedLine },
  props: {
    showItemParams: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeItem() {
      this.$emit("closeItem");
    },
  },
};
</script>

<style scoped lang="scss">
.explore-text {
  width: 60%;
  padding-top: 76px;
  position: relative;
  background: #fff;
  .close {
    position: absolute;
    right: 24px;
    top: 24px;
    width: 24px;
    height: 24px;
    color: #fff;
    font-size: 22px;
    text-align: center;
    line-height: 17px;
    cursor: pointer;
    background: #148aae;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
  }
}
.explore-main-text {
  max-width: 626px;
  height: 300px;
  margin-left: 3.8vw;
  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: #c1121f;
  }
}
@media screen and (max-width: 1024px) {    
  .explore-text {
    width: 60%;
    padding-top: 76px;
    position: relative;
    background: #fff;
    .close {
      position: absolute;
      right: 24px;
      top: 5px;
      width: 24px;
      height: 24px;
      color: #fff;
      font-size: 22px;
      text-align: center;
      line-height: 17px;
      cursor: pointer;
      background: #148aae;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
    }
  }
  .explore-main-text {
  max-width: 626px;
  height: 300px;
  margin-left: 3.8vw;
  margin-top: -24px;
  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 42px;
    color: #c1121f;
    padding-bottom: 14px;
  }
}
}
@media screen and (max-width: 767px){
.explore-text {
  width: 100%;
}
}
</style>
