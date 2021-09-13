<template>
      <div :class="`about_strategy${$props.color}`" class="about_strategy">

            <div class="about_strategy_child">
                <!--one-->
                <div>
                          <TextRedLine
                              color-subtitle="color1"
                              color-text="textColor"
                              sub-title="Energise for growth"
                              paragraph="This pillar of our strategy outlines how we are energising around growth. We want to:"
                          />

                          <RoundedText
                              color-text="textColor"
                              paragraph="Inspire a dynamic culture where the best want to work"
                              paragraph2="Encourage an inclusive culture fostering diversity"
                              paragraph3="Help colleagues develop future-ready skills"
                              paragraph4="Be a simpler, more agile and effective organisation"
                          />
                </div>
                <!--two-->
                <div class="line_gray"></div>
                <!--three-->
                <div>

                </div>

            </div>

      </div>
</template>

<script>

import TextRedLine from "./TextRedLine";
import {ref} from "vue";
import RoundedText from "./RoundedText";
export default {
  components: {RoundedText, TextRedLine},
  props:{
    color: {
      type: String,
      validator: (type) =>
          ["_one", "_two", "_three"].includes(type),
    },
    for: {
      type : Array,
    }

  },

}


</script>

<style scoped>

.about_strategy{
  height: 550px;
  width: 100%;
}

.about_strategy_child{
  width: 80%;
  margin: auto;
  padding: 50px;
  display: flex;
  height: 80%;
}

.line_gray{
  width: 2px;
  height: 443px;
  background: #FFFFFF;
  opacity: 0.2;
}

.about_strategy_one{
  background: #7C7287;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
}

.about_strategy_two{
  background: #1D3557;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
}

.about_strategy_three{
  background: #148AAE;
}

.circle_div{
  display: flex;
}

.rounded_div{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #C1121F;
}

</style>