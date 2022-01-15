<template>
    <div class="com-state">
        <template v-if="type == 1"
            ><span class="round-dot"></span>申请中
        </template>

        <template v-if="type == 2"
            ><span class="round-dot green"></span>已放款
        </template>

        <template v-if="type == 3"
            ><span class="round-dot red"></span>已拒绝
        </template>
    </div>
</template>

<script>
export default {
    name: "comState",
    props: {
        type: {
            type: [String, Number],
            default: 1,
        },
    },
};
</script>
<style lang="less" scoped>
</style>