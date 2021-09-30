<template>
  <div class="ddd">
    <div class="approach-risk">
      <div class="apporach">Management Approach</div>
      <div class="risk">Pass through</div>
    </div>
    <div>
      <div class="main-block">
        <img src="@/assets/about/aboutManagment/helpingBusines.png" alt="" />
        <div class="main-text">
          <div class="main-text-block">
            <h1>Helping a space business reach for the stars</h1>
            <p>
              We’ve financed a space electronics inventor to bring satellite
              technology to market.
            </p>
            <div class="butt">
              <ReadMoreButton type="text">Read More</ReadMoreButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoSubTitleParagraphButt from "@/components/ui/PhotoSubTitleParagraphButt.vue";
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";

export default {
  components: {
    PhotoSubTitleParagraphButt,
    ReadMoreButton,
  },
};
</script>


<style scoped lang="scss">
.main-block {
  max-width: 716px;
  // border: 1px solid;
  margin-top: 82px;

  .main-text {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 35px 62px;
    background: #ffffff;
    max-width: 592px;
    h1 {
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
      font-size: 28px;
      line-height: 42px;
      color: #1d3557;
      margin-top: 3px;
    }
    .butt {
      margin-left: 20px;
      margin-left: calc(100% - 236px);
    }
  }
}
.ddd {
  .approach-risk {
    background: #ffffff;
    box-sizing: border-box;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
    width: 411px;
    height: 170px;
    margin-left: calc(100% - 411px);
  }
  .apporach {
    background: #1d3557;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
    max-width: 409px;
    height: 85px;
    text-align: center;
    line-height: 85px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    color: #ffffff;
  }
  .risk {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    color: #1d3557;
    line-height: 85px;
    text-align: center;
  }
  .help-busines {
    width: 100%;
    margin-top: 82px;
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
}
@media screen and (max-width: 1487px) {
  .main-block {
    img {
      height: 400px;
    }
    .main-text {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 35px 62px;
      background: #ffffff;
      max-width: 592px;
      h1 {
        font-weight: 300;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0.05em;
        color: #1d3557;
      }
      p {
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 38px;
        color: #1d3557;
        margin-top: 3px;
      }
      .butt {
        margin-left: 20px;
        margin-left: calc(100% - 236px);
      }
    }
  }
}
@media screen and (max-width: 1279px) {
  .main-block {
    max-width: 413px;
  }
}
@media screen and (max-width: 1024px) {
  .managment-main-photo {
    width: 200px;
    max-width: 200px;
  }
  .approach-risk {
    width: 277px !important;
    height: 162px !important;
    margin-left: calc(100% - 277px) !important;
  }
  .main-block {
    max-width: 100%;
    img {
      width: 100%;
      height: 409px;
    }
    .main-text {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 35px 62px;
      background: #ffffff;
      max-width: 592px;
      .main-text-block {
        h1 {
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
          line-height: 38px;
          /* or 190% */

          color: #1d3557;
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  
  .managment-main-photo {
    width: 100%;
    flex-direction: column;
  }
  .approach-risk {
    display: none;
  }

  .main-text-block {
    h1 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 33px;

      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 28px;
      /* or 175% */

      color: #1d3557;
    }
  }
}
</style>