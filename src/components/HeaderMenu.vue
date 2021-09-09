<template>
  <div id="app" class="bg-gray-200">
    <nav class="h-28 text-white bg-white flex items-center shadow">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex">
            <div class="relative">
              <img src="../assets/icons/logo.svg" >
            </div>
          </div>


          <div class="flex">
            <div class="relative mt-2">
                <a href="#" class="font-semibold rounded-lg px-4 py-2 link" @click="isOpen1 = !isOpen1">
                  About Us
                </a>
                <div v-if="isOpen1" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click="isOpen1 = false"></div>
                <div v-if="isOpen1" class="absolute z-30 right-0 mt-2" :class="{'hidden': !isOpen1}">
                  <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                    <router-link to="/about/history" class="block text-purple-600 font-semibold px-4 py-2 | hover:font-bold">History</router-link>
                    <a href="#" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white">Strategy</a>
                    <router-link to="/about/values" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white">Vision and Values</router-link>
                    <router-link to="/about/managment" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white">Managment Apoarch</router-link>
                  </div>
                </div>
            </div>
            <router-link to="/companies" class="font-semibold rounded-lg px-4 py-2 link">
              Our Compnies
            </router-link>

            <div class="relative mt-2">
              <a href="#" class="font-semibold rounded-lg px-4 py-2 link" @click="isOpen1 = !isOpen1">
                News
              </a>
              <div v-if="isOpen1" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click="isOpen1 = false"></div>
              <div v-if="isOpen1" class="absolute z-30 right-0 mt-2" :class="{'hidden': !isOpen1}">
                <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                  <router-link to="/news/companynews" class="block text-purple-600 font-semibold px-4 py-2 | hover:font-bold">Company News</router-link>
                  <a href="#" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white">Media News</a>
                </div>
              </div>
            </div>

            <div class="relative mt-2">
              <a href="#" class="font-semibold rounded-lg px-4 py-2 link" @click="isOpen1 = !isOpen1">
                Insvestor Relations
              </a>
              <div v-if="isOpen1" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click="isOpen1 = false"></div>
              <div v-if="isOpen1" class="absolute z-30 right-0 mt-2" :class="{'hidden': !isOpen1}">
                <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                  <a href="#" class="block text-purple-600 font-semibold px-4 py-2 | hover:font-black">Job Opportunity</a>
                  <a href="#" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white">Why Join</a>
                  <a href="#" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white">Our Values And Behaviours</a>
                  <a href="#" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white">Managment Apoarch</a>
                </div>
              </div>
            </div>
            <a href="#" class="font-semibold rounded-lg px-4 py-2 link">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import {ref} from "vue";

  export default{
    setup(){
      const isOpen1 = ref(false);

      return{isOpen1}
    }
  }
</script>

<style scoped>
.link{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  color: #1D3557;
  position: relative;
}

.link:hover:after{
  width: 100%;
  height: 2px;
  display: block;
  content:"";
  position: absolute;
  bottom:0px;
  left: 0;
  background-color:black;
  animation-name: example;
  animation-duration: 0.8s;
}

@keyframes example {
  from {width: 0px;}
  to {width: 100%;}
}
</style>