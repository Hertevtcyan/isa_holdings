<template>
    <div class="help-busines">
      <base-image v-if="showPhoto" v-bind="$props.image" />
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
  img {
    width: 100%;
    height: 543px;
  }
  .help-busines-text-butt {
    padding-left: 62px;
    padding-top: 35px;
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 45px;
      line-height: 53px;
      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 42px;
      color: #1d3557;
    }
    width: 592px;
  }
</style>