<template>
  <div>
    <ShowPathPage
      :page="{
        path: 'About Us',
        showIcon: true,
        section: 'Management Approach',
      }"
    />
    <AboutManagmentMainPhoto />
    <div class="container mx-auto">
      <div class="flex justify-between my-container">
        <div class="approach-risk">
          <div class="apporach">Management Approach</div>
          <div class="risk">Pass through</div>
        </div>
        <div class="f flex justify-between container">
          <ManagmentMainText />
        <ManagmentMainPhoto />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import ManagmentMainText from "./AboutManagmentModules/ManagmentMainText.vue";
import ShowPathPage from "@/components/ui/ShowPathPage.vue";
import ManagmentMainPhoto from "./AboutManagmentModules/ManagmentMainPhoto.vue";
import AboutManagmentMainPhoto from "./AboutManagmentModules/AboutManagmentMainPhoto";
export default {
  components: {
    AboutManagmentMainPhoto,
    ManagmentMainText,
    ShowPathPage,
    ManagmentMainPhoto,
  },
};
</script>

<style scoped lang="scss">
.my-container {
  margin-top: 56px;
}
.approach-risk {
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.15);
  width: 100%;
  height: 170px;
  // margin-left: calc(100% - 411px);
  display: none;
  // padding-top: 120px;
}
.apporach {
  background: #1d3557;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.08);
  width: 100%;
  height: 85px;
  text-align: center;
  line-height: 85px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  color: #ffffff;
}
.risk {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  color: #1d3557;
  line-height: 85px;
  text-align: center;
}

@media screen and (max-width: 767px) {
  .my-container {
    flex-direction: column;
    display: block
  }
  .approach-risk {
    display: block;
  }
  .f{
    flex-direction: column;
    display: block
  }
}
</style>
