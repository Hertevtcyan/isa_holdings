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
    text:{
      type: Object
    },
    img:{
      type: String,
      validator: (type)=>
          [
            'history',
            'mission',
            'strategy',
            'management',
            'OurCompanies',
            'companyNews',
            'media',
            'career'
          ].includes(type),
    }
    }
  }
</script>


<style scoped lang="scss">

.line{
  background: #c1121f;
  width: 157px;
  height: 4px;
}

.about-container{
  width: 100%;
  height: 720px;
}

.about-container__history{
  background: url("../../assets/about/aboutHistory/history.png");
  background-repeat: no-repeat;
  background-size: contain;
}

.about-container__mission{
  background: url("../../assets/about/aboutHistory/mission.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.about-container__strategy{
  background: url("../../assets/about/aboutHistory/strategy.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.about-container__management{
  background: url("../../assets/about/aboutHistory/management.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-container__OurCompanies{
  background: url("../../assets/OurCompanies/OurCompaniesMain.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-container__companyNews{
  background: url("../../assets/news/companyNews/companyNews.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-container__media{
  background: url("../../assets/news/media/mediaMainPhoto.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-container__career{
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
        rgba(0,0,0, 0.55) 97.78%,
    );

// mix-blend-mode: multiply;
// opacity: 0.55;
  width: 100%;
  height: 720px;
}
}
// .blue-history {
   //   background: #10223d;
   //   width: 100%;
   //   height: 41px;

//   p {
     //     font-family: Rubik;
     //     font-size: 18px;
     //     color: $colorText;
     //     margin-right: 11px;
     //   }
//   img {
     //     padding-right: 11px;
     //     //   widows: 13px;
     //     //   height: 13px;
     //   }
// }
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



</style>
