<template>
  <div class="container-upstream">
    <div class="Alwys-container flex justify-center">
      <p>Always Upstream</p>
      <div class="youtube-Icon">
        <div class="youtube-Icon flex justify-center items-center">
          <img src="@/assets/about/aboutHistory/youtubePlay.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-upstream {
  background-image: url("../../../../assets/about/aboutHistory/Upstream.png");
  width: 646px;
  background-repeat: no-repeat;
  height: 1072px;
  background-size: contain;
  position: relative;
  .Alwys-container {
    width: 100%;
    // position: relative;

    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 59px;
      line-height: 70px;
      /* identical to box height */
      letter-spacing: 0.08em;
      color: #ffffff;
      text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
      margin-top: 68px;
    }
    .youtube-Icon {
      position: absolute;
      width: 129.68px;
      height: 98.97px;
      background: #c1121f;

      //   backdrop-filter: blur(1px);
    }
  }
}
</style>