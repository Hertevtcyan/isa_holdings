<template>
  <div class="container mx-auto my-container ttr">
    <div
      class="managment-text"
      v-for="(data, index) in content"
      :key="index"
      :class="!index ? 'flex justify-between change-size' : ''"
    >
      <TextRedLine
        :showParagraphSecond="true"
        componentStyle="Our-purpose"
        colorText="default"
        v-bind="data"
      />

      <div v-if="!index" class="ourPhoto">
        <img src="@/assets/about/aboutValues/ourPurpose.png" alt="" />
      </div>
    </div>
  </div>
</template>



<script>
import TextRedLine from "@/components/ui/TextRedLine";
export default {
  components: {
    TextRedLine,
  },
  data: () => ({
    content: [
      {
        subTitle: "Our Purpose",
        paragraphSecond:
          "Our purpose comes to life through our four core values: Client Service, Excellence, Integrity, and Partnership.",
        paragraph:
          "Drawing on over 5 years of experience working with the world’s leading businesses, entrepreneurs, and institutions, we mobilize our people, culture, technologies, and ideas to advance the success of our clients, broaden individual prosperity, and accelerate economic progress for all.",
      },
      {
        subTitle: "Client Service",
        paragraph:
          "We lead with a service mindset, enabling us to anticipate and adapt to the needs of our clients and consumers by delivering thoughtful, innovative solutions.",
      },
      {
        subTitle: "Integrity",
        paragraph:
          "We hold ourselves accountable to the highest ethical standards, insisting on transparency and vigilance from our people as we learn from our experiences and make decisions that instill a sense of purpose and pride in our firm.",
      },
      {
        subTitle: "Partnership",
        paragraph:
          "We prioritize collaboration and value diversity, creating a culture that fosters inclusiveness, teamwork and an entrepreneurial mindset in the pursuit of professional and personal excellence.",
      },
    ],
  }),
  // created () {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  //  destroyed () {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  // methods: {
  //   handleScroll (event) {
  //     console.log(event);
  //     // Any code to be executed when the window is scrolled
  //   }
  // }
};
</script>

<style scoped lang="scss">
.dddd::-webkit-scrollbar-thumb {
  background: linear-gradient(0deg, #00ffd1, #00ffd1),
    linear-gradient(91.82deg, #38d3f7 -11.45%, #0c9ac6 106.33%);
}
.dddd::-webkit-scrollbar-track {
  /* background: rgb(2,0,36); */
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 40%,
    rgba(12, 154, 198, 1) 60%,
    rgba(0, 212, 255, 0) 52%
  );
}

body {
  background: red !important;
}
.change-size {
  padding-bottom: 126px;
}
.my-container {
  margin-top: 56px;
}
.change-size div:first-child {
  width: 767px;
  margin-top: 60px;
}
.ourPhoto {
  width: 700px;
  img {
    width: 100%;
  }
}

@media screen and (max-width: 1487px) {
  .ourPhoto {
    width: 700px;
    img {
      width: 700px;
      max-width: 700px;
    }
  }
  .change-size div:first-child {
    margin-top: 0;
    width: 498px;
    p {
      font-size: 20px;
      line-height: 38px;
    }
  }
}
@media screen and (max-width: 1279px) {
  .ourPhoto {
    width: 500px;
    img {
      width: 500px;
      max-width: 500px;
    }
  }
  .change-size {
    padding-bottom: 69px;
  }
}
@media screen and (max-width: 1024px) {
  .change-size div:first-child {
    max-width: 409px;
    // margin-top: 60px;
  }
  .ourPhoto img {
    width: 100%;
  }
  // .Our-purpose {
  //   max-width: 409px;
  // }
  .ttr {
    margin-top: 83px;
  }
}
@media screen and (max-width: 767px) {
  .managment-text {
    flex-direction: column-reverse;
    width: 100%;
  }
  .change-size {
    width: 100%;
  }
  .change-size div:first-child {
    margin-top: 0;
    max-width: 100%;
    width: 100%;
  }
  .ourPhoto {
    width: 100%;
    padding-bottom: 47px;
    img {
      max-width: 100%;
       width: 100%;
    }
  }
}
</style>
