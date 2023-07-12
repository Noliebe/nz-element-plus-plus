<template>
    <div class="ledger-tree-group">
        <div v-for="item in stack" :key="item.nodeId" class="ledger-tree-body">
            <div class="ledger-tree-title">一级分类</div>
            <div class="ledger-tree-item-group flex1">
                <ledgerTreeItem
                    v-for="child in item" :key="child.nodeId" :node="child"
                    :render-content="renderContent"
                    @node-expand="handleNodeExpand"
                    @click="appendBrother(child)"
                />
            </div>
            <div class="ledger-tree-footer">新增分类</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ledgerTreeItem from './ledger-tree-item.vue';
import TreeStore from './model/tree-store';

const props = defineProps({
  data: Array,
});
const store = ref(new TreeStore({
  data: props.data,
}));
const root = ref(store.value.root);

const stack = ref([root.value.childNodes]);

const appendBrother = (child) => {
  stack.value.splice(child.level);
  stack.value.push(child.childNodes);
};

</script>
<style lang="scss" scoped>
.flex {
    display: flex;
}

.flex1 {
    flex: 1
}

.flexCol {
    display: flex;
    flex-direction: column;
}

.itemsCenter {
    display: flex;
    align-items: center;
}

.flexCenter {
    display: flex;
    flex-direction: center;
    align-items: center;
}

.ledger-tree-group {
    margin: 0 12px;
    border: 1px solid #eee;
    border-collapse: collapse;
    display: table;
    height: 100%;

    .ledger-tree-body {
        width: 300px;
        height: 100%;
        border: 1px solid #164;
        display: inline-flex;
        flex-direction: column;

        .ledger-tree-title {
            font-weight: 700;
            padding: 6px;
            font-size: 16px;
            padding: 14px 12px 8px;
        }

        .ledger-tree-footer {
            text-align: center;
            padding: 12px 0;
            border: 1px solid #eee;
        }
    }

}
</style>
