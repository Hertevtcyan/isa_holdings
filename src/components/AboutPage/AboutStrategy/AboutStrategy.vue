<template>
  <ShowPathPage :page="{path:'About Us', showIcon: true, section:'Strategy'}"/>
  <ShowBackgroundImage img="strategy" :text="{title:'Our strategy', text:'Our strategy supports our ambition of being the preferred international financial partner for our clients.' }" />
  <StrategyText />
  <StrategyBlocks
      lineHeight="one"
      color="_one"
      right_title="5.2m"
      right_paragraph_number="HOURS OF TRAINING"
      right_paragraph_text="Provided across Isa Holding in 2020 to help our people gain skills for the future"
      subTitle="Energise for growth"
      paragraph_text_red_line="This pillar of our strategy outlines how we are energising around growth. We want to:"
      paragraph="Inspire a dynamic culture where the best want to work"
      paragraph2="Encourage an inclusive culture fostering diversity"
      paragraph3="Help colleagues develop future-ready skills"
      paragraph4="Be a simpler, more agile and effective organisation"
  />
  <StrategyBlocks
      class="mt-14"
      lineHeight="two"
      color="_two"
      right_title="$ 172 Mn"
      right_paragraph_number="US DOLLARS"
      right_paragraph_text="Value of trade that we facilitate for our customers annually"
      subTitle="Focus on our strengths"
      paragraph_text_red_line="To achieve our ambition, we are focusing on the areas where we have distinctive capabilities. This pillar of our strategy outlines where we are prioritising our efforts and investing for the future. We aim to:"
      paragraph="Be the global leader in cross-border banking flows aligned to major trade and capital corridors"
      paragraph2="Lead the world in serving mid market corporates globally"
      paragraph3="Become a market leader in Wealth management, with a particular focus on Asia"
      paragraph4="Invest at scale domestically where ISA Holding opportunity is greatest"
  />
  <StrategyBlocks
      class="mt-14"
      lineHeight="three"
      color="_three"
      right_title="92.7"
      right_paragraph_number="PER CENT"
      right_paragraph_text="Retail banking transactions globally that were digital at the end of 2020"
      subTitle="Digitise at scale"
      paragraph_text_red_line="As people lead increasingly digital lives, this pillar of our strategy outlines how we are delivering faster, easier and more secure digital banking. We will:"
      paragraph="Create and deliver fast, easy, digital customer experiences"
      paragraph2="Partner with technology innovators to enable new customer benefits"
      paragraph3="Ensure our bank is resilient and secure"
      paragraph4="Execute with speed and automate at scale"
  />
  <FirstFooter
      class="mt-14"
      img="strategy"
      small="one"
      :button="true"
      :properties="{
        title: 'Management Approach',
        text: 'The success of the firm is determined not solely by the deals we make or clients we acquire, but also by the everyday actions and behaviors of our most critical asset: our people.\n',
      }"
  />

</template>

<script>
import ShowBackgroundImage from "../../ui/ShowBackgroundImage";
import ShowPathPage from "../../ui/ShowPathPage";
import StrategyText from "./AboutStrategyModules/StrategyText";
import StrategyBlocks from "../../ui/StrategyBlocks";
import {ref} from "vue";
import FirstFooter from "../../ui/FirstFooter";
export default {
  components: {
    FirstFooter,
    StrategyBlocks,
    StrategyText,
    ShowPathPage,
    ShowBackgroundImage

  },
};
</script>


<style scoped lang="scss">

.upstream {
  margin-top: -130px;
}
.Dream {
  margin-top: 82px;
}
</style>
