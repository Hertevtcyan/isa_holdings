<template>
  <div class="blue-history flex items-center">
      <div class="card-history container mx-auto">
        <div class="active-history">
          <div class="history-text flex">
            <p>{{page.path}}</p>
            <img
              src="@/assets/about/aboutHistory/pathHistory.png"
              class="history-icon"
              alt=""
            />
            <p>{{page.section}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        page:{
            type:Object,
        }
    }
}
</script>

<style lang="scss">
$colorText: #ffffff;
.blue-history {
  background: #10223d;
  width: 100%;
  height: 41px;

  p {
    font-family: Rubik;
    font-size: 18px;
    color: $colorText;
    margin-right: 11px;
  }
  img {
    padding-right: 11px;
    //   widows: 13px;
    //   height: 13px;
  }
}

</style>