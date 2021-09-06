<template>
  <img :src="required(`@/assets/${$props.src}`)" :alt="$props.alt">
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>