<template>
  <div class="editprofilebox mt-10 mx-auto container" >
    <vue-collapsible-panel-group>
      <vue-collapsible-panel ref="dropdown" :expanded="expanded">
        <template #title>
          <div class="flex justify-between">
            <p class="question_title">
              <slot name="title"></slot>
            </p>
          </div>
        </template>
        <template #icon>
          <div >
            <img src="@/assets/icons/hideQuestions.svg" alt="">
          </div>
        </template>
        <template #content>
          <div>
            <div>
              <p class="question_body">
                <slot name="body"></slot>
              </p>
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

.question_title{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 56px;
  line-height: 66px;
  text-align: center;
  color: #1D3557;
}

.question_body{
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 32px;
  color: #1D3557;
  width: 70%;
  height: auto;
}


.editprofilebox{
  width:100%;
  border-radius: 24px;
  padding: 0px 0px 45px;
}

</style>