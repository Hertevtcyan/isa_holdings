<template>
  <div id="footer">
    <div class="footer_box  pt-16">

      <div class="flex relative">
          <img src="../assets/icons/logo_white.svg">
        <div class="flex absolute right-2 -mt-4">
          <img src="../assets/icons/twitter.svg" >
          <img src="../assets/icons/facebook.svg" class="img">
          <img src="../assets/icons/telegram.svg" >
        </div>
      </div>


      <div class="flex pt-9">
        <div class="mt-4 footerlinks">
          <h2>About Us</h2>
          <router-link class="footerlink" to="/">History</router-link><br>
          <router-link class="footerlink" to="/">Strategy</router-link><br>
          <router-link class="footerlink" to="/">Vision and Values</router-link><br>
          <router-link class="footerlink" to="/" target="_blank">Managment Apoarch</router-link>
        </div>

        <div class="mt-4 footerlinks">
          <h2>Contact Us</h2>
          <router-link class="footerlink" to="/">Customers</router-link><br>
          <router-link class="footerlink" to="/">Offices</router-link><br>
          <router-link class="footerlink" to="/">Popular questions</router-link><br>
        </div>

        <div class="mt-4 footerlinks">
          <h2>News</h2>
          <router-link class="footerlink" to="/">Company News</router-link><br>
          <router-link class="footerlink" to="/">Media News </router-link>
        </div>

        <div class="mt-4 footerlinks">
          <h2>Careers</h2>
          <router-link class="footerlink" to="/">Job Opportunity</router-link><br>
          <router-link class="footerlink" to="/">Why Join</router-link><br>
          <router-link class="footerlink" to="/" target="_blank">Our Values And Behaviours</router-link>
        </div>

        <div class="mt-4 footerlinks">
          <h2>Insvestor Relations</h2>
          <router-link class="footerlink" to="/">Job Opportunity</router-link><br>
          <router-link class="footerlink" to="/">Why Join</router-link><br>
          <router-link class="footerlink" to="/">Our Values And Behaviours</router-link><br>
          <router-link class="footerlink" to="/" target="_blank">Managment Apoarch</router-link>
        </div>
      </div>


      <hr class="mt-12" />


      <div class="mt-4 flex w-full">
        <div class="w-3/4">
          <router-link class="footerlink_bottom" to="/">Privacy Policy</router-link>
          <router-link class="footerlink_bottom p-16" to="/">Terms & Conditions</router-link>
          <router-link class="footerlink_bottom" to="/"> © 2021 ISA Holding Inc. All rights reserved.</router-link>
        </div>
        <div class="w-1/4 relative">
          <router-link class="footerlink_bottom absolute right-2" to="/">Locations</router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

#footer{
  background: linear-gradient(0deg, #10223D, #10223D), radial-gradient(157.73% 101.12% at 50% 50.09%, #0E2944 0%, #071933 100%);
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
  height: 579px;
}

.footer_box{
  width: 80%;
  margin: auto;
  height: 100%;
  margin-top: 50px;
}

.logo{
  margin-top: 72px;
}

.img{
  padding: 32px;
}

.footerlinks{
  width: 20%;
}

.footerlinks h2{
  font-family: Rubik,sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
}

.footerlink{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: #FFFFFF;
  margin-top: 17px;
  opacity: 0.6;
}

hr{
  background: #C4C4C4;
  opacity: 0.4;
  border-radius: 1px;
}

.footerlink_bottom{
  font-family: Rubik,sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  color: #FFFFFF;
  opacity: 0.6;
}



</style>