
<template>
  <div class="my-block">
    <!-- <img  src="@/assets/career/joinUs.png" alt=""> -->
  </div>
</template>


<style scoped lang="scss">
.my-block {
  margin-top: 56px;
  background-image: url("../../../assets/career/joinUs.png");
  max-width: 794px;
  width: 60vw;
  height: 596px;
  background-size: cover;
  background-position: right;
}
@media screen and (max-width: 1487px) {
  .my-block {
    max-width: 600px;
  }
}
@media screen and (max-width: 1279px) {
  .my-block {
    max-width: 480px;
  }
}
@media screen and (max-width: 1024px){
    .my-block {
    max-width: 353px;
    height: 561px;
  }
}
@media screen and (max-width: 767px){
  .my-block{
    width: 100%;
    max-width: 100%;
  }
}
</style>
