<template>
  <div>
    
    <CareerMainPhoto />
    <IsaHolding />
    <div class="my-container container flex mx-auto justify-between">
      <div class="text">
        <JoinUseText />
      </div>
      <div class="photo">
        <JoinUsePhoto />
      </div>
    </div>
    <div class="zayn container flex mx-auto justify-between">
      <div class="photo">
        <ZaynHusseinPhoto />
      </div>
      <div class="text">
        <ZaynHusseinText />
      </div>
    </div>
    <div class="emp-block container flex mx-auto justify-between">
      <Emploees />
    </div>
    <div class="first-footer">
      <FirstFooterCareer />
    </div>
  </div>
</template>



<script>
import CareerMainPhoto from "./CareerPageModules/CareerMainPhoto.vue";
import IsaHolding from "./CareerPageModules/IsaHolding.vue";
import JoinUsePhoto from "./CareerPageModules/JoinUsPhoto.vue";
import JoinUseText from "./CareerPageModules/JoinUsText.vue";
import ZaynHusseinPhoto from "./CareerPageModules/ZaynHusseinPhoto.vue";
import ZaynHusseinText from "./CareerPageModules/ZaynHusseinText.vue";
import Emploees from "./CareerPageModules/Emploees.vue";
import FirstFooterCareer from "./CareerPageModules/FirstFooterCareer.vue";
export default {
  components: {
    CareerMainPhoto,
    IsaHolding,
    JoinUsePhoto,
    JoinUseText,
    ZaynHusseinPhoto,
    ZaynHusseinText,
    Emploees,
    FirstFooterCareer,
  },
};
</script>


<style scoped>
.zayn {
  margin-top: 101px;
}
.emp-block {
  margin-top: 116px;
}
@media screen and (max-width: 1024px) {
  .my-container {
    margin-top: 50px;
  }
}
@media screen and (max-width: 767px) {
  .my-container {
    flex-direction: column-reverse;
  }
  .zayn {
    flex-direction: column;
  }
}
</style>



