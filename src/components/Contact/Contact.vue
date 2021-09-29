<template>
  <ShowPathPage
    :page="{ path: 'Contact Us', section: 'Contact', showIcon: true }"
  />
  <TextRedLine
    class="container mx-auto items-center mt-20"
    subTitle="Contact Us"
  />
  <div class="container mx-auto flex">
    <router-link
      :to="{ name: 'Customers' }"
      class="font-semibold rounded-lg py-2 link"
    >
      Customers
    </router-link>
    <router-link
      :to="{ name: 'Offices' }"
      class="font-semibold rounded-lg py-2 link ml-16"
    >
      Offices
    </router-link>
    <router-link
      to="/contact/popular-questions"
      class="font-semibold rounded-lg py-2 link ml-16"
    >
      Popular questions
    </router-link>
  </div>
  <hr />
  <router-view></router-view>

  <div class="my-cont container flex mx-auto justify-between">
    <div class="bl-1">
      <img src="@/assets/contact/pepoles.png" alt="" />
      <div class="bl-1-text">
        <h2>Helping a space business reach for the stars</h2>
        <p>
          We’ve financed a space electronics inventor to bring satellite
          technology to market.
        </p>
        <div class="my-butt">
          <ReadMoreButton type="text">Read More</ReadMoreButton>
        </div>
      </div>
    </div>
    <div class="bl-2">
      <img src="@/assets/contact/men.png" alt="" />
      <div class="bl-2-text">
        <h2>Helping a space business reach for the stars</h2>
        <p>
          We’ve financed a space electronics inventor to bring satellite
          technology to market.
        </p>
        <div class="my-butt">
          <ReadMoreButton type="text">Read More</ReadMoreButton>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container mx-auto mt-4 flex justify-between">
    <PhotoSubTitleParagraphButt
        componentName="contact-customer"
        :showButton="true"
        sub-title="Our strategic pillars"
        paragraph="It includes targets for accelerating the shift of capital to areas, principally Asia and wealth, that have demonstrated the highest returns and where we have sustainable advantage through scale. "
        :image="{
                src: 'contact/pepoles.png',
                alt: 'sdfsdfsdsdf',
              }"
    />
    <PhotoSubTitleParagraphButt
        componentName="contact-customer"
        :showButton="true"
        sub-title="Our strategic pillars"
        paragraph="It includes targets for accelerating the shift of capital to areas, principally Asia and wealth, that have demonstrated the highest returns and where we have sustainable advantage through scale. "
        :image="{
                src: 'contact/men.png',
                alt: 'sdfsdfsdsdf',
              }"
    />
  </div> -->
</template>

<script>
import ShowPathPage from "../ui/ShowPathPage";
import TextRedLine from "../ui/TextRedLine";
import { ref } from "vue";
import PhotoSubTitleParagraphButt from "../ui/PhotoSubTitleParagraphButt";
import Questions from "../../view/Questions";
import ReadMoreButton from "@/components/ui/ReadMoreButton.vue";
export default {
  components: {
    ReadMoreButton,
    Questions,
    PhotoSubTitleParagraphButt,
    TextRedLine,
    ShowPathPage,
  },

  setup() {
    const active = ref(true);

    return { active };
  },
};
</script>

<style scoped lang="scss">
.link {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  color: #1d3557;
  position: relative;
}

.link:hover:after {
  width: 100%;
  height: 3px;
  display: block;
  content: "";
  z-index: 1;
  position: absolute;
  top: 66px;
  left: 0;
  background: #c1121f;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
  border-radius: 50px;
}

hr {
  background: #10223d;
  opacity: 0.25;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
  width: 100%;
  height: 3px;
  margin-top: 24px;
}
.my-cont {
  margin-top: 50px;
}
.bl-1,
.bl-2 {
  border: 1px solid;
  width: 48%;
  img {
    padding-bottom: 62px;
  }
}
.bl-1-text,
.bl-2-text {
  max-width: 592px;
  margin-left: 62px;
}

h2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 45px;
  line-height: 53px;
  color: #1d3557;
  padding-bottom: 24px;
}
p {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #1d3557;
  padding-bottom: 48px;
}
.my-butt {
  margin-left: calc(100% - 236px);
  padding-bottom: 42px;
}

@media only screen and (max-width: 1488px) {
  .bl-1,
  .bl-2 {
    img {
      padding-bottom: 37px;
    }
    .bl-1-text,
    .bl-2-text {
      padding-right: 20px;
    }
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 53px;
      color: #1d3557;
      padding-bottom: 24px;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 42px;
      color: #1d3557;
      padding-bottom: 48px;
    }
  }
}
@media only screen and (max-width: 1279px) {
  .my-butt {
    padding-bottom: 20px;
    margin-top: -33px;
  }
  .bl-1-text,
  .bl-2-text {
    margin-left: 23px;
  }
  .bl-1,
  .bl-2 {
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 37px;
      line-height: 40px;
      color: #1d3557;
      padding-bottom: 24px;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 23px;
      line-height: 33px;
      color: #1d3557;
      padding-bottom: 48px;
    }
  }
}
@media only screen and (max-width: 1024px) {
  .bl-1,
  .bl-2 {
    img {
      padding-bottom: 32px;
    }
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 38px;
      letter-spacing: 0.05em;

      color: #1d3557;
    }
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 38px;
      color: #1d3557;
    }
  }
}
@media only screen and (max-width: 767px) {
  .my-cont {
    flex-direction: column;
  }
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 6vw;
    line-height: 7vw;
    letter-spacing: 0.05em;

    color: #1d3557;
  }
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 4.2vw;
    line-height: 8vw;
    color: #1d3557;
  }
  .bl-1,
  .bl-2 {
   width: 100%;
  }
   .bl-2 {
   margin-top: 42px;
  }
}
</style>    