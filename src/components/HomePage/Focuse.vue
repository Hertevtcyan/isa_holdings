<template>
  <div class="w-full focus">
    <div class="rounded overflow-hidden shadow-lg card">
      <h1 class="ml-16 mt-20">Focuse on Stregth</h1>
      <p class="ml-16 mt-4">Our seasoned team of specialists is<br>
        dedicated to helping our clients — both ,<br>
        issuers and investors — achieve the best <br>
        possible results in all market conditions and <br>
        find stability for their future growth.</p>
      <ReadMoreButton type="transparentView" class="mt-16 transparentView">View More</ReadMoreButton>
    </div>
  </div>
</template>

<script>
import Children from "./Block_children/Children";
import ReadMoreButton from "../ui/ReadMoreButton";

export default {
  components:{
    Children,
    ReadMoreButton
  },

}
</script>

<style scoped>
.focus img{
}

.focus{
  background: url("../../assets/icons/123.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 720px;
  position: relative;
}

.card{
  position: absolute;
  width: 716px;
  background: #1D3557;
  box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
  top: 30%;
  left: 12%;
}

.card h1{
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 57px;
  color: #FFFFFF;
}

.card p{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #FFFFFF;
}

.transparentView{
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  margin-bottom: 70px;
  margin-left: 53%;
}

</style>