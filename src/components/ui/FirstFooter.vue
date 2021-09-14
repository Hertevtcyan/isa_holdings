<template>
  <div :class="`corporate-container-bg__${$props.img}`">
    <div class="container  corporate">
      <div class="corporate-text-wrapper" :class="`corporate-text-wrapper__${$props.small}`">
          <h2 class="ml-52">{{properties.title}}</h2>
          <div class="line ml-52"></div>
          <p class="ml-52">
            {{properties.text}}
          </p>
          <p v-if="properties.textTwo !== ''"  class="ml-52">
            {{properties.textTwo}}
          </p>
          <read-more-button v-if="button" type="transparent" class="view"
          >View More</read-more-button>
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
        ["history", "mission", "strategy", "management", "media", "career"].includes(type),
    },
    button: {
        type: Boolean,
    },
    small: {
      type: String
    }
  },
};
</script>



<style scoped>
.corporate-container-bg__history {
  background-image: url("../../assets/about/aboutHistory/corporateMainPhoto.png");
  width: 100%;
  height: 720px;
  padding-top: 65px;
  background-size: cover;
  background-repeat: no-repeat;
}
.corporate-container-bg__strategy {
  background-image: url("../../assets/about/aboutHistory/strategy_footer.png");
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
.corporate-container-bg__career {
  background-image: url("../../assets/career/firstFooter.png");
  width: 100%;
  height: 720px;
  padding-top: 65px;
  background-size: cover;
  background-repeat: no-repeat;
}
.view {
  border: 1px solid #ffffff;
  box-sizing: border-box;
  backdrop-filter: blur(1px);
  width: 184px;
  height: 73px;
  color: #ffffff;
  margin-top: 49px;
  margin-left: 77%;
  cursor: pointer;
}

h2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 57px;
  color: #ffffff;
  padding-top: 50px;
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


.corporate-text-wrapper {
  width: 60%;
  margin-top: 90px;
  height: 480px;
}

.corporate-text-wrapper__one {
  background-color: #840032;
  box-shadow: 4px 4px 20px #001315;
  margin-top: 50px;
  opacity: 0.5;
  width: 80%;
}
</style>
