<template>
  <div class="main-block">
    <div class="my-block1">
      <div class="card">
        <TextRedLine
        componentStyle="zayn-text"
          subTitle="Zayn Hussein"
          paragraph="Though my experience with ISA HOLDING is nascent, I have had the privilege of working alongside a diverse community of colleagues."
          paragraph2="I am proud to stand alongside so many great and passionate people."
        />
      </div>
    </div>
    <div class="my-block2">
      <div class="card">
        <TextRedLine
        componentStyle="zayn-text"
          subTitle="Zayn Hussein"
          paragraph="We are continually seeking dynamic and motivated individuals to join our organisation at all levels across the automotive, real estate and construction, retail, logistics, information technology, travel, and consultancy and training sectors."
        />
        <div class="my-btn">
          <ReadMoreButton type="text"> Join Now </ReadMoreButton>
        </div>
      </div>
    </div>
  </div>
</template>








<script>
import TextRedLine from "@/components/ui/TextRedLine.vue";
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";
export default {
  components: {
    TextRedLine,
    ReadMoreButton,
  },
};
</script>

<style scoped lang="scss">
.my-block1 {
  max-width: 716px;
  height: 515px;
  // margin-top: 82px;
  padding-left: 62px;
  background: #ffffff;
  box-shadow: 4px 16px 20px rgba(29, 53, 87, 0.05);
  padding-top: 56px;
  box-shadow: 4px 4px 20px rgb(29 53 87 / 8%);
}
.my-block2 {
  max-width: 716px;
  height: 587px;
  background: #ffffff;
  width: 716px;
  padding-left: 62px;
  padding-top: 92px;
  position: relative;
 
  margin-top: 56px;
  box-shadow: 4px 4px 20px rgb(29 53 87 / 8%);
}
.card {
  width: 600px;
}
.my-btn {
  position: absolute;
  right: 65px;
}
@media screen and (max-width: 1487px){
  .my-block1,
  .my-block2{
    max-width: 580px;
   
  }
  .card{
    max-width: 506px;
  }
}
@media screen and (max-width: 1279px) {
  .my-block1,
  .my-block2 {
    max-width: 500px;
    padding-left: 37px;
    background: #ffffff;
    padding-top: 46px;
     height: 423px;
  }
}
@media screen and (max-width: 1024px){
  .my-block1,
  .my-block2{
max-width: 352px;
 height: 377px;
  }
  .my-block2 {
    margin-top: 20px;
    height: 415px;
  }
  .card {
    max-width: 315px;
   
  }
.my-btn {
      right: 23px;
}
}
@media screen and (max-width: 767px){
  .my-block1,
  .my-block2{
    max-width: 100%;
    width: 100%;
  }
  .my-block1 {
    margin-top: 40px;
  }
  .my-block2 {
    margin-top: 40px;
  }
  .card{
    max-width: 100%;
  }
}
@media screen and (max-width: 330px){
.my-block2, .my-block1 {
  height: 500px;
}
}
</style>






