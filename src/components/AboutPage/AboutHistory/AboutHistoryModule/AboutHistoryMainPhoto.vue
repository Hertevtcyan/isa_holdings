<template>
  <div>
    <ShowPathPage :page="{path:'About Us',section:'Our History'}"/>
    <div class="about-container ">
      <div class="shadow-block flex items-center">
        <div class="container mx-auto px-4">
          <div class="who-we-ae">
            <h1>Who We Ae</h1>
            <p>
              ISA Holding consists of several companies, representing seven
              diverse sectors and offering exceptional products and services
              aimed at enriching lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowPathPage from '@/components/ui/ShowPathPage.vue'
export default {
  components: { 
    ShowPathPage
  }
};
</script>


<style scoped lang="scss">
$colorText: #ffffff;
p {
  color: $colorText;
}
.about-container {
  background-image: url("../../../../assets/about/aboutHistory/ddd.png");
  //   background: linear-gradient(278.22deg, rgba(229, 252, 255, 0) -6.14%, #000000 97.78%);
  //   mix-blend-mode: multiply;
  //   opacity: 0.55;
  width: 100%;
  height: 720px;
  background-repeat: no-repeat;

  .shadow-block {
    background: linear-gradient(
      278.22deg,
      rgba(229, 252, 255, 0) -6.14%,
      rgba(0,0,0, 0.55) 97.78%
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
