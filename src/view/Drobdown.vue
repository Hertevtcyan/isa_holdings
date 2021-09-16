<!--<template>-->
<!--  <div class="btn-group">-->
<!--    <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name !== undefined">-->
<!--      {{ selectedOption.name }}-->
<!--      <span class="caret"></span>-->
<!--    </li>-->

<!--    <li @click="toggleMenu()" class="dropdown-toggle dropdown-toggle-placeholder" v-if="selectedOption.name === undefined">-->
<!--      {{placeholderText}}-->
<!--      <span class="caret"></span>-->
<!--    </li>-->

<!--    <ul class="dropdown-menu" v-if="showMenu">-->
<!--      <li v-for="(option, idx) in options" :key="idx">-->
<!--        <a href="javascript:void(0)" @click="updateOption(option)">-->
<!--          {{ option.name }}-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      selectedOption: {-->
<!--        name: '',-->
<!--      },-->
<!--      showMenu: false,-->
<!--      placeholderText: 'Please select an item',-->
<!--    }-->
<!--  },-->
<!--  props: {-->
<!--    options: {-->
<!--      type: [Array, Object]-->
<!--    },-->
<!--    selected: {},-->
<!--    placeholder: [String],-->
<!--    closeOnOutsideClick: {-->
<!--      type: [Boolean],-->
<!--      default: true,-->
<!--    },-->
<!--  },-->

<!--  mounted() {-->
<!--    this.selectedOption = this.selected;-->
<!--    if (this.placeholder)-->
<!--    {-->
<!--      this.placeholderText = this.placeholder;-->
<!--    }-->

<!--    if (this.closeOnOutsideClick) {-->
<!--      document.addEventListener('click', this.clickHandler);-->
<!--    }-->
<!--  },-->

<!--  beforeDestroy() {-->
<!--    document.removeEventListener('click', this.clickHandler);-->
<!--  },-->

<!--  methods: {-->
<!--    updateOption(option) {-->
<!--      this.selectedOption = option;-->
<!--      this.showMenu = false;-->
<!--      this.$emit('updateOption', this.selectedOption);-->
<!--    },-->

<!--    toggleMenu() {-->
<!--      this.showMenu = !this.showMenu;-->
<!--    },-->

<!--    clickHandler(event) {-->
<!--      const { target } = event;-->
<!--      const { $el } = this;-->

<!--      if (!$el.contains(target)) {-->
<!--        this.showMenu = false;-->
<!--      }-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->


<!--.btn-group a:hover {-->
<!--  text-decoration: none;-->
<!--}-->

<!--.dropdown-toggle {-->
<!--  color: #636b6f;-->
<!--  min-width: 100%;-->
<!--  padding: 10px 20px 10px 10px;-->
<!--  text-transform: none;-->
<!--  font-weight: 300;-->
<!--  margin-bottom: 7px;-->
<!--  border: 0;-->
<!--  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);-->
<!--  background-size: 0 2px, 100% 1px;-->
<!--  background-repeat: no-repeat;-->
<!--  background-position: center bottom, center calc(100% - 1px);-->
<!--  background-color: transparent;-->
<!--  transition: background 0s ease-out;-->
<!--  float: none;-->
<!--  box-shadow: none;-->
<!--  border-radius: 0;-->
<!--  white-space: nowrap;-->
<!--  text-overflow: ellipsis;-->
<!--  overflow: hidden;-->
<!--}-->
<!--.dropdown-toggle:hover {-->
<!--  background: #e1e1e1;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.dropdown-menu {-->
<!--  position: absolute;-->
<!--  top: 100%;-->
<!--  left: 0;-->
<!--  z-index: 1000;-->
<!--  float: left;-->
<!--  min-width: 100%;-->
<!--  padding: 5px 0;-->
<!--  margin: 2px 0 0;-->
<!--  list-style: none;-->
<!--  font-size: 14px;-->
<!--  text-align: left;-->
<!--  background-color: #fff;-->
<!--  border: 1px solid #ccc;-->
<!--  border-radius: 4px;-->
<!--  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);-->
<!--  background-clip: padding-box;-->
<!--}-->

<!--.dropdown-menu > li > a {-->
<!--  padding: 10px 30px;-->
<!--  display: block;-->
<!--  clear: both;-->
<!--  font-weight: normal;-->
<!--  line-height: 1.6;-->
<!--  color: #333333;-->
<!--  white-space: nowrap;-->
<!--  text-decoration: none;-->
<!--}-->
<!--.dropdown-menu > li > a:hover {-->
<!--  background: #efefef;-->
<!--  color: #409FCB;-->
<!--}-->

<!--.dropdown-menu > li {-->
<!--  overflow: hidden;-->
<!--  width: 100%;-->
<!--  position: relative;-->
<!--  margin: 0;-->
<!--}-->

<!--.caret {-->
<!--  width: 0;-->
<!--  position: absolute;-->
<!--  top: 19px;-->
<!--  height: 0;-->
<!--  margin-left: -24px;-->
<!--  vertical-align: middle;-->
<!--  border-top: 4px dashed;-->
<!--  border-top: 4px solid \9;-->
<!--  border-right: 4px solid transparent;-->
<!--  border-left: 4px solid transparent;-->
<!--  right: 10px;-->
<!--}-->

<!--li {-->
<!--  list-style: none;-->
<!--}-->
<!--</style>-->


<template>
  <div class="aselect" :data-value="value" :data-list="list">
    <div class="selector" @click="toggle()">
      <div class="label">
        <span>{{ value }}</span>
      </div>
      <div class="arrow" :class="{ expanded : visible }"></div>
      <div :class="{ hidden : !visible, visible }">
        <ul>
          <li :class="{ current : item === value }" v-for="item in list" @click="select(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'aselect',
  data: {
    value: 'Select a Fruit',
    list: ["Orange","Apple","Kiwi", "Lemon", "Pineapple"],
    visible: false
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: #f9f9f9;
  text-align: center;
  font-size: 36px;
  line-height: 1;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: "Mogra";
  margin-bottom: 0;
  text-shadow: 3px 4px 0px rgba(0,0,0,0.3);
}

.aselect {
  width: 280px;
  margin: 20px auto;
.selector {
  border-bottom: 1px solid gainsboro;

  position: relative;
  z-index: 1;
.arrow {
  position: absolute;
  right: 10px;
  top: 40%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #888;
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
}
.expanded {
  transform: rotateZ(180deg) translateY(2px);
}
.label {
  display: block;
  padding: 12px;
  font-size: 16px;
  color: #888;
}
}
ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  border: 1px solid gainsboro;
  position: absolute;
  z-index: 1;
  background: #fff;
}
li {
  padding: 12px;
  color: #666;
&:hover {
   color: white;
   background: red;
 }
}
.current {
  background: #eaeaea;
}
.hidden {
  visibility: hidden;
}
.visible {
  visibility: visible;
}
}
</style>
