<template>
  <div>
    <ShowPathPage
      :page="{ path: 'About Us', showIcon: true, section: 'Our History' }"
    />
    <aboutFirstPhoto />

    <div class="container-bg">
      <div class="container mx-auto">
        <div class="my-setings flex justify-between">
          <ItAllStartedWithADream class="Dream" />
          <AlwaysUpstream class="upstream" />
        </div>
      </div>
    </div>
    <Toward />
    <CorporateSocial />
  </div>
</template>

<script>
import aboutFirstPhoto from "./AboutHistoryModule/AboutHistoryMainPhoto.vue";
import ItAllStartedWithADream from "./AboutHistoryModule/ItAllStartedWithADream.vue";
import AlwaysUpstream from "./AboutHistoryModule/AlwaysUpstream.vue";
import Toward from "./AboutHistoryModule/Towards.vue";
import CorporateSocial from "./AboutHistoryModule/CorporateSocial.vue";
import ShowPathPage from "@/components/ui/ShowPathPage.vue";
export default {
  components: {
    aboutFirstPhoto,
    ItAllStartedWithADream,
    AlwaysUpstream,
    Toward,
    CorporateSocial,
    ShowPathPage,
  },
};
</script>


<style scoped lang="scss">
.upstream {
  margin-top: -130px;
}
.Dream {
  margin-top: 82px;
}
@media screen and (max-width: 1279px) {
  .upstream {
    margin-top: -85px;
  }
}
@media screen and (max-width: 1024px) {
  .upstream {
    margin-top: -45px;
  }
  .Dream {
    margin-top: 20px;
  }
}
@media screen and (max-width: 767px){
.my-setings {
  flex-direction: column-reverse;
}
.upstream {
  margin-top: 32px;
}
.Dream {
  max-width: 100%;
}
}
</style>
