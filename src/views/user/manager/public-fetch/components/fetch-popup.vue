<template>
    <div class="fetch-prop">
        <van-popup
            v-model="isShow"
            closeable
            position="right"
            :style="{ height: '100%' }"
        >
            <div class="cardbox">
                <div class="client-detail fz-12">
                    <!-- 客户基本信息 -->
                    <div class="flex ac user">
                        <div class="fz-20 c-black name">姚成平</div>
                        <div class="flex ac tags">
                            <div class="fz-13 tag">大客户</div>
                            <div class="fz-13 tag">还款准时</div>
                        </div>
                    </div>
                    <div class="fz-15 c-black flex ac tel">
                        <van-icon name="phone-o" size="18" />
                        <span class="tel-txt">18736463012</span>
                    </div>

                    <!-- 贷款信息 -->
                    <div class="flex ac money-count">
                        <div class="flex f-d-c box-piece">
                            <div class="">
                                <span class="fz-26 fw-b">3</span>
                                <span class="fz-12">次</span>
                            </div>
                            <div class="fz-12 txt-tips-color">流转次数</div>
                        </div>
                    </div>

                    <div class="li__divider mt20"></div>
                </div>
            </div>

            <!-- 跟进记录  -->
            <div class="u-page">
                <com-steps />
            </div>

            <div class="mod-footer-bnt">
                <van-button round block type="primary" @click="confirm"
                    >添加至我的名片</van-button
                >
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: "fetchPopup",
    data() {
        return {
            isShow: false,
            params: {},
        };
    },
    methods: {
        show(params) {
            this.params = params;
            this.isShow = true;
        },
        confirm() {
            this.$toast({
                message: "添加成功",
                icon: "checked",
            });
            this.isShow = false;
            this.$emit("confirm", {});
        },
    },
};
</script>

<style lang="less" scoped>
.fetch-prop {
    .cardbox {
        padding: 0 15px;
    }

    .mod-footer-bnt {
        padding: 20px;
        margin: 30px 0;
    }
}
</style>