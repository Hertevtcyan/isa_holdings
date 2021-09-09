<template>
  <div class=" flex container mx-auto">
    <div  @click="showItem(items)">
      <base-image class="ttr" :src="items.image" alt="slide" />
    </div>
  </div>
</template>


<script>
import BaseImage from "@/components/ui/BaseImage.vue";
export default {
  props: {
      items: {
          type: Object
      }
  },
  methods: {
    showItem(item) {
      console.log(88888888);
      this.$emit("showItem", item);
    },
  },
  mounted(){
    console.log(this.items,5656);
  },
  components: {
    BaseImage,
  },
};
</script>

<style scoped>
.ttr {
transition: 0.3s;
}
.ttr:hover{
      opacity: 0.3;
      width: 300px;
      height: 39.8vw;
}

</style>


