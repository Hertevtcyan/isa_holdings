<template>
  <div class="flex container mx-auto">
    <div @click="showItem(items)">
      <base-image class="ttr" :src="items.image" alt="slide" />
    </div>
  </div>
</template>


<script>
import BaseImage from "@/components/ui/BaseImage.vue";
export default {
  props: {
    items: {
      type: Object,
    },
  },
  methods: {
    showItem(item) {
      this.$emit("showItem", item);
    },
  },
  mounted() {
    console.log(this.items, 5656);
  },
  components: {
    BaseImage,
  },
};
</script>

<style scoped>
.ttr {
  transition: 0.1s;
  /* border: 2px solid red; */
}
.ttr:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
}
</style>


