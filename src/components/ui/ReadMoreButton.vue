<template>
  <button class="btn" :class="`btn__${$props.type} ${$props.templateStyle}`">
    <div v-if="$props.type === 'text'" class="line">
      <img src="../../assets/icons/button_line.svg" />
    </div>
    <div v-else></div>

    <slot />
  </button>
</template>

<script>
export default {
  props: {
    templateStyle: {
      type: String,
    },
    type: {
      type: String,
      validator: (type) =>
        ["read", "view", "transparentView", "text"].includes(type),
    },
  },
};
</script>

<style scoped>
.btn {
  width: 236px;
  height: 73px;
}

.btn__read,
.btn__view {
  background: rgba(193, 18, 31, 0.85);
  backdrop-filter: blur(1px);
  color: #fff;
  font-size: 24px;
}

.btn__transparentView {
  border: 1px solid #ffffff;
  box-sizing: border-box;
  /* backdrop-filter: blur(1px); */
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
}

.btn__text {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #1d3557;
  position: relative;
}

.btn__text .line {
  position: absolute;
  right: 28px;
  top: 30px;
}

@media screen and (max-width: 1487px) {
  .media {
    width: 180px;
    height: 60px;
  }
  .managment-btn{
    width: 140px;
    height: 40px;
}
}
@media screen and (max-width: 1279px) {
  .history-vision {
    width: 180px;
    height: 60px;
  }
  .media{
    width: 140px;
    height: 40px;
  }
  .media-manager {
    width: 180px;
    height: 60px;
  }
  .building-first{
    width: 140px;
    height: 40px;
  }
  
}
@media screen and (max-width: 1024px) {
  .history-vision {
    width: 140px;
    height: 40px;
  }
  .mission{
    width: 140px;
    height: 40px;
  }
  .media-manager {
    width: 140px;
    height: 50px;
  }
  .aug-block{
     width: 140px;
    height: 50px;
  }
  .aug-block  .line{
      right: 7px;
    top: 25px;
    }
    
  
}

</style>