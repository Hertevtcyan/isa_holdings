<template>

        <div class="rounded_big_div">
          <div class="flex mt-6">
            <div class="rounded_div"></div>
            <p :class="`${$props.colorText}`" class="-mt-2 ml-4">
              {{ $props.paragraph }}
            </p>
          </div>

          <div class="flex mt-6">
            <div class="rounded_div"></div>
            <p :class="`${$props.colorText}`" class="-mt-2 ml-4">
              {{ $props.paragraph2 }}
            </p>
          </div>

          <div class="flex mt-6">
            <div class="rounded_div"></div>
            <p :class="`${$props.colorText}`" class="-mt-2 ml-4">
              {{ $props.paragraph3 }}
            </p>
          </div>

          <div class="flex mt-6">
            <div class="rounded_div"></div>
            <p :class="`${$props.colorText}`" class="-mt-2 ml-4">
              {{ $props.paragraph4 }}
            </p>
          </div>
        </div>

</template>


<script>
import {ref} from "vue";

export default {
  props: {
    subTitle: {
      type: String,
      required: false,
    },
    paragraph: {
      type: String,
    },
    paragraph2: {
      type: String,
    },
    paragraph3: {
      type: String,
    },
    paragraph4: {
      type: String,
    },
    colorText: {
      type: String
    }
  },


};

</script>


<style scoped>

.rounded_div{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #C1121F;
}

.textColor{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  color: #FFFFFF;
  width: 70%;
}


</style>