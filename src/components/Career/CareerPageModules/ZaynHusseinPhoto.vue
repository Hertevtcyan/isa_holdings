<template>
  <div class="block">
    <!-- <img src="@/assets/career/zayn.png" alt=""> -->
  </div>
</template>


<style scoped lang="scss">
.block {
  background-image: url("../../../assets/career/zayn.png");
  max-width: 794px;
  width: 38.4vw;
  height: 1158px;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 1279px){
    .block{
        height: 902px;
    }
}
@media screen and (max-width: 1024px){
    .block{
        height: 810px;
        width: 331;
    }
}
@media screen and (max-width: 767px){
.block {
  width: 100%;
  max-width: 100%;
     height: 753px;
  
}
}

</style>