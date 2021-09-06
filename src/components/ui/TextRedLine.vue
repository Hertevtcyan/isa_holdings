<template>
    <div>
        <h2>{{ $props.subTitle }}</h2>
        <div class="line"></div>
        <p>
          {{ $props.paragraph }}
        </p>
    </div>
</template>

<script>
export default {
    props:{
        subTitle: {
            type: String,
            required: true
        },
        paragraph: {
            type: String,
            required: true
        }
    }
}
</script>


<style scoped lang="scss">
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 48px;
      line-height: 57px;
      color: #1d3557;
      padding-bottom: 24px;
    }
    p {
      margin-top: 24px;
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 42px;
      padding-bottom: 24px;
      color: #1d3557;
    }
  .line {
    background: #c1121f;
    width: 157px;
    height: 4px;
  }
</style>