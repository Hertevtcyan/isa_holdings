<template>
    <div>
        <div class="helping-left">
<PhotoSubTitleParagraphButt
              sub-title="Helping a space business reach for the stars"
              paragraph="We’ve financed a space electronics inventor to bring satellite technology to market."
              :showButton="true"
              :showPhoto="true"
              :image="{
                src: 'about/aboutManagment/helpingBusines.png',
               alt: 'sdfsdfsdsdf',
               }" />
        </div>
        <div class="helping-rigth">

        </div>
    </div>
</template>

<script>
import PhotoSubTitleParagraphButt from '@/components/ui/PhotoSubTitleParagraphButt.vue'
export default {
    components: {PhotoSubTitleParagraphButt}
}
</script>
