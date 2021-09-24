<template>
  <div class="my-cont container flex mx-auto justify-between">
    <div class="emlpoee my-container">
      <div class="card1">
        <h2>1280</h2>
        <p class="firstP">EMPLOYEES</p>
        <p class="lastP">
          The number of full-time equivalent staff who work for ISA HOLDING
          worldwide
        </p>
      </div>
    </div>
    <div class="languages my-container">
      <div class="card2">
        <h2>1280</h2>
        <p class="firstP">LANGUAGES</p>
        <p class="lastP">
          The number of different languages spoken by employees around the world
        </p>
      </div>
    </div>
    <div class="hours">
      <div class="card3 my-container">
        <h2>1280</h2>
        <p class="firstP">HOURS</p>
        <p class="lastP">
          The number of hours our employees spent volunteering with community
          projects during the working day in 2020
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.emlpoee {
  width: 472px;
  height: 541px;
  background: #148aae;
  padding-left: 62px;
  padding-top: 62px;
}
.languages {
  width: 472px;
  height: 541px;
  background: #1d3557;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
  padding-left: 62px;
  padding-top: 62px;
}
.hours {
  width: 472px;
  height: 541px;
  background: #148aae;
  padding-left: 62px;
  padding-top: 62px;
  background: #7c7287;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
}
.card1,
.card2,
.card3 {
  max-width: 348px;
  color: #fff;
}
h2 {
  font-weight: 300;
  font-size: 96px;
  line-height: 117px;
  font-family: Rubik;
  font-style: normal;
}
.firstP {
  font-size: 28px;
  line-height: 42px;
  margin-top: 24px;
}
.lastP {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  margin-top: 24px;
}

@media screen and (max-width: 1487px) {
  .hours,
  .emlpoee,
  .languages {
    width: 400px;
    height: 481px;
    padding-left: 40px;
    padding-top: 40px;
  }
}
@media screen and (max-width: 1279px) {
  h2 {
    font-size: 70px;
    line-height: 90px;
  }
  .lastP,
  .firstP {
    font-size: 24px;
    line-height: 32px;
  }
  .hours,
  .emlpoee,
  .languages {
    width: 322px;
    height: 368px;
    padding-left: 30px;
    padding-top: 30px;
  }
}
@media screen and (max-width: 1024px) {
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 78px;
  }
  .lastP,
  .firstP {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 19px;
    line-height: 32px;
    color: #ffffff;
  }
  .hours,
  .emlpoee,
  .languages {
    width: 251px;
    height: 342px;
    padding-left: 16px;
    padding-top: 16px;
    margin-top: 26px;
  }
}
@media screen and (max-width: 767px) {
  .my-cont {
    flex-direction: column;
  }
  .hours,
  .emlpoee,
  .languages {
    width: 100%;
  }
  h2 {
    font-weight: 300;
    font-size: 85px;
    line-height: 100px;
  }
  .lastP,
  .firstP {
    font-weight: 300;
    font-size: 4vw;
    line-height: 6vw;
  }
  .card1, .card2, .card3 {
    max-width: 580px;
  }
}
@media screen and (max-width: 500px){
.lastP,
  .firstP {
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    
  }
}
@media screen and (max-width: 330px){

}
</style>
