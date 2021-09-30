<template>
  <div class="about-container" :class="`about-container__${$props.img}`">
    <div class="shadow-block flex items-center">
      <div class="container mx-auto">
        <div class="who-we-ae">
          <h1 class="text-white">{{ text.title }}</h1>
          <div class="line"></div>
          <p>{{ text.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
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
          "OurCompanies",
          "companyNews",
          "media",
          "career",
        ].includes(type),
    },
  },
};
</script>


<style scoped lang="scss">
.line {
  background: #c1121f;
  width: 157px;
  height: 4px;
}

.about-container {
  width: 100%;
  height: 37.5vw;
}

.about-container__history {
  background: url("../../assets/about/aboutHistory/history.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.about-container__mission {
  background: url("../../assets/about/aboutHistory/mission.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.about-container__strategy {
  background: url("../../assets/about/aboutHistory/strategy.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.about-container__management {
  background: url("../../assets/about/aboutHistory/management.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-container__OurCompanies {
  background: url("../../assets/OurCompanies/OurCompaniesMain.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-container__companyNews {
  background: url("../../assets/news/companyNews/companyNews.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-container__media {
  background: url("../../assets/news/media/mediaMainPhoto.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-container__career {
  background: url("../../assets/career/careerMain.png");
  background-repeat: no-repeat;
  background-size: cover;
}
$colorText: #ffffff;
p {
  color: $colorText;
}
.about-container {
  .shadow-block {
    background: linear-gradient(
      278.22deg,
      rgba(229, 252, 255, 0) -6.14%,
      rgba(0, 0, 0, 0.55) 97.78%
    );

    width: 100%;
    height: 37.5vw;
  }
}

.path-history {
  border: 13px solid transparent;
  border-left: 13px solid #c1121f;
}
.who-we-ae {
  max-width: 592px;
  h1 {
    color: $colorText;
    font-size: 66px;
  }
  p {
    font-size: 28px;
    line-height: 42px;
    font-weight: 300;
  }
}
@media screen and (max-width: 1279px) {
  .about-container__mission,
  .about-container__management,
  .about-container__career,
  .about-container__media,
  .about-container__companyNews,
  .about-container__history,
  .about-container__OurCompanies  {
    h1 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 42px;
      line-height: 48px;
      color: #ffffff;
      text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 32px;
      color: #ffffff;
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    }
  }
}
@media screen and (max-width: 1024px) {
  .about-container__mission,
  .about-container__management,
  .about-container__career,
  .about-container__media,
  .about-container__companyNews,
  .about-container__history,
  .about-container__OurCompanies  {
    h1 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 38px;
      line-height: 45px;
      color: #ffffff;
      text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 38px;
      /* or 190% */

      color: #ffffff;

      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    }
  }
}
@media screen and (max-width: 767px) {
  .about-container__mission,
  .about-container__management,
  .about-container__career,
  .about-container__media,
  .about-container__companyNews,
  .about-container__history,
  .about-container__OurCompanies  {
    h1 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 38px;
      color: #ffffff;
      text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 34px;
      color: #ffffff;
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    }
  }
}
@media screen and (max-width: 451px) {
  .about-container__career,
  .about-container__media,
  .about-container__companyNews,
  .about-container__history,
  .about-container__OurCompanies  {
    h1 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 22px;
      line-height: 38px;
      color: #ffffff;
      text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
    }
  }
  .about-container__management {
    p {
      line-height: 20px;
    }
  }
}
</style>
