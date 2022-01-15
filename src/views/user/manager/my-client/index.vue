<template>
    <div class="my-client">
        <div class="mod-card-top">
            <div class="card-text1">999</div>
            <div class="card-text2">我的客户</div>
        </div>
        <!-- 卡片列表 -->
        <div class="cards u-page">
            <div
                class="client-detail u-page bg-white mb15"
                v-for="(item, index) in [1, 2, 3]"
                :key="index"
                @click="onToPageDetail"
            >
                <!-- 在职企业 -->
                <div class="flex ac company">
                    <van-icon name="hotel-o" size="18" />
                    <span class="txt-tips-color fz-13 name"
                        >深圳市腾讯科技有限公司</span
                    >
                </div>

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
                        <div class="c-r">
                            <span class="fz-12">￥</span>
                            <span class="fz-26 fw-b">30</span>
                            <span class="fz-12">万</span>
                        </div>
                        <div class="fz-12 txt-tips-color">贷款总金额</div>
                    </div>
                    <div class="flex f-d-c box-piece">
                        <div class="c-r">
                            <span class="fz-26 fw-b">2</span>
                            <span class="fz-12">次</span>
                        </div>
                        <div class="fz-12 txt-tips-color">贷款次数</div>
                    </div>
                </div>

                <!-- 日期 -->
                <div class="flex jsb ac txt-tips-color time-manager">
                    <div class="fz-13">注册日期：2015/02/04</div>
                    <div class="fz-13">客户经理：张小凡</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import bgMixin from "@/assets/js/mixin/bodyBgMixin";
export default {
    name: "myClient",
    mixins: [bgMixin],
    data() {
        return {};
    },
    methods: {
        onToPageDetail() {
            this.$router.push({
                name: "myClientDetail",
                params: { id: "E123" },
            });
        },
    },
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.my-client {
    .mod-card-top {
        background: #d41732;
    }
    .cards {
        margin-top: -100px;
    }
}
</style>