<template>
  <div>
    <div>
      <NewsMediaMainPhoto />
    </div>
    <div
      class="
        corporate-media
        flex
        container
        justify-between
        mx-auto
        items-center
      "
    >
      <div :class="{ active: showCorporateBlock }" class="corporate">
        <div class="btn" @click="showCorporate">
          <TextRedLine
            componentStyle="new-corporate"
            subTitle="Corporate"
            paragraph="Browse through our images of activities throughout the Group"
          />
        </div>
      </div>
      <div :class="{ active: showMediaBlock }" class="my-media">
        <div class="btn" @click="showMedia">
          <TextRedLine
            componentStyle="showMediaBlock"
            subTitle="Media Kit"
            paragraph="Are you one of our partners? Download our official logo and corporate brand guidelines."
          />
        </div>
      </div>
    </div>
    <div v-if="showCorporateBlock">
      <div class="corporate-blo container mx-auto">
        <FirstSlider />
      </div>
      <MobileManager />
      <div class="container mx-auto">
        <LastSlider />
      </div>
      <FirstFooter />
    </div>

    <div v-if="showMediaBlock" class="media-downloads container mx-auto">
      <DownloadBrands />
    </div>
  </div>
</template>



<script>
import NewsMediaMainPhoto from "./NewsMediaModules/NewsMediaMainPhoto.vue";
import TextRedLine from "@/components/ui/TextRedLine.vue";
import FirstSlider from "./Corporate/FirstSLider.vue";
import LastSlider from "./Corporate/LastSlider.vue";
import DownloadBrands from "./MediaDownload/DownloadBrands.vue";
import MobileManager from "./Corporate/MobileManager.vue";
import FirstFooter from "./Corporate/FirstFooter.vue";
export default {
  components: {
    NewsMediaMainPhoto,
    TextRedLine,
    FirstSlider,
    LastSlider,
    DownloadBrands,
    MobileManager,
    FirstFooter,
  },
  data() {
    return {
      showCorporateBlock: true,
      showMediaBlock: false,
    };
  },

  methods: {
    showCorporate() {
      this.showCorporateBlock = true;
      this.showMediaBlock = false;
    },
    showMedia() {
      this.showMediaBlock = true;
      this.showCorporateBlock = false;
    },
  },
};
</script>


<style scoped>
.corporate,
.my-media {
  width: 626px;
  margin-top: 56px;
}
.btn {
  /* max-width: 626px; */
  cursor: pointer;
}
.active {
  opacity: 0.2;
}
</style>
