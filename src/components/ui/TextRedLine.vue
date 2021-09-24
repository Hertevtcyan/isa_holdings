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
    <p v-if="showParagraphSecond" :class="`${$props.colorText}`">
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
.history-first-footer {
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
      font-size: 24px;
      line-height: 28px;
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
}
</style>

