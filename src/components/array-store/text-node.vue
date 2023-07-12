<template>
    <el-input type="text" v-model="value" />
</template>
<script setup>
// import { reactive, watch } from 'vue'
import { computed } from 'vue';

const props = defineProps({
  modelValue: String,
  node: Object,
});

const emit = defineEmits(['update:modelValue']);
const handleChange = (nV) => {
  emit('update:modelValue', nV);
};
const value = computed({
  get: () => props.modelValue,
  set: (nV) => {
    handleChange(nV);
  },
});

</script>
