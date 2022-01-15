<template>
    <van-popup
        v-model="isShow"
        closeable
        position="bottom"
        @closed="resetData"
        :style="{ height: '38%' }"
    >
        <div class="mod-popup">
            <div class="mod-popup__header">添加跟进记录</div>

            <div class="mod-input-txt">
                <textarea
                    placeholder="请输入跟进内容（50字内）"
                    v-model="text"
                />
            </div>

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
            text: "",
        };
    },
    methods: {
        show() {
            this.isShow = true;

            // 默认提交按钮后 文案
        },
        resetData() {
            this.text = "";
            this.finallyMsg &&
                this.$toast({
                    message: this.finallyMsg,
                    icon: "checked",
                });
            this.finallyMsg = null;
        },

        confirm() {
            this.finallyMsg = "提交成功" || "服务出错";
            this.$emit("confirm", {});
            this.isShow = false;
        },
    },
};
</script>

<style scoped lang="less">
.mod-popup {
    .mod-input-txt {
        height: 166px;
        textarea {
            outline-style: none;
            border: none;
            background: #f6f6f6;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            padding: 15px;
            box-sizing: border-box;
            font-family: "Microsoft soft";
        }
    }
    .mod-footer-bnt {
        padding: 20px;
    }
}
</style>