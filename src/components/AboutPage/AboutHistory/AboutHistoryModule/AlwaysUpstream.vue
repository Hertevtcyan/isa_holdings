<template>
  <div class="container-upstream">
    <div class="Alwys-container flex justify-center items-center">
      <p>Always Upstream</p>
    </div>
    <div class="youtube-Icon-block">
      <div class="youtube-Icon flex justify-center items-center">
        <img src="@/assets/about/aboutHistory/youtubePlay.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-upstream {
  background-image: url("../../../../assets/about/aboutHistory/Upstream.png");
      width: 646px;
    height: 1072px;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  .Alwys-container {
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 3vw;
      line-height: 70px;
      /* identical to box height */
      letter-spacing: 0.08em;
      color: #ffffff;
      text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
      margin-top: 68px;
    }
  }
  .youtube-Icon-block {
    position: absolute;
    width: 129.68px;
    height: 98.97px;
    background: #c1121f;
    z-index: 9;
    bottom: 0;
    .youtube-Icon {
      z-index: 11;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}
@media screen and (max-width: 1488px) {
  .container-upstream {
    background-size: cover;
    background-position: center;
    width: 556px;
     height: 922px
  }
}
@media screen and (max-width: 1279px) {
  .container-upstream {
    background-size: cover;
    background-position: center;
    width: 380px;
  }
}
@media screen and (max-width: 1024px) {
  .container-upstream {
     max-width: 328px;
     height: 614px;
    
    .youtube-Icon-block {
    position: absolute;
    width: 90px;
    height: 69px;
    background: #c1121f;
    z-index: 9;
    bottom: 0;
  }
  }
}
@media screen and (max-width: 767px) {
  .container-upstream {
    width: 100%;
    max-width: 100%;
    .Alwys-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      p {
        margin-top: 0;
        font-size: 8vw;
      }
    }
  }
}
</style>