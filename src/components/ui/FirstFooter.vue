<template>
  <div :class="`corporate-container-bg__${$props.img}`">
    <div class="container mx-auto  corporate">
      <div class="corporate-text-wrapper">
        <h2>{{properties.title}}</h2>
        <div class="line"></div>
        <p>
          {{properties.text}}
        </p>
        <p v-if="properties.textTwo !== ''">
          {{properties.textTwo}}
        </p>
       
        <read-more-button v-if="button" type="transparent" class="view"
          >View More</read-more-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";

export default {
  components: {
    ReadMoreButton,
  },
  props: {
    properties: {
      type: Object,
    },
    img: {
      type: String,
      validator: (type) =>
        ["history", "mission", "strategy", "management", "media"].includes(type),
    },
    button: {
        type: Boolean,
    }
  },
};
</script>



<style scoped lang="scss">
.corporate-container-bg__history {
  background-image: url("../../assets/about/aboutHistory/corporateMainPhoto.png");
  width: 100%;
  height: 720px;
  padding-top: 65px;
  background-size: cover;
  background-repeat: no-repeat;
}
.corporate-container-bg__mission {
  background-image: url("../../assets/about/aboutValues/ourCode.png");
  width: 100%;
  height: 720px;
  padding-top: 65px;
  background-size: cover;
  background-repeat: no-repeat;
}
.corporate-container-bg__media {
  background-image: url("../../assets/news/media/firstFooterPhone.png");
  width: 100%;
  height: 720px;
  padding-top: 65px;
  background-size: cover;
  background-repeat: no-repeat;
}
.corporate-text-wrapper {
  max-width: 767px;
  position: relative;
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 57px;
    color: #ffffff;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: #ffffff;
    margin-top: 24px;
  }
  .line {
    background: #c1121f;
    width: 157px;
    height: 4px;
    margin-top: 24px;
  }
  .view {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    backdrop-filter: blur(1px);
    width: 184px;
    height: 73px;
    color: #ffffff;
    position: absolute;
    right: 0;
    margin-top: 69px;
    cursor: pointer;
  }
}
</style>
