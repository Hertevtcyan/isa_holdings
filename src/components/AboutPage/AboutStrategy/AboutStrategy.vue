<template>
  <ShowPathPage :page="{path:'About Us',section:'Strategy'}"/>
  <ShowBackgroundImage img="strategy" :text="{title:'Our strategy', text:'Our strategy supports our ambition of being the preferred international financial partner for our clients.' }" />
  <StrategyText />
  <StrategyBlocks
      color="_one"

  />
</template>

<script>
import ShowBackgroundImage from "../../ui/ShowBackgroundImage";
import ShowPathPage from "../../ui/ShowPathPage";
import StrategyText from "./AboutStrategyModules/StrategyText";
import StrategyBlocks from "../../ui/StrategyBlocks";
import {ref} from "vue";
export default {
  components: {
    StrategyBlocks,
    StrategyText,
    ShowPathPage,
    ShowBackgroundImage

  },

  setup(){
    const one = ref([
      {text: 'Inspire a dynamic culture where the best want to work'},
      {text: 'Encourage an inclusive culture fostering diversity'},
      {text: 'Help colleagues develop future-ready skills'},
      {text: 'Be a simpler, more agile and effective organisation'}
    ])

    return {
      one
    }
  }
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
