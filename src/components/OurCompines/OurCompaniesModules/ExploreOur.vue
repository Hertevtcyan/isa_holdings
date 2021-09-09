<template>
    <div>
         <TextRedLine v-for="(data, index) in content" :key="index" v-bind="data" />
    </div>
</template>

<script>
   import TextRedLine from '@/components/ui/TextRedLine.vue'
export default {
 
  components: {
    TextRedLine,
  },
  data() {
    return {
      content: [
        {
          subTitle: "Brands and group strengths",
        },
      ],
    };
  },
};
</script>
