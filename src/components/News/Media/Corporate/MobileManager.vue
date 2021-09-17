<template>
  <div class="block">
    <div class="card container flex justify-between mx-auto">
      <div class="mobile">
        <h3>The mobile wealth manager</h3>
        <div class="line"></div>
      </div>

      <p class="find">
        Find out how Richard Fu is helping clients in Shanghai to achieve their
        financial goals.
      </p>
      <div class="butt">
 <ReadMoreButton class="ttr" type="read">See More</ReadMoreButton>
      </div>
     
    </div>
  </div>
</template>

<script>
import TextRedLine from "@/components/ui/TextRedLine.vue";
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";
export default {
  components: {
    TextRedLine,
    ReadMoreButton,
  },
};
</script>



<style scoped lang="scss">
.block {
  background-image: url("../../../../assets/news/media/mobileManager.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 305px;
  padding-top: 67px;
  margin-top: 105px;
}
.mobile {
  max-width: 394px;
  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 57px;

    color: #ffffff;
  }
}
.find {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
  max-width: 466px;
}
.ttr {
  font-family: Rubik !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 22px !important;
  line-height: 26px !important;
  color: #ffffff !important;
}
.line {
  width: 157px;
  height: 4px;
  margin-top: 24px;
  background: #c1121f;
}
@media only screen and (max-width: 1487px) {
  .block {
    padding-top: 40px;
  }
  .mobile {
    h3 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 40px;
    }
  }
  .find {
    line-height: 33px;
    font-size: 20px;
  }
}
@media only screen and (max-width: 1279px) {
  .find {
    line-height: 33px;
    max-width: 400px;
  }
  .mobile {
    max-width: 320px;
  }
}

@media only screen and (max-width: 1024px) {
  .block {
    padding-top: 20px;
  }
  .mobile {
    h3 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 30px;
      line-height: 25px;
    }
  }
  .find {
    line-height: 33px;
    max-width: 318px;
  }
}
@media only screen and (max-width: 767px) {
  .block {
    background-image: url("../../../../assets/news/media/mobileSize.png");
    background-repeat: no-repeat;

    background-size: contain;
    width: 100%;
    height: 700px;
    padding-top: 67px;
    margin-top: 50px
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mobile {
    h3 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      color: #ffffff;
    }
  }
  .find {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 38px;
    /* or 211% */

    text-align: center;
  }
  .butt {
      margin-top: 50px;
  }
}
@media only screen and (max-width: 480px) {
    .butt {
      margin-top: 20px;
  }
  h3 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 26px;
      line-height: 30px;
      text-align: center;
      color: #ffffff;
    }
    .find {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
 
  
}

</style>
