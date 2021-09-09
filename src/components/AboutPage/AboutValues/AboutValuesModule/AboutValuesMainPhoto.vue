<template>
    <div>
        <ShowPathPage :page="{path: 'About Us', section: 'Vision and Values'}"/>
        <ShowBackgroundImage img="mission" :text="{title:'Vision and Values', text:'At Isa Holding, we advance sustainable economic growth and financial opportunity.' }" />
    </div>
</template>

<script>
import ShowPathPage from '@/components/ui/ShowPathPage'
import ShowBackgroundImage from '@/components/ui/ShowBackgroundImage'
export default {
    components: {
        ShowPathPage,
        ShowBackgroundImage
    }
}
</script>
