<template>
  <div class="flex container justify-between mx-auto">
    <div class="helping-left">
      <PhotoSubTitleParagraphButt
        componentName="news-company"
        sub-title="Helping a space business reach for the stars"
        paragraph="We’ve financed a space electronics inventor to bring satellite technology to market."
        :showButton="true"
        :showYoutubeIcon="true"
        :image="{
          src: 'news/companyNews/helpingLeft.png',
          alt: 'sdfsdfsdsdf',
        }"
      />
    </div>
    <div class="helping-rigth">
      <PhotoSubTitleParagraphButt
        componentName="news-company"
        sub-title="Helping a space business reach for the stars"
        paragraph="We’ve financed a space electronics inventor to bring satellite technology to market."
        :showButton="true"
        :showYoutubeIcon="true"
        :image="{
          src: 'news/companyNews/helpingRigth.png',
          alt: 'sdfsdfsdsdf',
        }"
      />
    </div>
  </div>
</template>

<script>
import PhotoSubTitleParagraphButt from "@/components/ui/PhotoSubTitleParagraphButt.vue";
export default {
  components: { PhotoSubTitleParagraphButt },
};
</script>

<style scoped>
.helping-left,
.helping-rigth {
  width: 716px;
}
@media screen and (max-width: 1487px) {
  .helping-left,
  .helping-rigth {
    width: 716px;
  }
}
</style>
