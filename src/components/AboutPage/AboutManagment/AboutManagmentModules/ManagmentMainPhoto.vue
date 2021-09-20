<template>
  <div class="managment-main-photo">
    <div class="approach-risk">
      <div class="apporach">Management Approach</div>
      <div class="risk">Pass through</div>
    </div>
    <div>
             <PhotoSubTitleParagraphButt
             componentName="managment-apoarch"
                  sub-title="Helping a space business reach for the stars"
                  paragraph="We’ve financed a space electronics inventor to bring satellite technology to market."
                  :showButton="true"
                  :showPhoto="true"
                  :image="{
                    src: 'about/aboutManagment/helpingBusines.png',
                    alt: 'sdfsdfsdsdf',
                   }"
             />
    </div>
  </div>
</template>

<script>
import PhotoSubTitleParagraphButt from '@/components/ui/PhotoSubTitleParagraphButt.vue'

export default {
    components: {
      PhotoSubTitleParagraphButt
    }
}
</script>


<style scoped lang="scss">
.managment-main-photo {
  width: 716px;
  .approach-risk {
    background: #ffffff;

    box-sizing: border-box;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
    width: 411px;
    height: 170px;
    margin-left: calc(100% - 411px);
  }
  .apporach {
    background: #1d3557;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
    max-width: 409px;
    height: 85px;
    text-align: center;
    line-height: 85px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    color: #ffffff;
  }
  .risk {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    color: #1d3557;
    line-height: 85px;
    text-align: center;
  }
  .help-busines {
   
    width: 100%;
    margin-top: 82px;
   
  }
  img {
    width: 100%;
    height: 543px;
  }
  .help-busines-text-butt {
    padding-left: 62px;
    padding-top: 35px;
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 45px;
      line-height: 53px;
      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 28px;
      line-height: 42px;
      color: #1d3557;
    }
    width: 592px;
  }
}
@media screen and (max-width: 1024px){
  .approach-risk{
  
    width: 277px!important;
    height: 162px!important;
    margin-left: calc(100% - 277px)!important;
  }
}


</style>