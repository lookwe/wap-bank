<template>
    <!-- 用户类型 - 经理 -->
    <div class="mod-user-manager">
        <van-button type="primary" block @click="onToPage({ name: 'myCard' })"
            >我的名片2</van-button
        >
        <br />
        <van-button type="primary" block @click="onToPage({ name: 'myClient' })"
            >我的客户</van-button
        >
        <br />
        <van-button type="primary" block @click="onToPage({ name: 'myPlan' })"
            >我的进件</van-button
        >
        <br />

        <van-button
            type="primary"
            block
            @click="onToPage({ name: 'publicFetch' })"
            >公害捞取</van-button
        >
    </div>
</template>
 
<script>
export default {
    name: "manager",
    data() {
        return {};
    },
    methods: {
        onToPage(option) {
            const router = {
                ...option,
                // ...
            };
            this.$router.push(router);
        },
    },
};
</script>
 
<style scoped lang="less">
@import "../style/index.less";
.mod-user-manager {
}
</style>