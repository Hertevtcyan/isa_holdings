<template>
  <div class="main-block">
    <div class="my-block1">
      <div class="card">
        <TextRedLine
          subTitle="Zayn Hussein"
          paragraph="Though my experience with ISA HOLDING is nascent, I have had the privilege of working alongside a diverse community of colleagues."
          paragraph2="I am proud to stand alongside so many great and passionate people."
        />
      </div>
    </div>
    <div class="my-block2">
      <div class="card">
        <TextRedLine
          subTitle="Zayn Hussein"
          paragraph="We are continually seeking dynamic and motivated individuals to join our organisation at all levels across the automotive, real estate and construction, retail, logistics, information technology, travel, and consultancy and training sectors."
          
        />
        <div class="my-btn">
            <ReadMoreButton
            type="text">
            Join Now
            </ReadMoreButton
          >
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
    ReadMoreButton
  },
};
</script>

<style scoped lang="scss">
.main-block {
    margin-top: 56px;
}
.my-block1 {
  width: 716px;
  height: 515px;
  margin-top: 82px;
  padding-left: 62px;
  background: #ffffff;
  box-shadow: 4px 16px 20px rgba(29, 53, 87, 0.05);
  
}
.my-block2 {
  width: 716px;
  height: 587px;
  background: #ffffff;
  width: 716px;
  padding-left: 62px;
  padding-top: 92px;
  position: relative;
}
.card {
    width: 592px;
  }
  .my-btn {
      position: absolute;
      right: 65px;
  }
</style>






