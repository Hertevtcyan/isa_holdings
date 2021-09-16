<template>
  <div class="HeaderNews py-64">
    <div class="sizeHeaderNews">
      <h1 class="HeaderNewsTitles w-full">Transforming Risk Into Opportunity<br/> From Europe To Asia</h1>
      <ReadMoreButton type="read" class="read">Read more</ReadMoreButton>
    </div>
  </div>
</template>

<script>
import ReadMoreButton from "../ui/ReadMoreButton";
export default {
  components: {ReadMoreButton}
}
</script>

<style scoped>
.HeaderNews{
  background: url('../../assets/icons/bildings.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 720px;
  box-shadow: 0px 35px 45px rgba(7, 11, 27, 0.75);
}

.sizeHeaderNews{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.HeaderNewsTitles{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 66px;
  line-height: 78px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);
}

.read{
  margin:70px auto ;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
}
</style>