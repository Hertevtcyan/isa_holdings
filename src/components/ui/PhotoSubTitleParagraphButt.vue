
<template>
  <div class="card" :class="`${$props.componentName ?? ''}`">
    <div class="main-block">
      <div class="image">
        <base-image v-bind="$props.image" />
        <h2 v-if="$props.title" class="title">{{ $props.PhotoTitle }}</h2>
        <img
          v-if="$props.showYoutubeButt"
          class="img"
          src="../../assets/icons/youtube.svg"
          alt=""
        />
      </div>
    </div>
    <div class="text-block">
      <h2>{{$props.text.h2}}</h2>
      <p>
        {{$props.text.p}}
      </p>
      <div v-if="$props.button" class="my-btn">
        <ReadMoreButton
          :templateStyle="$props.button.templateStyle"
          :type="`${$props.button.type}`"
        >
          {{ $props.button.text }}
        </ReadMoreButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseImage from "./BaseImage.vue";
import ReadMoreButton from "./ReadMoreButton.vue";
export default {
  components: {
    BaseImage,
    ReadMoreButton,
  },
  props: {
    image: {
      type: Object,
      required: false,
      validator: (img) => "src" in img && "alt" in img,
    },
    componentName: {
      type: String,
    },
    showYoutubeButt: {
      type: Boolean,
      required: true,
    },
    PhotoTitle: {
      type: String,
      // required: false,
    },
    button: {
      type: Object,
      required: false,
    },
    text: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped lang="scss">
.news-company, .aug {
  background: #ffffff;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);

  .main-block {
    position: relative;
    .img {
      position: absolute;
      bottom: 0;
    }
    .title {
      position: absolute;
      top: 0;
    }
  }
  .text-block {
    max-width: 592px;
    padding-left: 62px;
    padding-top: 62px;
    padding-bottom: 48px;
    .my-btn {
      margin-left: calc(100% - 236px);
      margin-top: 48px;
    }
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 45px;
      line-height: 42px;
      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 42px;
      color: #1d3557;
      margin-top: 46px;
    }
  }
}
@media screen and (max-width: 1279px) {
  .news-company {
    background: #ffffff;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
    .main-block {
      position: relative;
      .img {
        position: absolute;
        bottom: 0;
        width: 62px;
      }
      .title {
        position: absolute;
        top: 0;
      }
    }
    .text-block {
      max-width: 592px;
      padding-left: 40px;
      padding-top: 40px;
      padding-bottom: 30px;
      .my-btn {
        margin-left: calc(100% - 236px);
        margin-top: 10px;
      }
      h2 {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 36px;
        color: #1d3557;
      }
      p {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 26px;
        line-height: 36px;
        color: #1d3557;
        margin-top: 46px;
      }
    }
  }
}
@media screen and (max-width: 1279px) {
  .news-company {
    background: #ffffff;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
    .main-block {
      position: relative;
      .img {
        position: absolute;
        bottom: 0;
      }
      .title {
        position: absolute;
        top: 0;
      }
    }
    .text-block {
      max-width: 323px;
      padding-left: 40px;
      padding-top: 40px;
      padding-bottom: 30px;
      .my-btn {
        margin-left: calc(100% - 236px);
        margin-top: 10px;
      }
      h2 {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 38px;
        color: #1d3557;
      }
      p {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 38px;
        color: #1d3557;
        margin-top: 15px;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .news-company {
    background: #ffffff;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
    .main-block {
      position: relative;
      .img {
        position: absolute;
        bottom: 0;
      }
      .title {
        position: absolute;
        top: 0;
      }
    }
    .text-block {
      max-width: 100%;
      padding-left: 40px;
      padding-right: 20px;
      padding-top: 40px;
      padding-bottom: 30px;
      .my-btn {
        margin-left: calc(100% - 236px);
        margin-top: 10px;
      }
      h2 {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 7vw;
        line-height: 8vw;
        color: #1d3557;
      }
      p {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 5vw;
        line-height: 9vw;
        color: #1d3557;
        margin-top: 15px;
      }
    }
  }
}
</style>
