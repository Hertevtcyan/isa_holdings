<template>
  <div :class="`corporate-container-bg__${$props.img}`">
    <div class="my-block">
      <div class="my-bg-color"></div>
      <div class="my-container container mx-auto flex justify-between">
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
            componentStyle="mission"
            colorSubtitle="career-first-footer-h"
            :showParagraphSecond="true"
            subTitle="Our Code of Business Conduct and Ethics"
            paragraph="
The success of the firm is determined not solely by the deals we make or clients we acquire, but also by the everyday actions and behaviors of our most critical asset: our people."
            paragraphSecond="That’s why we’ve designed a Code of Conduct to empower our people to show up for the firm, our clients, and each other with integrity – and, as a result, continue to drive the business forward."
          />
          <TextRedLine
            v-else-if="$props.img === 'media'"
            componentStyle="media"
            colorSubtitle="career-first-footer-h"
            :showParagraphSecond="true"
            subTitle="Management Approach"
            paragraph="The success of the firm is determined not solely by the deals we make or clients we acquire, but also by the everyday actions and behaviors of our most critical asset: our people."
          />
          <TextRedLine
            v-else-if="$props.img === 'career'"
            componentStyle="career"
            colorSubtitle="career-first-footer-h"
            :showParagraphSecond="true"
            subTitle="Management Approach"
            paragraph="The success of the firm is determined not solely by the deals we make or clients we acquire, but also by the everyday actions and behaviors of our most critical asset: our people."
          />
          <div class="btnb">
            <ReadMoreButton
              v-if="$props.img === 'history'"
              templateStyle="history-vision"
              type="transparentView"
            >
              Join Now
            </ReadMoreButton>
            <ReadMoreButton
              v-else-if="$props.img === 'media'"
              templateStyle="media"
              type="transparentView"
            >
              Join Now
            </ReadMoreButton>
            <ReadMoreButton
              v-else-if="$props.img === 'mission'"
              templateStyle="mission"
              type="transparentView"
            >
              Join Now
            </ReadMoreButton>
          </div>
        </div>
        <div v-if="$props.exploreBlock" class="explore-our">
          <TextRedLine
            componentStyle="our-exp"
            colorSubtitle="career-first-footer-h"
            :showParagraphSecond="false"
            subTitle="Management Approach"
            paragraph="The success of the firm is determined not solely by the deals we make or clients we acquire, but also by the everyday actions and behaviors of our most critical asset: our people."
          />
          <div class="btt">
            <ReadMoreButton templateStyle="managment-btn" type="read">
              Join Now
            </ReadMoreButton>
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
    exploreBlock: {
      type: Boolean,
    },
  },
};
</script>



<style scoped lang="scss">
.corporate-container-bg__history {
  background-image: url("../../assets/about/aboutHistory/corporateMainPhoto.png");
  width: 100%;
  height: 37.2vw;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  z-index: -5;
  .my-block {
    .my-bg-color {
      width: 60vw;
      height: 37.2vw;
      background: #1d3557;
      opacity: 0.35;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      position: absolute;
      z-index: 1;
    }
    .my-container {
      .main-bg-text {
        width: 767px;
        margin-top: 65px;
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

  background-size: cover;
  background-repeat: no-repeat;
}
.corporate-container-bg__mission {
  background-image: url("../../assets/about/aboutValues/ourCode.png");
  width: 100%;
  height: 37.2vw;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -5;
  .my-block {
    .my-bg-color {
      width: 60vw;
      height: 37.2vw;
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

        .btnb {
          margin-left: 69%;
          margin-top: 40px;
        }
      }
    }
  }
}
.corporate-container-bg__media {
  background-image: url("../../assets/news/media/firstFooterPhone.png");
  width: 100%;
  height: 37.2vw;
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 182px;
  position: relative;
  .my-block {
    .my-bg-color {
      width: 60vw;
      height: 25vw;
      background: #840032;
      opacity: 0.35;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      position: absolute;
      z-index: 1;
      top: 118px;
    }
    .my-container {
      z-index: 4;
      .main-bg-text {
        width: 767px;
        .btnb {
          margin-left: 69%;
          margin-top: -95px;
        }
      }
    }
  }
}
.corporate-container-bg__career {
  background-image: url("../../assets/career/firstFooter.png");
  width: 100%;
  height: 37.2vw;
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 182px;
  position: relative;
  .my-block {
    .my-bg-color {
      width: 48vw;
      height: 25vw;
      background: #840032;
      opacity: 0.35;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      position: absolute;
      z-index: 1;
      top: 118px;
    }
    .my-container {
      z-index: 4;
      .main-bg-text {
        max-width: 592px;
        .btnb {
          margin-left: 69%;
          margin-top: -95px;
        }
      }
    }
  }
}

.explore-our {
  width: 36vw;
  height: 29vw;
  background: #ffffff;
  box-shadow: 4px 16px 20px rgba(29, 53, 87, 0.05);
  padding: 30px 62px;
  margin-top: 20px;
}
.btt {
  margin-left: calc(100% - 256px);
}
@media screen and (max-width: 1487px) {
  .corporate-container-bg__mission {
    .my-block {
      .my-bg-color {
        height: 37.2vw;
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
          padding-top: 30px;
          .btnb {
            margin-left: calc(100% - 234px);
            margin-top: 10px;
          }
        }
      }
    }
  }
  .corporate-container-bg__career {
    width: 100%;
    height: 37.2vw;
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 160px;
    position: relative;
    .my-block {
      .my-bg-color {
        width: 48vw;
        height: 25vw;
        background: #840032;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
        top: 118px;
      }
      .my-container {
        z-index: 4;
        .main-bg-text {
          max-width: 592px;
        }
      }
    }
  }
  .explore-our {
    margin-top: -6px;
    .btt {
      margin-left: calc(100% - 140px);
    }
  }
  .corporate-container-bg__history {
    .my-block {
      .my-bg-color {
        width: 60vw;
        height: 37.2vw;
        background: #1d3557;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
      }
      .my-container {
        .main-bg-text {
          width: 767px;
          margin-top: 65px;
          .btnb {
            margin-left: 69%;
            margin-top: 70px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1279px) {
  .corporate-container-bg__media {
    padding-top: 80px;
    .my-block {
      .my-bg-color {
        width: 60vw;
        height: 25vw;
        background: #840032;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
        top: 80px;
      }
      .my-container {
        z-index: 4;
        .main-bg-text {
          width: 600px;
          padding-top: 30px;
          .btnb {
            margin-left: calc(100% - 180px);
            margin-top: -93px;
          }
        }
      }
    }
  }
  .corporate-container-bg__career {
    width: 100%;
    height: 37.2vw;
    background-size: contain;
    background-repeat: no-repeat;
    padding-top: 160px;
    position: relative;
    .my-block {
      .my-bg-color {
        width: 48vw;
        height: 25vw;
        background: #840032;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
        top: 118px;
      }
      .my-container {
        z-index: 4;
        .main-bg-text {
          max-width: 477px;
        }
      }
    }
  }
  .corporate-container-bg__history {
    .my-block {
      .my-bg-color {
        width: 60vw;
        height: 37.2vw;
        background: #1d3557;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
      }
      .my-container {
        z-index: 4;
        .main-bg-text {
          width: 600px;
          padding-top: 30px;
          .btnb {
            margin-left: calc(100% - 180px);
            margin-top: -10px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .corporate-container-bg__mission {
    .my-block {
      .my-bg-color {
        height: 37.2vw;
        background: #7c7287;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
      }
      .my-container {
        z-index: 4;
        .main-bg-text {
          width: 450px;
          padding-top: 5px;
          .btnb {
            margin-left: calc(100% - 140px);
            margin-top: 0;
          }
        }
      }
    }
  }
  .corporate-container-bg__media {
    padding-top: 80px;
    .my-block {
      .my-bg-color {
        width: 60vw;
        height: 25vw;
        background: #840032;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
        top: 80px;
      }
      .my-container {
        z-index: 4;
        .main-bg-text {
          width: 480px;
          padding-top: 30px;
          .btnb {
            margin-left: calc(100% - 180px);
            margin-top: -90px;
          }
        }
      }
    }
  }
  .corporate-container-bg__career {
    padding-top: 45px;
    .my-block {
      .my-bg-color {
        width: 50vw;
        height: 25vw;
        background: #840032;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
        top: 45px;
      }
      .my-container {
        z-index: 4;
        .main-bg-text {
          max-width: 355px;
          padding-top: 15px;
        }
      }
    }
  }
  .explore-our {
    padding: 10px 15px;
    margin-top: 65px;
  }
  .corporate-container-bg__history {
    .my-block {
      .my-bg-color {
        width: 60vw;
        height: 37.2vw;
        background: #1d3557;
        opacity: 0.35;
        box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
        position: absolute;
        z-index: 1;
      }
      .my-container {
        .main-bg-text {
          max-width: 355px;
          margin-top: 10px;
          // padding-top: 15px;
          .btnb {
            margin-left: calc(100% - 140px);
            margin-top: -10px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .corporate-container-bg__mission {
    width: 100%;
    height: 500px;
    background-size: cover;
  }
  .corporate-container-bg__media,
  .corporate-container-bg__career {
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
  }
  .corporate-container-bg__mission {
    padding-left: 3vw;
    padding-top: 20px;
    .my-block {
      .my-bg-color {
        width: 94%;
        height: 460px;
      }
      .my-container {
        .main-bg-text {
          width: 84vw;
          padding-left: 20px;
          .btnb {
            left: 100px;
          }
        }
      }
    }
  }
  .corporate-container-bg__media {
    padding-left: 4vw;
    padding-top: 0;
    .my-block {
      .my-bg-color {
        width: 92%;
        height: 461px;
        margin-top: -60px;
      }
      .my-container {
        .main-bg-text {
          width: 84vw;
          padding-left: 20px;
          .btnb {
            left: 100px;
          }
        }
      }
    }
  }
  .corporate-container-bg__career {
    padding-left: 2.5vw;
    background-size: cover;
    padding-top: 0;
    .my-block {
      .my-bg-color {
        width: 94%;
        height: 241px;
        margin-top: -39px;
      }
      .my-container {
        flex-direction: column;
        .main-bg-text {
          max-width: 89vw;
          padding-left: 5vw;
          .btnb {
            left: 100px;
          }
        }
      }
    }
  }

  .corporate-container-bg__history {
    padding-left: 4vw;
    padding-top: 25px;
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
    .my-block {
      .my-bg-color {
        width: 92%;
        height: 461px;
        margin-top: -5px;
      }
      .my-container {
        width: 84vw;
        max-width: 84vw;
        .main-bg-text {
          width: 84vw;
          max-width: 84vw;
          padding-left: 0;
          margin-top: -24px;
          .btnb {
            left: 100px;
          }
        }
      }
    }
  }

  .explore-our {
    background: #ffffff;
    box-shadow: 4px 16px 20px rgba(29, 53, 87, 0.05);
    padding: 10px 15px;
    margin-top: 65px;
    width: 94%;
    position: absolute;
    bottom: -65px;
    right: 3.5vw;
    height: 277px;
  }
}
</style>
