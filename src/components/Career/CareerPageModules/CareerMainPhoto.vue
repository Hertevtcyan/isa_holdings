<template>
  <div>
   <ShowPathPage :page="{path: 'Career', showIcon: false}"/>
    <ShowBackgroundImage
      img="career"
      :text="{
        title: 'Career',
        text: 'We are committed to enriching lives and we seek integrity, honesty, and transparency in our relationships.',
      }"
    />
  </div>
</template>


<script>
import ShowBackgroundImage from "@/components/ui/ShowBackgroundImage.vue";
import ShowPathPage from "@/components/ui/ShowPathPage.vue"

export default {
  components: {
    ShowBackgroundImage,
    ShowPathPage
  },
};
</script>


    



