<template>
  <div>
    <div class="container mx-auto flex justify-between officer">
      <div class="officer_one">
        <Dropdown />
      </div>
      <div class="officer_two">
        <p>You can find contact details for our main offices in each of the countries and territories where we operate by selecting your location using the dropdown menu below.</p>
      </div>
    </div>

    <div class="container mx-auto flex justify-between address">
        <div class="address_one">
          <div>
            <p class="address_text">Head office and main branch<br>
              66 Ataturk Street<br>
              Istambul<br>
              00029<br>
              Republic of Turkey<br>
              Tel: +44(60) 655 000<br>
              Fax: +44(60) 655 501
            </p>

          </div>
        </div>

        <div class="address_two">
          <div>
            <p class="address_text">66 Ataturk Street<br>
              Istambul<br>
              00029<br>
              Republic of Turkey<br>
              Tel: +44(60) 655 000<br>
              Fax: +44(60) 655 501
            </p>
          </div>
        </div>
    </div>
  </div>

</template>

<script>
import Drobdown from "../../../view/Drobdown.vue";

export default {


  components: {
    Drobdown
  },


}
</script>


<style scoped>

.address_one{
  background: #148AAE;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
  height: 298px;
  width: 48%;
  padding: 40px 68px;
}

.address_two{
  height: 298px;
  width: 48%;
  background: #7C7287;
  box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.2);
  padding: 40px 68px;
}

.address_text{
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 130.6%;
  color: #FFFFFF;
  text-shadow: 1px 2px 0px rgba(29, 53, 87, 0.05);
}

.officer{
  background: #FFFFFF;
  box-shadow: 4px 16px 25px rgba(29, 53, 87, 0.05);
  padding: 62px;
}

.officer_one{
  width: 45%;
  border: 2px solid;
}

.officer_two{
  width: 45%;
}

.officer_two p{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: #1D3557;
}

.btn-group {
  width: 77%;
  height: 40px;
  position: relative;
  margin: 26px 71px ;
  display: inline-block;
  vertical-align: middle;
}


.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 100%;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

</style>