<template>
      <div :class="`about_strategy${$props.color}`" class="about_strategy">

            <div class="about_strategy_child">
                <!--one-->
                <div class="one">
                          <TextRedLine
                              color-subtitle="color1"
                              color-text="textColor"
                              :sub-title=subTitle
                              :paragraph=paragraph_text_red_line
                          />

                          <RoundedText
                              color-text="textColor"
                              :paragraph=paragraph
                              :paragraph2=paragraph2
                              :paragraph3=paragraph3
                              :paragraph4=paragraph4
                          />
                </div>
                <!--two-->
                <div :class="`line_height_${$props.lineHeight}`"></div>
                <!--three-->
                <div class="three">

                  <div class="right_paragraph_div">
                    <h1>{{ $props.right_title }}</h1>
                    <p>{{ $props.right_paragraph_number }}</p>
                    <p>{{ $props.right_paragraph_text }}</p>
                  </div>

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
    },
    right_title: {
      type: String
    },
    right_paragraph_number: {
      type: String
    },
    right_paragraph_text: {
      type: String
    },
    subTitle: {
      type: String
    },
    paragraph_text_red_line: {
      type: String
    },
    paragraph: {
      type: String
    },
    paragraph2: {
      type: String
    },
    paragraph3: {
      type: String
    },
    paragraph4: {
      type: String
    },
    lineHeight: {
      type: String
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
  justify-content: space-between;
  height: 80%;
}

.one{
  width: 60%;
}

.three{
  width: 32%;
}

.line_height_one{
  width: 2px;
  background: #FFFFFF;
  opacity: 0.2;
  height: 443px;
}

.line_height_two{
  width: 2px;
  background: #FFFFFF;
  opacity: 0.2;
  height: 555px;
}

.line_height_three{
  width: 2px;
  background: #FFFFFF;
  opacity: 0.2;
  height: 443px;
}

.about_strategy_one{
  background: #7C7287;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
  height: 543px;
}

.about_strategy_two{
  background: #1D3557;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
  height: 663px;
}

.about_strategy_three{
  background: #148AAE;
  height: 543px;
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

.right_paragraph_div h1{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 139px;
  line-height: 169px;
  color: #FFFFFF;
  opacity: 0.5;
  width: 130%;
}

.right_paragraph_div p{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 42px;
  color: #FFFFFF;
  opacity: 0.5;
}

</style>