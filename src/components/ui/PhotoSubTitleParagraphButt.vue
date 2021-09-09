<template>
    <div class="help-busines">
      <div class="img_div">
        <base-image v-if="showPhoto" v-bind="$props.image" />
        <img v-if="showIcon" class="video_img" src="../../assets/icons/youtube.svg" />
        <h1 v-if="showImgText">{{$props.image_text}}</h1>
      </div>
      <div class="help-busines-text-butt">
        <h2>{{$props.subTitle}}</h2>
        <p>{{$props.paragraph}}</p>
         <read-more-button type="text" v-if="$props.showButton"  class="view">View More</read-more-button>
      </div>
    </div>
</template>

<script>
import ReadMoreButton from '@/components/ui/ReadMoreButton.vue'
import BaseImage from './BaseImage.vue'
export default {
    components: {
      ReadMoreButton,
      BaseImage
    },
    props: {
        subTitle: {
            type: String,
            required: true
        },
        paragraph: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: true,
            validator: (img) => 'src' in img && 'alt' in img
        },
        showButton: {
          type: Boolean,
          required: true
        },
        showPhoto: {
          type: Boolean,
          required: true
        },
        showIcon: {
          type: Boolean,
          required: true
        },
        showImgText: {
          type: Boolean,
          required: true
        },
        image_text: {
          type: String,
          required: true
        }
    }
}
</script>




<style scoped lang="scss">
 .help-busines {
    border: 2px solid;
    width: 716px;
    margin-top: 82px;
    height: 871px;
  }

 .img_div{
   position: relative;
   height: 543px;
 }

 .img_div h1{
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
   color: #FFFFFF;
   text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
 }

 .video_img{
   position: absolute;
   bottom: 0;
   width: 130px;
   height: 99px;
 }

  img {
    width: 100%;
    position: absolute;
    height: 543px;
  }

  .help-busines-text-butt {
    padding-left: 62px;
    padding-top: 35px;
    height: 339px;
    position: relative;
    width: 85%;
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 45px;
      line-height: 53px;
      color: #1d3557;
    }
    .view{
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
    }

  }
</style>