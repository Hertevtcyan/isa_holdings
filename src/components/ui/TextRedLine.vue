<template>
  <div :class="`${$props.componentStyle}`">
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
    <p class="p-sec" v-if="showParagraphSecond" :class="`${$props.colorText}`">
      {{ $props.paragraphSecond }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    componentStyle: {
      type: String,
    },
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
      type: String,
    },
  },
};
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
  font-size: 28px;
  line-height: 42px;
  padding-bottom: 24px;
  color: #1d3557;
}

.textColor {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 42px;
  color: #ffffff;
  width: 90%;
}
.line {
  background: #c1121f;
  width: 8.2vw;
  height: 4px;
}
.career-first-footer-h {
  font-size: 46px;
}
.mission {
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 2.5vw;
    line-height: 3vw;
    color: #ffffff;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    font-size: 1.5vw;
    line-height: 2.2vw;
    color: #ffffff;
  }
}
.media {
  margin-bottom: 62px;
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 2.5vw;
    line-height: 3vw;
    color: #ffffff;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    font-size: 1.5vw;
    line-height: 2.2vw;
    color: #ffffff;
  }
}
.showMediaBlock,
.new-corporate {
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #1d3557;
  }
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 57px;
    color: #000000;
  }
}
.career {
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
  }
}
.our-exp {
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 2vw;
    line-height: 1.5vw;
    color: #1d3557;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 1.3vw;
    line-height: 2vw;
    color: #1d3557;
  }
}
.building-first {
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 3vw;
    line-height: 2vw;
    color: #ffffff;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9vw;
    line-height: 2vw;
    color: #ffffff;
  }
}
.itAllStarted {
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 3vw;
    line-height: 2vw;
    color: #1D3557;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9vw;
    line-height: 2vw;
    color: #1D3557;
  }
}
@media screen and (max-width: 1487px) {
  p {
    margin-top: 24px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 36px;
    padding-bottom: 24px;
    color: #1d3557;
  }
  .history-first-footer {
    p {
      margin-top: 24px;
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      padding-bottom: 24px;
    }
  }
}
@media screen and (max-width: 1279px) {
  p {
    margin-top: 24px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    padding-bottom: 24px;
    color: #1d3557;
  }
  .history-first-footer {
    p {
      margin-top: 24px;
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 20px;
      padding-bottom: 24px;
    }
  }
  .Managment-tain-text {
    max-width: 500px;
  }
  .career-join-us {
    max-width: 500px;
  }
  .zayn-text {
    max-width: 410px;
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 38px;
      /* identical to box height */

      letter-spacing: 0.05em;

      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;

      color: #1d3557;
    }
  }
  .mission {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 28px;
      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 42px;
      font-size: 22px;
      line-height: 22px;
      color: #ffffff;
    }
    .p-sec {
      margin-top: 10px;
    }
  }
  .media {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 28px;
      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 42px;
      font-size: 22px;
      line-height: 22px;
      color: #ffffff;
    }
    .p-sec {
      margin-top: 10px;
    }
  }
  .career {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 41px;
      line-height: 15px;
      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 27px;
      line-height: 28px;
      color: #ffffff;
    }
    .p-sec {
      margin-top: 10px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .Managment-tain-text {
    width: 358px;
    .line {
      width: 157px;
    }
  }
  p {
    font-size: 20px;
    line-height: 28px;
  }
  .career-join-us {
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 38px;
      color: #1d3557;
    }
  }
  .zayn-text {
    .card {
      max-width: 700px;
    }

    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 38px;
      letter-spacing: 0.05em;

      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;

      color: #1d3557;
    }
  }
  .mission {
    .line {
      width: 157px;
    }
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 22px;
      line-height: 25px;

      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 18px;
      color: #ffffff;
    }
    .p-sec {
      margin-top: -10px;
    }
  }
  .media {
    .line {
      width: 157px;
      margin-top: -15px;
    }
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 22px;
      line-height: 25px;

      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 18px;
      color: #ffffff;
      margin-top: 14px;
    }
    .p-sec {
      margin-top: -10px;
    }
  }
  .career {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 3vw;
      line-height: 1vw;
      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 2vw;
      line-height: 3vw;
      color: #ffffff;
      margin-top: 14px;
    }
    .p-sec {
      margin-top: 10px;
    }
  }
  .our-exp {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 2.5vw;
      line-height: 1.5vw;
      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 2vw;
      line-height: 2vw;
      color: #1d3557;
    }
  }
  .building-first {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 3vw;
      line-height: 2vw;
      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 1.9vw;
      line-height: 2vw;
      color: #ffffff;
    }
  }
  .itAllStarted {
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 3vw;
    line-height: 2vw;
    color: #1D3557;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 1.9vw;
    line-height: 2vw;
    color: #1D3557;
        margin-top: 9px;
  }
}
}
@media screen and (max-width: 925px){
.itAllStarted {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 38px;
      color: #1D3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
     font-size: 18px;
    line-height: 20px;
      color: #1D3557;
    }
  }
}
@media screen and (max-width: 767px) {
  .Our-purpose {
    width: 100%;
    .change-size div:first-child {
      width: 100%;
    }
    .line {
      width: 157px;
    }
  }
  .Managment-tain-text {
    width: 100%;
    margin-top: 48px;
    .line {
      width: 157px;
    }
  }
  .career-join-us {
    max-width: 100%;
  }
  .zayn-text {
    max-width: 100%;
  }
  .mission {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 6vw;
      line-height: 6vw;

      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 3vw;
      line-height: 4vw;
      color: #ffffff;
    }
    .p-sec {
      margin-top: -10px;
    }
  }
  .media {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 6vw;
      line-height: 8vh;

      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 5vw;
      line-height: 6vw;
      color: #ffffff;
    }
  }
  .career {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 5.5vw;
      line-height: 3vh;

      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 4.5vw;
      line-height: 4vw;
      color: #ffffff;
    }
  }
  .our-exp {
    padding-top: 20px;
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 6vw;
      line-height: 3vh;

      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 4.5vw;
      line-height: 4vw;
      color: #1d3557;
    }
  }
  .showMediaBlock,
  .new-corporate {
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 24px;
      color: #1d3557;
    }
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 48px;
      line-height: 57px;
      color: #000000;
    }
  }
  .building-first {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 6vw;
      line-height: 9vw;
      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 5vw;
      line-height: 5vw;
      color: #ffffff;
    }
  }
  .itAllStarted {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 38px;
      color: #1D3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
     font-size: 22px;
    line-height: 26px;
      color: #1D3557;
    }
  }
  
}

@media screen and (max-width: 500px) {
  .mission {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 28px;

      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
    }
  }
  .media {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 30px;
      line-height: 40px;

      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 30px;
      color: #ffffff;
    }
  }
  .building-first {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 40px;
      color: #ffffff;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      color: #ffffff;
    }
  }
}
</style>

