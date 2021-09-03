<template>
  <button
    class="btn"
    :class="`btn__${$props.type}`"
  >
    <div v-if="$props.type === 'text'" class="line">
      <img src="../../assets/icons/button_line.svg">
    </div>
    <div v-else>
    </div>

    <slot />
  </button>
</template>

<script>
export default {
  props:{
    type:{
      type: String,
      validator: (type)=>
          [
            'read',
            'view',
            'transparentView',
            'text'
          ].includes(type)
    }

  }
}
</script>

<style scoped>

.btn{
  width: 236px;
  height: 73px;
}

.btn__read, .btn__view{
  background: rgba(193, 18, 31, 0.85);
  backdrop-filter: blur(1px);
}

.btn__transparentView{
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  backdrop-filter: blur(1px);
}

.btn__text{
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #1D3557;
  position: relative;
}

.btn__text .line{
  position: absolute;
  right: 28px;
  top: 30px;
}




</style>