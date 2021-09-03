<template>
  <div class="w-full h-96 mobile">
    <div class="w-2/6 relative">
      <h1>The mobile wealth <br> manager</h1>
    </div>
    <div class="w-2/6 relative">
      <p>Find out how Richard Fu is helping clients in</p>
      <span>Shanghai to achieve their financial goals.</span>
    </div>
    <div class="w-2/6 relative">
      <ReadMoreButton type="view" class="mobile_btn absolute">View More</ReadMoreButton>
    </div>
  </div>
</template>

<script>
import ReadMoreButton from "../ui/ReadMoreButton";
export default {
  components: {ReadMoreButton}
}
</script>

<style scoped>
.mobile{
  height: 305px;
  background: #FFFFFF;
  position: relative;
  box-shadow: 4px 4px 20px 4px rgba(29, 53, 87, 0.08);
  display: flex;
  justify-content: space-around;
}


h1{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 57px;
  color: #1D3557;
  margin-top: 100px;
  margin-left: 215px;
}

p{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 38px;
  color: #1D3557;
  margin-left: 100px;
  margin-top: 100px;
}

span{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 38px;
  color: #1D3557;
  margin-left: 100px;
  margin-top: 100px;
}

.mobile_btn{
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>


