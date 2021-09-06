<template>
  <div class="managment-main-photo">
    <div class="approach-risk">
      <div class="apporach">Management Approach</div>
      <div class="risk">Pass through</div>
    </div>

    <div class="help-busines">
      <img src="@/assets/about/aboutManagment/helpingBusines.png" alt="" />
      <div class="help-busines-text-butt">
        <h2>Helping a space business reach for the stars</h2>
        <p>
          We’ve financed a space electronics inventor to bring satellite
          technology to market.
        </p>
         <read-more-button type="text"  class="view">View More</read-more-button>
      </div>
    </div>
  </div>
</template>

<script>
import ReadMoreButton from '@/components/ui/ReadMoreButton.vue'
export default {
    components: {
      ReadMoreButton
    }
}
</script>


<style scoped lang="scss">
.managment-main-photo {
  .approach-risk {
    background: #ffffff;
    border: 1px solid #1d3557;
    box-sizing: border-box;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
    width: 411px;
    height: 170px;
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
    border: 2px solid;
    width: 716px;
    margin-top: 82px;
    height: 871px;
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
</style>