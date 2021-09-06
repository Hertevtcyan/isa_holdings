<template>
  <div>
      <div class="managment-text">
        <TextRedLine 
          v-for="(data, index) in content"
          :key='index'
          v-bind="data"
        />
      </div>
  </div>
</template>

<script>
import TextRedLine from '@/components/ui/TextRedLine.vue'
export default {
  components: { TextRedLine },
  data: () => ({
    content: [
      {
        subTitle: 'Management Approach',
        paragraph: 'Responsibility and Transparency Upholding our core values of modesty, respect and proximity to people, being socially responsible andmanaging according to the principles of corporate governance .'
      },
      {
        subTitle: 'Pass through',
        paragraph: 'Creating long-lasting advantages such as brand, technology, design, network and IP .'
      },
      {
        subTitle: 'Participation',
        paragraph: 'Generating a management approach that promotes participation and collective thinking in the decision-making process. .'
      },
       {
        subTitle: 'Pass through',
        paragraph: 'Managing the present with excellence and shaping our future to ensure long-term advantages.'
      }
    ]
  })
}
</script>

<style scoped lang="scss">

  
  .managment-text {
    max-width: 626px;
  }
</style>
