<template>
  <button
    class="btn"
  >

    <slot />
  </button>
</template>

<script>
export default {
  props:{
    type: String
  }
}
</script>