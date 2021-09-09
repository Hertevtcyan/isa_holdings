<template>
  <div>
    <ShowBackgroundImage img="OurCompanies" :text="{ title: 'OUR COMPANIES', text: 'By successfully combining our local knowledge, experience and insights with international expertise and best practices, we have built a vast network of strategically located businesses throughout the region.'}"/>
  </div>
</template>

<script>
import ShowBackgroundImage from "@/components/ui/ShowBackgroundImage.vue";
export default {
  components: { ShowBackgroundImage },
};
</script>
