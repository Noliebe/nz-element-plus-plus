<template>
  <div>
    <template v-for="(item, index) in formData.nodeList" :key="index">
      <div class="row-wrap flex-ac">
        <el-card shadow="hover" class="flex1">
          <component :is="componentList.find(cObj=>cObj.name === item.componentName).component"
             v-model="item.value"
            :node="item" />
        </el-card>
        <div class="row-btn-wrap">
          <el-dropdown>
            <el-button type="primary" circle @click="addRowText(index)" >
              <el-icon>
                <el-icon-plus />
              </el-icon>
            </el-button>

            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click.stop="addRowImg(index)">增加图片</el-dropdown-item>
                <el-dropdown-item @click.stop="dleeteRow(index)" divided><span
                    class="danger-text">删除此行</span></el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { reactive, watch } from 'vue';
import textNode from './text-node.vue';
import imageNode from './image-node.vue';

const componentList = [
  {
    name: 'text',
    component: textNode,
  },
  {
    name: 'image',
    component: imageNode,
  },
];

const props = defineProps({
  modelValue: Array,
  props: Object,
});

let nodeIdSeed = 0;

const getNoodId = () => {
  nodeIdSeed += nodeIdSeed;
  return nodeIdSeed;
};
const formData = reactive({
  nodeList: [{
    nodeId: getNoodId(),
    componentName: 'text',
    value: '',
  }],
});

watch(
  () => props.modelValue,
  (nV) => {
    if (nV && nV.length) {
      formData.nodeList = nV;
    } else {
      formData.nodeList = [{
        nodeId: getNoodId(),
        componentName: 'text',
        value: '',
      }];
    }
  },
);

const addRowText = (index) => {
  formData.nodeList.splice(index + 1, 0, {
    nodeId: getNoodId(),
    componentName: 'text',
    value: '',
  });
};

const addRowImg = (index) => {
  formData.nodeList.splice(index + 1, 0, {
    nodeId: getNoodId(),
    componentName: 'image',
    value: '',
  });
};

const dleeteRow = (index) => {
  formData.nodeList.splice(index, 1);
};

const emit = defineEmits(['update:modelValue']);
const handleChange = () => {
  emit('update:modelValue', formData.nodeList);
};

watch(
  () => formData.nodeList,
  () => {
    handleChange();
  },
);
</script>

<style scoped>
.danger-text {
  color: var(--el-color-danger);
}

.flex {
  display: flex;
}

.flex1 {
  flex: 1;
}

.flex-ac {
  display: flex;
  align-items: center;
}

.row-wrap+.row-wrap {
  margin-top: 10px;
}

.row-btn-wrap {
  margin-left: 10px
}
</style>
