<template>
  <ShowPathPage :page="{path:'About Us', showIcon: true, section:'Strategy'}"/>
  <ShowBackgroundImage img="strategy" :text="{title:'Our strategy', text:'Our strategy supports our ambition of being the preferred international financial partner for our clients.' }" />
</template>

<script>
import ShowBackgroundImage from "../../ui/ShowBackgroundImage";
import ShowPathPage from "../../ui/ShowPathPage";
export default {
  components: {
    ShowPathPage,
    ShowBackgroundImage

  },
};
</script>


<style scoped lang="scss">
.container-bg {
  background: #e5e5e5;
}
.upstream {
  margin-top: -130px;
}
.Dream {
  margin-top: 82px;
}
</style>
