<template>
  <!-- <div class="flex"> -->
<div class="questions">
  <div class="container mx-auto">
    <QuestionsBlocks>
      <template v-slot:title><span>What is the minimum amount that I can invest?</span></template>
      <template v-slot:body>
        <p class="text-white">1000USD / OR Other currencies equivalent to $1000</p>
      </template>
    </QuestionsBlocks>

    <QuestionsBlocks>
      <template v-slot:title><span>What is the maximum amount that I can invest?</span></template>
      <template v-slot:body>
        <p class=" text-white">Varies according to investment volume</p>
      </template>
    </QuestionsBlocks>

    <QuestionsBlocks>
      <template v-slot:title><span>Can I cancel after investing and getting refund?</span></template>
      <template v-slot:body>
        <p class=" text-white">We need to create fair conditions, we cannot refund because we need to protect the rights of manufacturers and other potential investors.</p>
      </template>
    </QuestionsBlocks>

    <QuestionsBlocks>
      <template v-slot:title><span>When can I withdraw my money after investment?</span></template>
      <template v-slot:body>
        <p class=" text-white">The entire amount will be transferred to your account within 1-3 working days.</p>
      </template>
    </QuestionsBlocks>

    <QuestionsBlocks>
      <template v-slot:title><span>What is Isa Investing? How is the logic and operation?</span></template>
      <template v-slot:body>
        <p class=" text-white">Isa Investing is an interactive investment platform, It provides the opportunity to be involved in commercial investment projects developed by our expert team. With this interactive project; We aim to make profits for different investors in sectors such as import-export-construction-real estate.</p>
      </template>
    </QuestionsBlocks>

    <QuestionsBlocks>
      <template v-slot:title><span>How do you develop your projects? Do you guarantee that the investment projects will be successful?</span></template>
      <template v-slot:body>
        <p class=" text-white">Isa Group is one of the pioneers of the sector in terms of capacity with its import and export projects that have been active for years and specialize in their field. The purpose of the interactive project is that Isa Group wants to realize under the name of Isa Investing; profits from commercial activities are not limited to large investors; It is to ensure that all investors, large and small, participate in projects and earn profits. Isa Group guarantees that the goods or services will be provided on time in the projects determined by making agreements with all manufacturers and business partners providing logistics services within the framework of international trade law.</p>
      </template>
    </QuestionsBlocks>

    <QuestionsBlocks>
      <template v-slot:title><span>Is Isa Investing safe?</span></template>
      <template v-slot:body>
        <p class=" text-white">Security is a priority at Isa Investing and we make every effort to ensure that our transaction process is safe and that your personal information is secure. We use the most advanced security programs on our site for the security of your payments.</p>
      </template>
    </QuestionsBlocks>

    <QuestionsBlocks>
      <template v-slot:title><span>How can I track my money?</span></template>
      <template v-slot:body>
        <p class=" text-white">From the moment you make an investment, you can follow your investments live in your control panel and contact us at any time.</p>
      </template>
    </QuestionsBlocks>
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


</style>