<template>
  <div class="my-block flex container justify-between mx-auto">
    <div class="helping-left">
      <PhotoSubTitleParagraphButt
        componentName="news-company"
        :showYoutubeButt="true"
        :button="{
          text: 'Read More',
          type: 'text',
          templateStyle: 'news-company-btn',
        }"
        :text="{
          h2: 'Helping a space business reach for the stars',
          p: 'We’ve financed a space electronics inventor to bring satellite technology to market.',
        }"
        :image="{
          src: 'news/companyNews/helpingLeft.png',
          alt: 'sdfsdfsdsdf',
        }"
      />
    </div>
    <div class="helping-rigth">
      <PhotoSubTitleParagraphButt
        componentName="news-company"
        :showYoutubeButt="true"
        :button="{
          text: 'Read More',
          type: 'text',
          templateStyle: 'news-company-btn',
        }"
        :text="{
          h2: 'Helping a space business reach for the stars',
          p: 'We’ve financed a space electronics inventor to bring satellite technology to market.',
        }"
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
  width: 48.1%;
}
@media screen and (max-width: 767px) {
  .my-block {
    flex-direction: column;
  }
  .helping-left,
  .helping-rigth {
    width: 100%;
  }
  .helping-rigth {
    margin-top: 25px;
  }
}
</style>
