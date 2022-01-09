<template>
    <!-- 贷款详情 -->
    <van-popup
        v-model="isShow"
        position="right"
        :style="{ width: '100%', height: '100%' }"
    >
        <div class="mod-loan-details">123</div>
    </van-popup>
</template>
 
<script>
export default {
    name: "loanDetails",
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        show() {
            this.isShow = true;
        },
    },
};
</script>
 
<style scoped lang="less">
</style>