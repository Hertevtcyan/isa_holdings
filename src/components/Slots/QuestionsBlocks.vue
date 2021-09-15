<template>
  <div class="editprofilebox mt-10" >

    <vue-collapsible-panel-group>
      <vue-collapsible-panel ref="dropdown" :expanded="expanded">
        <template #title>
          <div class="flex justify-between">
            <p class="editprofiletitle">
              <slot name="title"></slot>
            </p>
          </div>
        </template>
        <template #icon>
          <div >
            <img src="@/assets/icons/hideQuestions.svg" alt="">
            <!-- <img v-if="showBody" src="@/assets/icons/dashboard/profile/x.svg" alt=""> -->
          </div>
        </template>
        <template #content>
          <div class="Editboxbody">
            <div>
              <slot name="body"></slot>
            </div>
          </div>
        </template>
      </vue-collapsible-panel>
    </vue-collapsible-panel-group>
  </div>
</template>
<script>
import {ref} from 'vue';
import {VueCollapsiblePanelGroup,VueCollapsiblePanel} from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
export default {
  setup(){
    const dropdown = ref('');
    const expanded = ref(false)
    return { expanded, dropdown }
  },
}
</script>
<style scoped>


</style>