<template>
    <!-- 贷款详情 -->
    <van-popup
        v-model="isShow"
        position="right"
        :style="{ width: '100%', height: '100%' }"
    >
        <div class="mod-loan-details u-page">
            <div class="mod-home_title flex jsb ac">
                <h3>招商银行富税贷</h3>
                <van-image
                    round
                    @click="isShow = false"
                    width="30px"
                    height="30px"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
            </div>

            <div class="loan-item">
                <div class="fz-17">
                    <template v-if="loanInfo.type == 1"
                        ><span class="round-dot"></span>申请中 </template
                    ><template v-if="loanInfo.type == 2"
                        ><span class="round-dot green"></span>已放款
                    </template>
                </div>
            </div>

            <div class="client-detail">
                <div class="flex ac company">
                    <van-icon name="hotel-o" size="18" />
                    <span class="txt-tips-color fz-13 name"
                        >深圳市腾讯科技有限公司</span
                    >
                </div>

                <div class="flex ac user">
                    <div class="fz-15 name mr20">姚成平</div>
                    <van-icon name="phone-o" size="18" />
                    <span class="tel-txt">18736463012</span>
                </div>

                <div class="flex ac money-count">
                    <div class="flex f-d-c box-piece">
                        <div class="c-r">
                            <span class="fz-12">￥</span>
                            <span class="fz-17">10</span>
                            <span class="fz-12">万</span>
                        </div>
                        <div class="fz-12 txt-tips-color">贷款总金额</div>
                    </div>

                    <div class="flex f-d-c box-piece">
                        <div class="c-r">
                            <span class="fz-17">0.67%</span>
                        </div>
                        <div class="fz-12 txt-tips-color">贷款率</div>
                    </div>

                    <div class="flex f-d-c box-piece">
                        <div class="c-r">
                            <span class="fz-17">12</span>
                        </div>
                        <div class="fz-12 txt-tips-color">贷款期限</div>
                    </div>

                    <div class="flex f-d-c box-piece">
                        <div class="c-r">
                            <span class="fz-17">等额本息</span>
                        </div>
                        <div class="fz-12 txt-tips-color">贷款计划</div>
                    </div>
                </div>
            </div>
        </div>
    </van-popup>
</template>
 
<script>
export default {
    name: "loanDetails",
    data() {
        return {
            isShow: false,

            loanInfo: {
                type: 1,
            },
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
.mod-loan-details {
    .loan-item {
        margin: 15px 0;
    }

    .client-detail {
        background: #f0f0f0;
        padding: 15px;
    }
}
</style>