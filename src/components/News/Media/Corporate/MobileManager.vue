<template>
  <div class="block">
      <div class="card container flex justify-between mx-auto">
          <div class="mobile">
              <TextRedLine colorSubtitle="color1" subTitle="The mobile wealth manager"/>
          </div>
          
          <p class="find">Find out how Richard Fu is helping clients in Shanghai to achieve their financial goals.</p>
          <ReadMoreButton class="ttr" type="read">See More</ReadMoreButton>
      </div>
  </div>
</template>

<script>
import TextRedLine from '@/components/ui/TextRedLine.vue'
import ReadMoreButton from '@/components/ui/ReadMoreButton.vue'
export default {
    components: {
        TextRedLine,
        ReadMoreButton
        }
}
</script>



<style scoped>
.block {
  background-image: url("../../../../assets/news/media/mobileManager.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 163px;
  padding-top: 24px;
}
.mobile{
    max-width: 264px;
}
.find {
    font-family: Rubik;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 38px;
color: #FFFFFF;
max-width: 318px;
}
.ttr{
    font-family: Rubik!important;
font-style: normal!important;
font-weight: 500!important;
font-size: 22px!important;
line-height: 26px!important;
color: #FFFFFF!important;
}
</style>
