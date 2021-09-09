
<template>
  <div>
    <AboutValuesMainPhoto />
    <div class="we-advanced">
      <WeAdvancedBlock />
    </div>
    <div>
      <OurPurpose />
    </div>
    <ourCode/>
  </div>
</template>

<script>
import AboutValuesMainPhoto from "./AboutValuesModule/AboutValuesMainPhoto.vue";
import WeAdvancedBlock from "./AboutValuesModule/WeAdvancedBlock.vue";
import OurPurpose from "./AboutValuesModule/OurPurpose.vue";
import ourCode from "./AboutValuesModule/ourCode.vue"
export default {
  components: {
    AboutValuesMainPhoto,
    WeAdvancedBlock,
    OurPurpose,
    ourCode
  },
};
</script>
