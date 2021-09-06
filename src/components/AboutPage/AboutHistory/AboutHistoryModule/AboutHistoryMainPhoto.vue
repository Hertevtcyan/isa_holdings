<template>
  <div>

    <ShowPathPage :page="{path:'About Us',section:'Our History'}"/>
    <ShowBackgroundImage img="history" :text="{title:'Who We Ae', text:'ISA Holding consists of several companies, representing seven diverse sectors and offering exceptional products and services aimed at enriching lives.' }" />
  </div>
</template>

<script>
import ShowPathPage from '@/components/ui/ShowPathPage.vue'
import ShowBackgroundImage from "../../../ui/ShowBackgroundImage";
export default {
  components: {
    ShowBackgroundImage,
    ShowPathPage
  }
};
</script>


