<template>
  <div :class="`corporate-container-bg__${$props.img}`">
    <!-- <div class="container flex mx-auto justify-between corporate">
      <div class="corporate-text-wrapper-my" v-if="!mySetings">
        <div class="container-wrapp">
          <h2>{{ properties.title }}</h2>
          <div class="line"></div>
          <p>
            {{ properties.text }}
          </p>
          <p v-if="properties.textTwo !== ''">
            {{ properties.textTwo }}
          </p>
          <read-more-button v-if="button" type="transparent" class="view"
            >View More</read-more-button
          >
        </div>
        <div class="explore-bl">
          <div class="exp-main-bl mx-auto">
          <TextRedLine
            colorSubtitle="career-first-footer-h"
            subTitle="EXPLORE OUR VACANCIES"
            paragraph="We are committed to enriching lives and we seek integrity, honesty, and transparency in our relationships. We strive to source the best local and international talent."
          />
          <div class="button-join">
            <ReadMoreButton
            type="read">
            Join Now
            </ReadMoreButton>
        
          </div>
          </div>
          
        </div>
      </div>
      <div
        v-else
        class="corporate-text-wrapper"
        :class="`corporate-text-wrapper__${$props.small}`"
      >
        <h2>{{ properties.title }}</h2>
        <div class="line"></div>
        <p>
          {{ properties.text }}
        </p>
        <p v-if="properties.textTwo !== ''">
          {{ properties.textTwo }}
        </p>
        <read-more-button v-if="button" type="transparent" class="view"
          >View More</read-more-button
        >
      </div>
    </div> -->

    <div class="my-block">
      <div class="my-bg-color"></div>
      <div class="my-container container mx-auto">
        <div class="main-bg-text">
          <TextRedLine
            v-if="$props.img === 'history'"
            componentStyle="history-first-footer"
            colorSubtitle="career-first-footer-h"
            subTitle="Corporate Social Responsibility"
            paragraph="
Enriching Communities program was launched in 2018, to affirm the Group’s commitment to CSR and helping local and international communities. CSR is embedded in the organization’s culture, as we continue to launch initiatives to support the UAE leadership’s vision and contribute to the economic development while improving the quality of life of our society, customers, partners, and employees"
          />
          <TextRedLine
            v-else-if="$props.img === 'mission'"
            componentStyle="history-first-footer"
            colorSubtitle="career-first-footer-h"
            :showParagraphSecond="true"
            subTitle="Our Code of Business Conduct and Ethics"
            paragraph="
The success of the firm is determined not solely by the deals we make or clients we acquire, but also by the everyday actions and behaviors of our most critical asset: our people."
           paragraphSecond="That’s why we’ve designed a Code of Conduct to empower our people to show up for the firm, our clients, and each other with integrity – and, as a result, continue to drive the business forward."
          />
          <div class="btnb">
            <ReadMoreButton type="transparentView"> Join Now </ReadMoreButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";
import TextRedLine from "@/components/ui/TextRedLine.vue";

export default {
  components: {
    ReadMoreButton,
    TextRedLine,
  },
  props: {
    properties: {
      type: Object,
    },
    img: {
      type: String,
      validator: (type) =>
        [
          "history",
          "mission",
          "strategy",
          "management",
          "media",
          "career",
        ].includes(type),
    },
    button: {
      type: Boolean,
    },
    small: {
      type: String,
    },
    mySetings: {
      type: Boolean,
    },
  },
};
</script>



<style scoped lang="scss">
.corporate-container-bg__history {
  background-image: url("../../assets/about/aboutHistory/corporateMainPhoto.png");
  width: 100%;
  height: 720px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: -5;
  .my-block {
    .my-bg-color {
      width: 1061px;
      height: 720px;
      background: #1d3557;
      opacity: 0.35;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      position: absolute;
      z-index: -3;
    }
    .my-container {
      .main-bg-text {
        width: 767px;
        padding-top: 65px;
        .btnb {
          margin-left: 69%;
          margin-top: 70px;
        }
      }
    }
  }
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
  // padding-top: 65px;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -5;
  .my-block {
    .my-bg-color {
      width: 60vw;
      height: 720px;
      background: #7c7287;
      opacity: 0.35;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      position: absolute;
      z-index: 1;
    }
    .my-container {
      z-index: 4;
      .main-bg-text {
        width: 767px;
        padding-top: 65px;
        .btnb {
          margin-left: 69%;
          margin-top: 70px;
        }
      }
    }
  }
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



@media only screen and (max-width: 1487px){

.corporate-container-bg__mission {
  .my-block {
    .my-bg-color {
      // width: 930px;
      height: 720px;
      background: #7c7287;
      opacity: 0.35;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      position: absolute;
      z-index: 1;
    }
    .my-container {
      z-index: 4;
      .main-bg-text {
        width: 600px;
        padding-top: 65px;
        .btnb {
          margin-left: 69%;
          margin-top: 70px;
        }
      }
    }
  }
}
 .corporate-container-bg__mission {
  .my-block {
    .my-bg-color {
      // width: 800px;
      height: 720px;
      background: #7c7287;
      opacity: 0.35;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      position: absolute;
      z-index: 1;
    }
    .my-container {
      z-index: 4;
      .main-bg-text {
        width: 600px;
        padding-top: 65px;
        .btnb {
          margin-left: 69%;
          margin-top: 70px;
        }
      }
    }
  }
}
}
@media only screen and (max-width: 1487px){
  .corporate-container-bg__mission {
  .my-block {
    .my-bg-color {
      // width: 800px;
      height: 720px;
      background: #7c7287;
      opacity: 0.35;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      position: absolute;
      z-index: 1;
    }
    .my-container {
      z-index: 4;
      .main-bg-text {
        width: 500px;
        padding-top: 65px;
        .btnb {
          margin-left: 69%;
          margin-top: 70px;
        }
      }
    }
  }
}
}


/* .view {
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
.corporate-text-wrapper__career {
  background-color: #840032;
  box-shadow: 4px 4px 20px #001315;
  margin-top: 50px;
  opacity: 0.5;
  width: 60%;
}
.left-block {
  width: 300px;
  height: 300px;
  border: 1px solid;
}

.corporate-text-wrapper-my {
  max-width: 592px;
}
.container-wrapp {
  max-width: 893px;
  background: #840032;
  opacity: 0.35;
  box-shadow: 4px 4px 20px #000000;
  height: 480px;
}
.corporate {
  position: relative;
}
.explore-bl {
  width: 716px;
  height: 506px;
  background: #ffffff;
  position: absolute;
  right: 0;
  top: 206px;
  filter: drop-shadow(4px 16px 25px rgba(29, 53, 87, 0.1));
}
.exp-main-bl {
  max-width: 592px;
  margin-top: 62px;
}
.button-join {
  margin-left: 60%;
} */
</style>
