<template>
    <div>
        <h2>{{ $props.subTitle }}</h2>
        <div class="line"></div>
        <p>
          {{ $props.paragraph }}
        </p>
        <p v-if="showParagraphSecond">
          {{ $props.paragraphSecond }}
        </p>
    </div>
</template>

<script>
export default {
    props:{
        subTitle: {
            type: String,
            required: false
        },
        paragraph: {
            type: String,
            required: true
        },
        paragraphSecond: {
            type: String,
            required: false,
        },
        showParagraphSecond: {
          type: Boolean,
        }
    }
}
</script>


<style scoped lang="scss">
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 2.5vw;
      line-height: 57px;
      color: #1d3557;
      padding-bottom: 24px;
    }
    p {
      margin-top: 24px;
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 1.5vw;
    line-height: 1.6;
     
      padding-bottom: 24px;
      color: #1d3557;
    }
  .line {
    background: #c1121f;
    width: 8.2vw;
    height: 4px;
  }
</style>