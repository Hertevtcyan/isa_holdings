<template>
    <div class="selection">
        <FirstFooter img="career" :mySetings="false"  :button="false" :properties="{title: 'Corporate Social Responsibility', text: 'Selection for positions at AW Rostamani is based on merit, and shortlisted candidates are interviewed by a recruitment selection panel.'}"/>
    </div>
</template>

<script>
import FirstFooter from '@/components/ui/FirstFooter.vue'
export default {
    components: {
        FirstFooter
    }
}
</script>

<style scoped>
.selection{
    margin-top: 115px;
}
</style>
