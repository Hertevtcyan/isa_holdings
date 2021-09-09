<template>
    <div>
        <ShowBackgroundImage img="companyNews" :text="{title:'Who We Ae', text:'ISA Holding consists of several companies, representing seven diverse sectors and offering exceptional products and services aimed at enriching lives.' }" />
    </div>
</template>

<script>
import ShowBackgroundImage from '@/components/ui/ShowBackgroundImage.vue'
export default {
    components: {ShowBackgroundImage}
}
</script>
