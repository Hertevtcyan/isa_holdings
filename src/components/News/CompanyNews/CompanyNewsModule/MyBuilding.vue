<template>
  <div class="building">
    <div class="build-cont container flex mx-auto justify-end">
      <div class="bg-blue">
        <div class="bg-blue-main">
          <TextRedLine
            componentStyle="building-first"
            sub-title="Focuse on Stregth"
            paragraph="Our seasoned team of specialists is dedicated to helping our clients — both issuers and investors — achieve the best possible results in all market conditions and find stability for their future growth."
          />
          <ReadMoreButton
            templateStyle="building-first"
            type="transparentView"
            class="transparentView colorBtn"
            >Read More</ReadMoreButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";
import TextRedLine from "@/components/ui/TextRedLine.vue";
export default {
  components: { ReadMoreButton, TextRedLine },
};
</script>

<style scoped lang="scss">
.building {
  background-image: url("../../../../assets/news/companyNews/building.png");
  width: 100%;
  height: 38vw;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 100px;
  .bg-blue {
    width: 38vw;
    height: 30vw;

    margin-top: 56px;
    padding-left: 59px;
    padding-top: 71px;
    background: rgba(20, 138, 174, 0.9);
    box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.3);
    position: relative;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
    margin-top: 195px;

    .bg-blue-main {
      max-width: 594px;
      .colorBtn {
        color: #fff;
        position: absolute;
        right: 27px;
        bottom: 4vw;
      }
    }
  }
}
@media screen and (max-width: 1488px) {
  .building {
    .bg-blue {
      width: 38vw;
      height: 30vw;
      margin-top: 56px;
      padding-left: 35px;
      padding-top: 35px;
      background: rgba(20, 138, 174, 0.9);
      box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.3);
      position: relative;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
      margin-top: 148px;
      .bg-blue-main {
        max-width: 594px;
        .colorBtn {
          color: #fff;
          position: absolute;
          right: 27px;
          bottom: 4vw;
        }
      }
    }
  }
}
@media screen and (max-width: 1279px) {
  .building {
    .bg-blue {
      width: 38vw;
      height: 30vw;
      margin-top: 56px;
      padding-left: 35px;
      padding-top: 35px;
      background: rgba(20, 138, 174, 0.9);
      box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.3);
      position: relative;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
      margin-top: 128px;
      .bg-blue-main {
        max-width: 594px;
        .colorBtn {
          color: #fff;
          position: absolute;
          right: 27px;
          bottom: 4vw;
        }
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .building {
    .bg-blue {
      width: 36vw;
      height: 39.3vw;
      margin-top: 56px;
      padding-left: 35px;
      padding-top: 35px;
      background: rgba(20, 138, 174, 0.9);
      box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.3);
      position: relative;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
      margin-top: 21px;
      .bg-blue-main {
        max-width: 31vw;
        .colorBtn {
          color: #fff;
          position: absolute;
          right: 27px;
          bottom: 4vw;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .building {
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 0;
    .bg-blue {
      width: 100%;
      height: 470px;
      margin-top: 56px;
      padding-left: 35px;
      padding-right: 15px;
      padding-top: 35px;
      background: rgba(20, 138, 174, 0.9);
      mix-blend-mode: multiply;
      box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.3);
      position: relative;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
      margin-top: 14px;
      .bg-blue-main {
        max-width: 594px;
        .colorBtn {
          color: #fff;
          position: absolute;
          right: 27px;
          bottom: 4vw;
        }
      }
    }
  }
  
}
</style>
