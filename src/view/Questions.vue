<template>
  <!-- <div class="flex"> -->
<div class="questions">
  <div>
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

</style>