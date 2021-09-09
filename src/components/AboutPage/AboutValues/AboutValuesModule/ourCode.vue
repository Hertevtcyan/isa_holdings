<template>
  <div>
    <FirstFooter
      img="mission"
      :button="false"
      :properties="{
        title: 'Our Code of Business Conduct and Ethics',
        textTwo: 'That’s why we’ve designed a Code of Conduct to empower our people to show up for the firm, our clients, and each other with integrity – and, as a result, continue to drive the business forward.',
        text: 'The success of the firm is determined not solely by the deals we make or clients we acquire, but also by the everyday actions and behaviors of our most critical asset: our people.',
      }"
    />
  </div>
</template>

<script>
import FirstFooter from "@/components/ui/FirstFooter.vue";
export default {
  components: { FirstFooter },
};
</script>







