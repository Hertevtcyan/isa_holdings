<template>
  <div class="btn-group">
    <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.name !== undefined">
      {{ selectedOption.name }}
      <img src="../assets/icons/hideQuestions.svg" class="caret" />
    </li>

    <li @click="toggleMenu()" class="dropdown-toggle dropdown-toggle-placeholder" v-if="selectedOption.name === undefined">
      {{placeholderText}}
      <img src="../assets/icons/hideQuestions.svg" class="caret" />
    </li>

    <ul class="dropdown-menu" v-if="showMenu">
      <li v-for="(option, idx) in options" :key="idx">
        <a href="javascript:void(0)" @click="updateOption(option)">
          {{ option.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: {
        name: '',
      },
      showMenu: false,
      placeholderText: 'Please select an item',
    }
  },
  props: {
    options: {
      type: [Array, Object]
    },
    selected: {},
    placeholder: [String],
    closeOnOutsideClick: {
      type: [Boolean],
      default: true,
    },
  },

  mounted() {
    this.selectedOption = this.selected;
    if (this.placeholder)
    {
      this.placeholderText = this.placeholder;
    }

    if (this.closeOnOutsideClick) {
      document.addEventListener('click', this.clickHandler);
    }
  },

  beforeDestroy() {
    document.removeEventListener('click', this.clickHandler);
  },

  methods: {
    updateOption(option) {
      this.selectedOption = option;
      this.showMenu = false;
      this.$emit('updateOption', this.selectedOption);
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    clickHandler(event) {
      const { target } = event;
      const { $el } = this;

      if (!$el.contains(target)) {
        this.showMenu = false;
      }
    },
  }
}
</script>

<style scoped>

</style>


