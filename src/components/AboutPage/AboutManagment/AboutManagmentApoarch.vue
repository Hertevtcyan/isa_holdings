<template>
  <div>
    <ShowPathPage
      :page="{ path: 'About Us', section: 'Management Approach' }"
    />
    <AboutManagmentMainPhoto />
    <div class="container mx-auto px-4">
      <div class="flex justify-between my-container">
            <ManagmentMainText />
            <ManagmentMainPhoto/>
      </div>
    </div>
  </div>
</template>

<script>
import ManagmentMainText from "./AboutManagmentModules/ManagmentMainText.vue";
import ShowPathPage from "@/components/ui/ShowPathPage.vue";
import ManagmentMainPhoto from "./AboutManagmentModules/ManagmentMainPhoto.vue"
import AboutManagmentMainPhoto from "./AboutManagmentModules/AboutManagmentMainPhoto";
export default {
  components: {
    AboutManagmentMainPhoto,
    ManagmentMainText,
    ShowPathPage,
    ManagmentMainPhoto
  },
};
</script>

<style scoped lang="scss">
.my-container{
    margin-top: 56px;
}  
</style>
