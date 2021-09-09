<template>
  <div>
    <ShowPathPage :page="{path:'About Us',section:'Our History'}"/>
    <aboutFirstPhoto />
    
    <div class="container-bg">
      <div class="container mx-auto ">
        <div class="flex justify-between ">
          <ItAllStartedWithADream class="Dream" />
          <AlwaysUpstream class="upstream" />
        </div>
      </div>
    </div>
    <Toward/>
    <CorporateSocial/>
  </div>
</template>

<script>
import aboutFirstPhoto from "./AboutHistoryModule/AboutHistoryMainPhoto.vue";
import ItAllStartedWithADream from "./AboutHistoryModule/ItAllStartedWithADream.vue";
import AlwaysUpstream from "./AboutHistoryModule/AlwaysUpstream.vue";
import Toward from "./AboutHistoryModule/Towards.vue"
import CorporateSocial from "./AboutHistoryModule/CorporateSocial.vue"
import ShowPathPage from '@/components/ui/ShowPathPage.vue'
export default {
  components: {
    aboutFirstPhoto,
    ItAllStartedWithADream,
    AlwaysUpstream,
    Toward,
    CorporateSocial,
    ShowPathPage
  },
};
</script>


<style scoped lang="scss">

.container-bg {
  background: #e5e5e5;
}
.upstream {
  margin-top: -130px;
}
.Dream {
  margin-top: 82px;
}
</style>
