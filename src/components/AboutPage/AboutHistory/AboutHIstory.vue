<template>
  <div>
    <aboutFirstPhoto />
    <div class="container-bg">
      <div class="container mx-auto px-4">
        <div class="flex justify-between ">
          <ItAllStartedWithADream class="Dream" />
          <AlwaysUpstream class="upstream" />
        </div>
      </div>
    </div>
    <Toward/>
  </div>
</template>

<script>
import aboutFirstPhoto from "./AboutHistoryModule/AboutHistoryMainPhoto.vue";
import ItAllStartedWithADream from "./AboutHistoryModule/ItAllStartedWithADream.vue";
import AlwaysUpstream from "./AboutHistoryModule/AlwaysUpstream.vue";
import Toward from "./AboutHistoryModule/Towards.vue"
export default {
  components: {
    aboutFirstPhoto,
    ItAllStartedWithADream,
    AlwaysUpstream,
    Toward
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
