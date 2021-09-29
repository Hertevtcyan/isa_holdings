<template>
  <div class="ttyy">
    <div class="container flex justify-between mx-auto">
      <div class="notebook">
        <img src="@/assets/news/companyNews/noteBook.png" alt="" />
      </div>

      <div class="bg-blue">
        <div class="bg-blue-main">
          <h3>Helping a space business reach for the stars</h3>
          <p>
            We’ve financed a space electronics inventor to bring satellite
            technology to market.
          </p>
          <ReadMoreButton type="text" class="transparentView colorBtn"
            >Read More</ReadMoreButton
          >
        </div>
      </div>
    </div>

    <div class="my-car-animal-cont container flex justify-between mx-auto">
      <div class="animal">
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
          src: 'news/companyNews/animal.png',
          alt: 'sdfsdfsdsdf',
        }"
      />
      </div>
      <div class="lambo">
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
          src: 'news/companyNews/lamboo.png',
          alt: 'sdfsdfsdsdf',
        }"
      />
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
.animal, .lambo {
  width: 48.1%;
}
.ttyy {
  padding-bottom: 62px;
}
.bg-blue {
  width: 716px;
  height: 477px;
  margin-top: 56px;
  padding-left: 59px;
  padding-top: 71px;
  background: #148aae;
  position: relative;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);

  .bg-blue-main {
    max-width: 594px;
    h3 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 45px;
      line-height: 53px;
      color: #ffffff;
      padding-bottom: 27px;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 42px;
      color: #ffffff;
    }
    .colorBtn {
      color: #fff;
      position: absolute;
      right: 27px;
      bottom: 67px;
    }
  }
}
.notebook {
  margin-top: 56px;
}
@media screen and (max-width: 767px) {
  .my-car-animal-cont {
    flex-direction: column;
  }
  .animal, .lambo {
    width: 100%;
  }
  .lambo {
    margin-top: 25px;
  }
}
</style>