<template>
  <div class="corporate-container-bg">
  
      <div class="container mx-auto px-4 corporate">
        <div class="corporate-text-wrapper">
          <h2>Corporate Social Responsibility</h2>
          <div class="line"></div>
          <p>
            Enriching Communities program was launched in 2018, to affirm the
            Group’s commitment to CSR and helping local and international
            communities. CSR is embedded in the organization’s culture, as we
            continue to launch initiatives to support the UAE leadership’s
            vision and contribute to the economic development while improving
            the quality of life of our society, customers, partners, and
            employees
          </p>
          <!-- <button class="view">View More</button> -->
          <read-more-button type="transparentView"  class="view">View More</read-more-button>
        </div>
      </div>
    
  </div>
</template>

<script>
import ReadMoreButton from "../../../ui/ReadMoreButton.vue"

export default{
  components:{
ReadMoreButton
  }
}
</script>



<style scoped lang="scss">
.corporate-container-bg {
  background-image: url("../../../../assets/about/aboutHistory/corporateMainPhoto.png");
  width: 100%;
  height: 100vh;
  padding-top: 65px;
}

.corporate-text-wrapper {
    max-width: 767px;
    position: relative;
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 57px;
    color: #ffffff;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: #ffffff;
    margin-top: 24px;
  }
  .line {
    background: #c1121f;
    width: 157px;
    height: 4px;
    margin-top: 24px;
  }
  .view {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    backdrop-filter: blur(1px);
    width: 184px;
    height: 73px;
    color: #ffffff;
    position: absolute;
    right: 0;
    margin-top: 69px;
    cursor: pointer;
  }
}
</style>
