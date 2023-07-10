<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (value) => ['small', 'medium', 'large'].indexOf(value) !== -1,
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    const reactProps = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': reactProps.primary,
        'storybook-button--secondary': !reactProps.primary,
        [`storybook-button--${reactProps.size || 'medium'}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: reactProps.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>
