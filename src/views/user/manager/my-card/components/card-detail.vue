<template>
    <div class="card-detail">
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

                        <div class="flex f-d-c box-piece">
                            <div class="">
                                <span class="fz-26 fw-b">5</span>
                                <span class="fz-12">天</span>
                            </div>
                            <div class="fz-12 txt-tips-color">持有天数</div>
                        </div>
                    </div>

                    <div class="u-page bg-grey mt20">
                        <div class="flex jsb">
                            <div>
                                <span class="fz-17 pr15">王志</span>
                                <span class="fz-12 txt-tips-color"
                                    >财务经理</span
                                >
                            </div>
                            <div class="fz-15">
                                <span class="round-dot green"></span>已放款
                            </div>
                        </div>
                        <div class="fz-15 txt-tips-color mt15">
                            深圳市腾讯科技有限公司
                        </div>
                    </div>

                    <div class="li__divider mt20"></div>
                </div>
            </div>

            <!-- 跟进记录  -->
            <com-steps />

            <div class="double-bnt">
                <div class="bnt">
                    <van-button
                        block
                        round
                        type="primary"
                        @click="$refs.comAddRecord.show()"
                        >添加跟进记录</van-button
                    >
                </div>
                <div class="bnt">
                    <van-button
                        plain
                        round
                        block
                        type="primary"
                        @click="$refs.comAddLabel.show()"
                        >添加/修改标签</van-button
                    >
                </div>
            </div>
        </van-popup>

        <com-add-label ref="comAddLabel" />
        <com-add-record ref="comAddRecord" />
    </div>
</template>

<script>
export default {
    name: "cardDetail",
    data() {
        return {
            isShow: false,
            //传入的参数
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
            this.$emit("confirm", {
                ...this.form,
            });
        },
    },
};
</script>

<style lang="less" scoped>
.card-detail {
    .cardbox {
        padding: 0 15px;
    }

    .mod-footer-bnt {
        padding: 20px;
        margin: 30px 0;
    }
}
</style>