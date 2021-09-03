<template>
  <div class="flex w-4/5 bottom_line">
    <div class="bottom">
      <h1 class="ml-16 mt-16">Our responsibility is to you,<br> not our bottom line.</h1>
      <p class="ml-16 mt-6">Corporate Social Responsibility (CSR) is <br>
        integral to our efforts to serve the interests of <br>
        you and all other stakeholders. Gain insights <br>
        into our appraoch to CSR through case <br>
        studies, initiatives to resolve social issues .</p>
      <ReadMoreButton type="transparentView" class="transparentView">View More</ReadMoreButton>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import ReadMoreButton from "../ui/ReadMoreButton";
export default {
  components: {ReadMoreButton}
}
</script>

<style scoped>
  .bottom_line{
    height: 593px;
    background: #148AAE;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
  }

  .bottom{
    width: 48%;
  }

  .line{
    width: 52%;
    background: url("../../assets/icons/line.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .transparentView{
    margin-left: 52%;
    font-family: Rubik,serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 48px;
  }

  h1{
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 57px;
    color: #FFFFFF;
  }

  p{
    font-family: Rubik,serif;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: #FFFFFF;
  }
</style>