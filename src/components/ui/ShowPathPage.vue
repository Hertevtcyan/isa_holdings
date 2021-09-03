<template>
  <div class="blue-history flex items-center">
      <div class="card-history container mx-auto px-4">
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

<style>

</style>