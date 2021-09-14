<template>
  <div>
    <h2 :class="`${$props.colorSubtitle}`">{{ $props.subTitle }}</h2>
    <div class="line"></div>
    <p :class="`${$props.colorText}`">
      {{ $props.paragraph }}
    </p>
    <p v-if="paragraph2" :class="`${$props.colorText}`">
      {{ $props.paragraph2 }}
    </p>
    <p v-if="paragraph3" :class="`${$props.colorText}`">
      {{ $props.paragraph3 }}
    </p>
    <p v-if="showParagraphSecond" :class="`${$props.colorText}`">
      {{ $props.paragraphSecond }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      required: false,
    },
    paragraph: {
      type: String,
    },
    paragraph2: {
      type: String,
    },
    paragraph3: {
      type: String,
    },
    paragraphSecond: {
      type: String,
      required: false,
    },
    showParagraphSecond: {
      type: Boolean,
    },
    colorSubtitle: {
      type: String,
    },
    colorText: {
      type: String
    }
  },
};
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
.color1 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 57px;
  color: #ffffff;
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

.textColor{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 42px;
  color: #FFFFFF;
  width: 90%;
}


.line {
  background: #c1121f;
  width: 8.2vw;
  height: 4px;
}
</style>