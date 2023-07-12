<template>
    <div class="itemsCenter ledger-tree-item">
        <div class="ledger-tree-item-img"> </div>
        <span style="flex: 1;">{{ label }}</span>
        <el-icon>
            <ElIconEditPen />
        </el-icon>
        <el-icon>
            <ElIconDelete />
        </el-icon>
    </div>
</template>
<script setup="props, ctx">
import { ref } from 'vue';

const props = defineProps({
  node: {},
});

const node = ref(props.node);
const { label } = node.value.data;

</script>
<style lang="scss" scoped>
.ledger-tree-item {
    padding: 0 8px;
    border: 1px solid #eee;
    height: 4em;

    .ledger-tree-item-img {
        width: 1em;
        height: 1em;
        background-color: #164;
        margin-right: 6px;
    }
}
</style>
