<template>
    <div> 
        <AboutHistory />
        <AboutStrategy />
    </div>
</template>

<script>

import AboutHistory from '../components/AboutPage/AboutHistory/AboutHIstory.vue'
import AboutStrategy from "../components/AboutPage/AboutStrategy/AboutStrategy";

export default {
    components: {
      AboutStrategy,
        AboutHistory
    },
}
</script>
