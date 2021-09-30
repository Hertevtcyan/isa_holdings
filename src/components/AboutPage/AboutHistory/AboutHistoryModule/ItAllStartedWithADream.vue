<template>
  <div class="with-dream">
    <TextRedLine
     componentStyle="itAllStarted"
      subTitle="It all started with a dream"
       paragraph="Corporate Social Responsibility (CSR) is integral to our efforts to serve the interests of you and all other stakeholders. Gain insights into our appraoch to CSR through case studies, initiatives to resolve social issues .Corporate Social Responsibility (CSR) is integral to our efforts to serve the interests of you and all other stakeholders. Gain insights into our appraoch to CSR through case studies, initiatives to resolve social issues ." 
       paragraphSecond="Corporate Social Responsibility (CSR) is integral to our efforts to serve the interests of you and all other stakeholders. Gain insights into our appraoch to CSR through case studies, initiatives to resolve social issues .Corporate Social Responsibility (CSR) is integral to our efforts to serve the interests of you and all other stakeholders. "
       :showParagraphSecond="true"
       />
  </div>
</template>





<script>
import TextRedLine from "@/components/ui/TextRedLine.vue"
export default{
components: {
  TextRedLine
}
}
</script>



<style scoped lang="scss">
.with-dream {
  max-width: 767px;
  // height: 400px;
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 57px;
  }
  p {
    margin-top: 52px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
  }
}
@media screen and (max-width: 1279px){
  .with-dream {
    max-width: 574px;
  }
}
@media screen and (max-width: 1024px){
  .with-dream {
        max-width: 409px;
        
  }
  
}
</style>