<template>
    <div class="tip custom-block">
        <p class="custom-block-title" v-text="title"></p>
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
});
</script>

<style scoped>
.custom-block.tip {
    padding: 8px 16px;
    background-color: rgba(64, 158, 255, .1);
    border-radius: 4px;
    border-left: 5px solid #409eff;
    margin: 20px 0;
}

.custom-block .custom-block-title {
    font-weight: 700;
}

p:first-child {
    margin-top: 0;
}

p,
ol,
ul {
    margin: 1rem 0;
    line-height: 1.7;
}

.custom-block p:not(.custom-block-title) {
    font-size: .9rem;
}

p:last-child {
    margin-bottom: 0;
}
</style>
