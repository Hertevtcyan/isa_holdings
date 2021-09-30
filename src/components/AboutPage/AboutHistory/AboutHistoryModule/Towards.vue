<template>
  <div class="container-bg">
    <div class="towards-container container flex mx-auto justify-between">
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
  padding-bottom: 136px;
  .toward-photo {
    width: 767px;
  }
  .towards-text {
    padding-left: 0;
    max-width: 646px;
    height: auto;
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
      p {
        line-height: 75px;
        font-size: 28px;
        color: #1d3557;
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
      }
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
@media screen and (max-width: 1488px) {
  .container-bg {
    margin-top: 80px;
    .towards-container {
      .towards-text {
        margin-top: 0;
        max-width: 556px;
        .p-span-color {
          p {
            line-height: 66px;
          }
        }
      }
      .toward-photo {
        // min-width: 574px;
        width: 656px;
      }
    }
  }
}
@media screen and (max-width: 1279px) {
  .container-bg {
    margin-top: 80px;
    .towards-container {
      .towards-text {
        margin-top: 0;
        max-width: 380px;
        h2 {
          font-family: Rubik;
          font-style: normal;
          font-weight: 300;
          font-size: 30px;
          line-height: 39px;
          color: #1d3557;
          padding-bottom: 22px;
        }
        .p-span-color {
          p {
            line-height: 52px;
            font-size: 26px;
            span {
              line-height: 22px;
              font-size: 26px;
            }
          }
        }
      }
      .toward-photo {
        width: 574px;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .container-bg {
    // margin-top: 80px;
    .towards-container {
      .towards-text {
        height: auto;
        padding-left: 0;
        width: 328px;
        max-width: 328px;
        h2 {
          font-size: 26px;
          line-height: 29px;
        }
        .p-span-color {
          p {
            font-size: 20px;
            color: #1d3557;
            font-family: Rubik;
            font-style: normal;
            font-weight: 300;
            line-height: 38px;
          }
        }
      }
      .toward-photo {
        width: 409px;
        min-width: 409px;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .container-bg {
    // margin-top: 80px;
    .towards-container {
      flex-direction: column;
      .towards-text {
        width: 100%;
        max-width: 100%;
        margin-top: 30px;
        h2 {
          font-family: Rubik;
          font-style: normal;
          font-weight: normal;
          font-size: 6.2vw;
          line-height: 8vw;
          color: #1d3557;
        }
        .p-span-color {
          p {
            font-family: Rubik;
            font-style: normal;
            font-weight: 300;
            line-height: 9vw;
            font-size: 5.7vw;
            color: #1d3557;
            span {
              line-height: 9vw;
               font-size: 5.7vw;
            }
          }
        }
      }
      .toward-photo {
        width: 100%;
      }
    }
  }
}
</style>