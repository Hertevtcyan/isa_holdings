<template>
    <div>
        <CompanyNewsMainPhoto/>
        <DateJulyArticle/>
        <HelpingBlock/>
        <DateAugArticle/>
        <AugBlocks/>
        <Building/>
    </div>
</template>

<script>
import CompanyNewsMainPhoto from './CompanyNewsModule/CompanyNewsMainPhoto.vue'
import DateJulyArticle from './CompanyNewsModule/DateJulyArticle.vue'
import DateAugArticle from './CompanyNewsModule/DateAugArticle.vue'
import HelpingBlock from './CompanyNewsModule/HelpingBlock.vue'
import AugBlocks from './CompanyNewsModule/AugBlocks.vue'
import Building from './CompanyNewsModule/MyBuilding.vue'
export default {
    components: {
        CompanyNewsMainPhoto,
        DateJulyArticle,
        HelpingBlock,
        DateAugArticle,
        AugBlocks,
       Building
        }
}
</script>
