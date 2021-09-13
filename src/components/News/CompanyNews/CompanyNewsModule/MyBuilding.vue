<template>
  <div class="building">
    <div class="container flex mx-auto justify-end">
      <div class="bg-blue">
        <div class="bg-blue-main">
          <h3>Helping a space business reach for the stars</h3>
          <p>
            We’ve financed a space electronics inventor to bring satellite
            technology to market.
          </p>
          <ReadMoreButton
            type="transparentView"
            class="transparentView colorBtn"
            >Read More</ReadMoreButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";
export default {
  components: { ReadMoreButton },
};
</script>

<style scoped lang="scss">
.building {
  background-image: url("../../../../assets/news/companyNews/building.png");
  width: 100%;
  height: 720px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 100px;
  .bg-blue {
    width: 716px;
    height: 477px;
    margin-top: 56px;
    padding-left: 59px;
    padding-top: 71px;
    background: rgba(20, 138, 174, 0.9);
    box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.3);
    position: relative;
    box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
    margin-top: 293px;
    
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
}
</style>
