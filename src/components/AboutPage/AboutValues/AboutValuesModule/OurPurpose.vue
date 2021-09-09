<template>
    <div class="container mx-auto my-container">
       <div class="managment-text"
          v-for="(data, index) in content"
          :key='index'
          :class="!index?'flex justify-between change-size':''">
        <TextRedLine 
          v-bind="data"   
        />
        <div v-if="!index" class="ourPhoto">
            <img src="@/assets/about/aboutValues/ourPurpose.png" alt="">
        </div>
      </div>
    </div>
</template>



<script>
import TextRedLine from '@/components/ui/TextRedLine'
export default {
    components: {
      TextRedLine
    },
     data: () => ({
      content: [
        {
          subTitle: 'Management Approach',
         paragraphSecond: 'Our purpose comes to life through our four core values: Client Service, Excellence, Integrity, and Partnership.',
         paragraph: 'Responsibility and Transparency Upholding our core values of modesty, respect and proximity to people, being socially responsible andmanaging according to the principles of corporate governance .'
        },
        {
          subTitle: 'Excellence',
          paragraph: 'We aspire to nothing less than excellence, consistently striving for exceptional performance and achieving outstanding results for our clients, our shareholders, and our company.'
        },
        {
          subTitle: 'Integrity',
          paragraph: 'We hold ourselves accountable to the highest ethical standards, insisting on transparency and vigilance from our people as we learn from our experiences and make decisions that instill a sense of purpose and pride in our firm.'
        },
        {
          subTitle: 'Partnership',
          paragraph: 'We prioritize collaboration and value diversity, creating a culture that fosters inclusiveness, teamwork and an entrepreneurial mindset in the pursuit of professional and personal excellence.'
        }
      ]
  })

}

</script>

<style scoped lang="scss">
.change-size {
  padding-bottom: 126px;
}
.my-container{
    margin-top: 56px;
}
.change-size div:first-child {
    width: 767px;
    margin-top: 60px;
}
.ourPhoto{
    width: 700px;
    img {
        width: 100%;
    }
}
</style>
