<template>
    <div>
        <CompanyNewsMainPhoto/>
        <DateArticle/>
        <HelpingBlock/>
    </div>
</template>

<script>
import CompanyNewsMainPhoto from './CompanyNewsModule/CompanyNewsMainPhoto.vue'
import DateArticle from './CompanyNewsModule/DateArticle.vue'
import HelpingBlock from './CompanyNewsModule/HelpingBlock.vue'
export default {
    components: {
        CompanyNewsMainPhoto,
        DateArticle,
        HelpingBlock
        }
}
</script>
