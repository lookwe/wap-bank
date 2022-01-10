<template>
    <div class="client-page">
        <div class="client-detail">
            <div class="flex ac company">
                <van-icon name="hotel-o" size="18" />
                <span class="txt-tips-color fz-13 name"
                    >深圳市腾讯科技有限公司</span
                >
            </div>

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

            <div class="flex jsb ac txt-tips-color time-manager">
                <div class="fz-13">注册日期：2015/02/04</div>
                <div class="fz-13">客户经理：张小凡</div>
            </div>
        </div>

        <div class="step-content">
            <div class="title">跟进记录</div>

            <div class="fz-17 c-black step-ul">
                <div
                    class="step-li"
                    v-for="(item, index) in [1, 2, 3]"
                    :key="index"
                >
                    <div class="fz-16 c-black name">王志</div>
                    <div class="fz-11 txt-tips-color time-mark">
                        <div class="time">2021-09-01 10:00:00</div>
                        <div class="mark">
                            蒸胆剑；蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="part-content">
            <div class="title">进件列表</div>

            <div
                class="client-detail"
                v-for="(item, index) in [1, 2]"
                :key="index"
            >
                <div class="flex ac company">
                    <van-icon name="hotel-o" size="18" />
                    <span class="txt-tips-color fz-13 name"
                        >深圳市腾讯科技有限公司</span
                    >
                </div>

                <div class="w100 flex jsb ac user">
                    <div class="fz-20 c-black name">姚成平</div>
                    <div class="flex ac status">
                        <template v-if="index === 0">
                            <div class="round-dot"></div>
                            <div class="fz-15 c-black tag">已申请</div>
                        </template>
                        <template v-if="index === 1">
                            <div class="round-dot green"></div>
                            <div class="fz-15 c-black tag">已放款</div>
                        </template>
                    </div>
                </div>
                <div class="fz-15 c-black flex ac tel">
                    <van-icon name="phone-o" size="18" />
                    <span class="tel-txt">18736463012</span>
                </div>

                <div class="flex ac money-count">
                    <div class="flex f-d-c box-piece">
                        <div class="c-r">
                            <span class="fz-12">￥</span>
                            <span class="fz-26 fw-b">30</span>
                            <span class="fz-12">万</span>
                        </div>
                        <div class="fz-12 txt-tips-color">贷款总金额</div>
                    </div>
                </div>

                <div class="flex jsb ac txt-tips-color time-manager">
                    <div class="flex ac">
                        <div class="fz-13">注册日期：2015/02/04</div>
                        <div class="fz-13 manager">客户经理：张小凡</div>
                    </div>

                    <van-icon name="arrow" size="18" />
                </div>
            </div>
        </div>

        <div class="double-bnt">
            <div class="bnt">
                <van-button block round type="primary">添加跟进记录</van-button>
            </div>
            <div class="bnt">
                <van-button plain round block type="primary"
                    >添加/修改标签</van-button
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "myClient",
    data() {
        return {};
    },
    methods: {},
};
</script>

<style scoped lang="less">
.client-page {
    padding: 15px;

    // 步骤
    .step-content {
        padding: 37px 0 0;
        .title {
            height: 22px;
            line-height: 22px;
        }
        .step-ul {
            .step-li {
                margin: 16px 0 0;
                .name {
                    position: relative;
                    height: 23px;
                    line-height: 23px;
                    padding: 0 0 0 33px;
                    &:after {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 18px;
                        height: 18px;
                        content: " ";
                        border: 2px solid #8e8e93;
                        border-radius: 50%;
                    }
                    &:before {
                        position: absolute;
                        left: 6px;
                        top: 6px;
                        width: 10px;
                        height: 10px;
                        content: " ";
                        background-color: #8e8e93;
                        border-radius: 50%;
                    }
                }
                .time-mark {
                    position: relative;
                    margin: 15px 0;
                    line-height: 16px;
                    padding: 0 0 10px 33px;
                    &:after {
                        position: absolute;
                        left: 10px;
                        top: 0;
                        width: 1px;
                        height: 100%;
                        content: " ";
                        background-color: #e5e5ea;
                        border-radius: 50%;
                    }
                    .time {
                        height: 16px;
                    }
                    .mark {
                        margin: 5px 0 0;
                    }
                }
            }
        }
    }
}



.part-content {
    .title {
        height: 22px;
        line-height: 22px;
        margin: 37px 0 0;
    }

    .client-detail {
        padding: 16px 0;
        border-bottom: 6px solid #f6f6f6;
        &:nth-last-child(1) {
            border-bottom: none;
        }
        .manager {
            padding: 0 16px;
        }
    }
}
</style>
