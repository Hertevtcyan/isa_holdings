<template>
  <div  class="explore-text">
    <div @click="closeItem" class="close">x</div>
    <div class="explore-main-text">
      <div class="textLogo">
        <img src="@/assets/OurCompanies/exploreTextLogo.png" alt="" />
      </div>
      <TextRedLine :paragraph="`${showItemParams}`" />
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
      this.$emit('closeItem');
    },
  },
};
</script>

<style scoped lang="scss">
.explore-text {
  width: 60%;
  border: 1px solid;
  padding-top: 76px;
  position: relative;
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
</style>
