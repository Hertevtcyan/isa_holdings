<template>
  <div class="flex items-center">
    <div class="container mx-auto my-container flex items-center">
      <p>
        We advance sustainable economic growth and financial opportunity. Our
        purpose comes to life through our four core values: Client Service,
        Excellence, Integrity, and Partnership.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-container {
  // height: 188px;
  background: #148aae;
  box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.2);
  margin-top: -120px;
  padding-left: 215px;
  padding-right: 215px;
  padding-top: 32px;
  padding-bottom: 32px;

  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
    // padding-left: 215px;
    // padding-right: 215px;
    // padding-top: 31px;
  }
}
@media screen and (max-width: 1487px) {
  .my-container {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 27px;
    padding-bottom: 27px;
        margin-bottom: -70px;
    p{
      font-size: 24px;
      line-height: 30px;
    }
  }
}

@media screen and (max-width: 1274px) {
  .my-container {
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 27px;
    padding-bottom: 27px;
        margin-bottom: -70px;
    p{
      font-size: 24px;
      line-height: 30px;
    }
  }
}
</style>

