<template>
  <div class="help-busines" :class="`${$props.componentName}`">
    <div v-if="$props.image" class="img_div">
      <base-image v-if="$props.image" v-bind="$props.image" />
      <img
        v-if="$props.showYoutubeIcon"
        class="video_img"
        src="../../assets/icons/youtube.svg"
      />
      <h1 v-if="$props.image_text">{{ $props.image_text }}</h1>
    </div>
    <div
      :class="`${$props.textBlockBackground}`"
      class="help-busines-text-butt"
    >
      <h2 v-if="$props.subTitle">{{ $props.subTitle }}</h2>
      <p v-if="$props.paragraph">{{ $props.paragraph }}</p>
      <read-more-button type="text" v-if="$props.showButton" class="view"
        >View More</read-more-button
      >
    </div>
  </div>
</template>

<script>
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";
import BaseImage from "./BaseImage.vue";
export default {
  components: {
    ReadMoreButton,
    BaseImage,
  },
  props: {
    componentName: {
      type: String,
    },
    subTitle: {
      type: String,
      required: false,
    },
    paragraph: {
      type: String,
      required: false,
    },
    image: {
      type: Object,
      required: false,
      validator: (img) => "src" in img && "alt" in img,
    },
    showButton: {
      type: Boolean,
      required: false,
    },
    image_text: {
      type: String,
      required: false,
    },
    showYoutubeIcon: {
      type: Boolean,
      required: true,
    },
    textBlockBackground: {
      type: String,
      required: false,
    },
    textBlockBackground: {
      type: String,
      validator: (type) => ["color1", "color2"].includes(type),
    },
  },
};
</script>




<style scoped lang="scss">
.color1 {
  background: #7c7287;
  h2,
  p,
  button {
    color: #ffffff !important;
  }
}
.color2 {
  background: #1d3557;
  h2,
  p,
  button {
    color: #ffffff !important;
  }
}
.help-busines {
  background: #ffffff;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
  // width: 716px;
  margin-top: 82px;
}

.img_div {
  position: relative;
  height: 543px;
}

.img_div h1 {
  position: absolute;
  font-family: Rubik;
  font-size: 58px;
  width: 75%;
  text-align: center;
  line-height: 70px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 0.08em;
  color: #ffffff;
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
}

.video_img {
  position: absolute;
  bottom: 0;
  width: 130px;
  height: 99px;
}

img {
  width: 100%;
  position: absolute;
  // height: 543px;
}

.help-busines-text-butt {
  padding-left: 62px;
  position: relative;

  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 45px;
    line-height: 53px;
    color: #1d3557;
    padding-top: 62px;
    padding-bottom: 46px;
  }
  .view {
    position: absolute;
    bottom: 20px;
    right: 0;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: #1d3557;
    padding-bottom: 138px;
  }
}
@media screen and (max-width: 1488px) {
 .helping-left, .helping-rigth {
   width: 500px!important;
 }
}

@media screen and (max-width: 1279px) {
  .help-busines-text-butt {
    h2 {
      padding-top: 40px;
    }
    p {
      line-height: 36px;
      padding-bottom: 100px;
    }
  }
 .contact-customer {
   
 }
  
}

@media screen and (max-width: 1024px) {
  .managment-apoarch {
    .img_div {
      // width: 385px;
      height: 409px;
      img {
        // width: 385px;
        height: 409px;
      }
    }
    .help-busines-text-butt {
      h2 {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 38px;
        letter-spacing: 0.05em;
        padding-bottom: 12px;
      }
      p {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 38px;
      }
    }
  }
}
</style>