<template>
    <van-popup
        v-model="isShow"
        closeable
        position="bottom"
        :style="{ height: '38%' }"
    >
        <div class="mod-fliter">
            <div class="mod-fliter__header fz-20 fw-b">添加跟进记录</div>

            <div class="mod-input-txt">请输入</div>

            <div class="mod-footer-bnt">
                <van-button round block type="primary" @click="confirm"
                    >确定</van-button
                >
            </div>
        </div>
    </van-popup>
</template>

<script>
export default {
    name: "comAddRecord",
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        show() {
            this.isShow = true;
        },
        resetData() {},

        confirm() {
            this.isShow = false;
            this.$emit("confirm", {});
        },
    },
};
</script>

<style scoped lang="less">
.mod-fliter {
    &__header {
        padding: 15px;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06);
    }

    .mod-input-txt {
        height: 166px;
        background: #f6f6f6;
    }
    .mod-footer-bnt {
        padding: 20px;
    }
}
</style>