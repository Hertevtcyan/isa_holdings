<template>
    <div class="strategy_text">

        <div class="strategy_text_one_div">
          <TextRedLine
            sub-title="At last"
            paragraph="A set of fundamental shifts in 2021 profoundly impacted the financial services sector. The demand for sustainable solutions and green finance rose to new highs. Interest rates are expected to remain lower for longer. And the Covid-19 outbreak increased our customers’ propensity and preference to engage digitally."
            paragraph2="The current stage of our strategic plan responds to those shifts and aligns to our new purpose, values and ambition. It has four key pillars."
          />
        </div>

        <div class="strategy_text_two_div -mt-40">
          <PhotoSubTitleParagraphButt
              image_text="Opening up a world of opportunity"
              sub-title="Our strategic pillars"
              paragraph="It includes targets for accelerating the shift of capital to areas, principally Asia and wealth, that have demonstrated the highest returns and where we have sustainable advantage through scale. "
              :showYoutubeIcon="true"
              :image="{
                src: 'about/aboutStrategy/Strategy.png',
                alt: 'sdfsdfsdsdf',
              }"
          />
        </div>

    </div>
</template>


<script>
import TextRedLine from "../../../ui/TextRedLine";
import PhotoSubTitleParagraphButt from "../../../ui/PhotoSubTitleParagraphButt";
export default {
  components: {PhotoSubTitleParagraphButt, TextRedLine}
}
</script>


<style scoped>
   .strategy_text{
     width: 80%;
     display: flex;
     justify-content: space-around;
     margin: auto;
   }

   .strategy_text_one_div{
     width: 46%;
   }

   .strategy_text_two_div{
     width: 46%;
   }

</style>