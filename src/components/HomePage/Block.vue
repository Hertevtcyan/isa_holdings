<template>
    <div class="flex w-full">
        <div class="w-2/4">
            <CartOne class="-mt-24 ml-52" data-aos="fade-right"/>
            <CartTwo class="mt-24 ml-52" data-aos="fade-right"/>
        </div>
        <div class="w-2/4">
            <CartThree class="mt-14 ml-14" data-aos="fade-left"/>
        </div>
    </div>
</template>

<script>

import CartOne from "./Block_children/CartOne";
import Children from "./Block_children/Children";
import {ref} from "vue";
import CartTwo from "./Block_children/CartTwo";
import CartThree from "./Block_children/CartThree";
export default {
  components: {CartThree, CartTwo, Children, CartOne},

  setup(){
    const title = ref("Helping a space business reach for the stars");
    const description = ref("We’ve financed a space electronics inventor to bring satellite technology to market.")

    return{title, description}
  }


}

</script>

<style scoped>

</style>
