<template>
  <div class="container-bg">
    <div class="towards-container container flex mx-auto">
      <div class="toward-photo">
        <img src="@/assets/about/aboutHistory/towards.png" alt="" />
      </div>
      <div class="towards-text">
        <h2>Towards success – Philosophy of "we build"</h2>
        <div class="line"></div>
        <div class="p-span-color">
          <p>With passion, <span class="p-color">"we build"</span></p>
          <p>With integrity, <span class="p-color">"we build"</span></p>
          <p>With commitment, <span class="p-color">"we build"</span></p>
          <p>By adding value, <span class="p-color">"we build"</span></p>
          <p>
            By never being satisfied, <span class="p-color">"we build"</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-bg {
  background: #e5e5e5;
  padding-bottom: 136px;
}
.towards-text {
padding-left: 70px;
  max-width: 626px;
  height: 400px;
  margin-top: 82px;
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 57px;
    color: #1d3557;
    padding-bottom: 24px;
  }
  .line {
    width: 157px;
    height: 4px;
    background: #c1121f;
  }
  .p-span-color {
      margin-top: 24px;
      p{
          line-height: 75px;
          font-size: 28px;
          color: #1D3557;
          font-family: Rubik;
font-style: normal;
font-weight: 300;
      }
  }
}
.p-color {
  color: #c1121f;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
}
</style>