<template>
  <div class="my-block">
    <TextRedLine
    componentStyle="career-join-us"
     subTitle="Join us"
     paragraph="We seek individuals with a passion for innovation and an insatiable quest for quality; people who see opportunity in every challenge and inspiration in every achievement."
     paragraph2="It’s not just about believing in a cause, but also about living it. At AWR, we are driven by our commitment to contribute constructively to the lives of customers, partners, stakeholders, and employees through our products and customer-centric services."
      />
  </div>
</template>

<script>
import TextRedLine from "@/components/ui/TextRedLine.vue";
export default {
  components: {
    TextRedLine,
  },
};
</script>

<style scoped>
.my-block {
    max-width: 592.4px;
    margin-top: 82px;
}
@media screen and (max-width: 1024px){
  .my-block {
    max-width: 409px;
  }
}
@media screen and (max-width: 767px){
  .my-block {
    width: 100%;
    max-width: 100%;
  }
}
</style>






