<template>
  <!-- <div class="flex"> -->
<div class="questions">
  <div>
    <div class="container mx-auto question_one_text">
      <h1>You can find answers to some of the most common questions about our business by reading the FAQs below.</h1>
    </div>

    <div class="questions_block_top">
      <QuestionsBlocks>
        <template v-slot:title><span>Who should I contact with an investor enquiry?</span></template>
        <template v-slot:body>
          <p class="text-black">You can find answers to some of the most common questions about our business by reading the FAQs below.</p>
        </template>
      </QuestionsBlocks>
    </div>


    <div class="questions_block">
      <QuestionsBlocks>
        <template v-slot:title><span>What is the minimum amount that I can invest?</span></template>
        <template v-slot:body>
          <p class="text-black">You can find answers to some of the most common questions about our business by reading the FAQs below.</p>
        </template>
      </QuestionsBlocks>
    </div>

    <div class="questions_block">
      <QuestionsBlocks>
        <template v-slot:title><span>What is the minimum amount that I can invest?</span></template>
        <template v-slot:body>
          <p class="text-black">You can find answers to some of the most common questions about our business by reading the FAQs below.</p>
        </template>
      </QuestionsBlocks>
    </div>

    <div class="questions_block">
      <QuestionsBlocks>
        <template v-slot:title><span>What is the minimum amount that I can invest?</span></template>
        <template v-slot:body>
          <p class="text-black">You can find answers to some of the most common questions about our business by reading the FAQs below.</p>
        </template>
      </QuestionsBlocks>
    </div>

    <div class="questions_block">
      <QuestionsBlocks>
        <template v-slot:title><span>What is the minimum amount that I can invest?</span></template>
        <template v-slot:body>
          <p class="text-black">You can find answers to some of the most common questions about our business by reading the FAQs below.</p>
        </template>
      </QuestionsBlocks>
    </div>

    <div class="questions_block">
      <QuestionsBlocks>
        <template v-slot:title><span>What is the minimum amount that I can invest?</span></template>
        <template v-slot:body>
          <p class="text-black">You can find answers to some of the most common questions about our business by reading the FAQs below.</p>
        </template>
      </QuestionsBlocks>
    </div>

    <div class="questions_block">
      <QuestionsBlocks>
        <template v-slot:title><span>What is the minimum amount that I can invest?</span></template>
        <template v-slot:body>
          <p class="text-black">You can find answers to some of the most common questions about our business by reading the FAQs below.</p>
        </template>
      </QuestionsBlocks>
    </div>

    <div class="questions_block">
      <QuestionsBlocks>
        <template v-slot:title><span>What is the minimum amount that I can invest?</span></template>
        <template v-slot:body>
          <p class="text-black">You can find answers to some of the most common questions about our business by reading the FAQs below.</p>
        </template>
      </QuestionsBlocks>
    </div>
  </div>
</div>


  <!-- <div>

  </div>
</div>   -->
</template>

<script>
import QuestionsBlocks from "../components/Slots/QuestionsBlocks";
export default {
  components:{
    QuestionsBlocks,
  },

}
</script>

<style scoped>

/* #img{
  overflow: hidden;
} */

.questions{
  width: 100%;
}

.questions_block{
  border-bottom: #1D3557 1px solid;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
}

.questions_block_top{
  border-bottom: #1D3557 1px solid;
  border-top: #1D3557 1px solid;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
}

.question_one_text h1{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: #1D3557;
  margin-top: 16px;
  margin-bottom: 66px;
  width: 57%;
}

</style>

<!--For Questions blocks -->

<style>
.vcp__header{
  background: transparent !important;
}
.vcp__header{
  background: none !important;
}
.vcpg{
  border:none !important;
}
.vcp__body{
  border:none !important;
  background: none !important;
}

.vcp__body {
  overflow: unset !important;
}

.vcp--expanded .vcp__header-icon{
  transform:rotate(-90deg) !important;
}

</style>