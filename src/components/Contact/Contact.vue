<template>
  <ShowPathPage :page="{path:'Contact Us',section:'Contact', showIcon:true}"/>
  <TextRedLine
      class="container mx-auto items-center mt-20"
      subTitle="Contact Us"
  />
  <div class="container mx-auto flex">
    <router-link to="/contact/customers" class="font-semibold rounded-lg py-2 link">
      Customers
    </router-link>
    <router-link to="/contact/offices" class="font-semibold rounded-lg py-2 link ml-16">
      Offices
    </router-link>
    <router-link to="/contact/popular-questions" class="font-semibold rounded-lg py-2 link ml-16">
      Popular questions
    </router-link>
  </div>
  <hr />
  <h1>adasd</h1>
  <Questions />
  <div class="container mx-auto mt-4 flex justify-between">
    <PhotoSubTitleParagraphButt
        :showButton="true"
        sub-title="Our strategic pillars"
        paragraph="It includes targets for accelerating the shift of capital to areas, principally Asia and wealth, that have demonstrated the highest returns and where we have sustainable advantage through scale. "
        :image="{
                src: 'contact/pepoles.png',
                alt: 'sdfsdfsdsdf',
              }"
    />
    <PhotoSubTitleParagraphButt
        :showButton="true"
        sub-title="Our strategic pillars"
        paragraph="It includes targets for accelerating the shift of capital to areas, principally Asia and wealth, that have demonstrated the highest returns and where we have sustainable advantage through scale. "
        :image="{
                src: 'contact/men.png',
                alt: 'sdfsdfsdsdf',
              }"
    />
  </div>

</template>

<script>
import ShowPathPage from "../ui/ShowPathPage";
import TextRedLine from "../ui/TextRedLine";
import {ref} from "vue";
import PhotoSubTitleParagraphButt from "../ui/PhotoSubTitleParagraphButt";
import Questions from "../../view/Questions";
export default {
  components: {Questions, PhotoSubTitleParagraphButt, TextRedLine, ShowPathPage},

  setup(){
    const active = ref(true)

    return{active}
  }
}


</script>

<style scoped>
    .link{
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 22px;
      line-height: 26px;
      color: #1D3557;
      position: relative;
    }

    .link:hover:after{
      width: 100%;
      height: 3px;
      display: block;
      content:"";
      z-index: 1;
      position: absolute;
      top: 66px;
      left: 0;
      background: #C1121F;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      border-radius: 50px;
    }

    hr{
      background: #10223D;
      opacity: 0.25;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      width: 100%;
      height: 3px;
      margin-top: 24px;
    }
</style>