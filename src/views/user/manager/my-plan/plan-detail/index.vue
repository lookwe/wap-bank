<template>
    <div class="mod-plan-detail u-page">
        <!-- 基本信息 -->
        <div class="client-detail mb15">
            <!-- 在职企业 -->
            <div class="flex ac company">
                <van-icon name="hotel-o" size="18" />
                <span class="txt-tips-color fz-13 name"
                    >深圳市腾讯科技有限公司</span
                >
            </div>

            <!-- 客户基本信息 -->
            <div class="flex ac user jsb">
                <div class="fz-20 c-black fw-b">姚成平</div>
                <com-state type="2" />
            </div>
            <div class="fz-15 c-black flex ac tel">
                <van-icon name="phone-o" size="18" />
                <span class="tel-txt">18736463012</span>
            </div>

            <!-- 贷款信息 -->
            <div class="flex ac money-count">
                <!-- 贷款总金额 -->
                <div class="flex f-d-c box-piece">
                    <div class="c-r">
                        <span class="fz-12">￥</span>
                        <span class="fz-26 fw-b">30</span>
                        <span class="fz-12">万</span>
                    </div>
                    <div class="fz-12 txt-tips-color">贷款总金额</div>
                </div>

                <!-- 贷款次数 -->
                <div class="flex f-d-c box-piece">
                    <div class="c-r">
                        <span class="fz-26 fw-b">2</span>
                        <span class="fz-12">次</span>
                    </div>
                    <div class="fz-12 txt-tips-color">贷款次数</div>
                </div>

                <!-- 贷款期限 -->
                <div class="flex f-d-c box-piece">
                    <div class="c-r">
                        <span class="fz-26 fw-b">12</span>
                    </div>
                    <div class="fz-12 txt-tips-color">贷款期限</div>
                </div>

                <!-- 贷款期限 -->
                <div class="flex f-d-c box-piece">
                    <div class="c-r">
                        <span class="fz-19 fw-b">等额本息</span>
                    </div>
                    <div class="fz-12 txt-tips-color">还款计划</div>
                </div>
            </div>
        </div>

        <!-- 日志时间 -->
        <div class="detail-ul">
            <div>
                <span>申请日期：</span>
                <span>2020/02/04</span>
            </div>

            <div>
                <span>更新日期：</span>
                <span>2020/02/04</span>
            </div>

            <div>
                <span>数据来源：</span>
                <span>58同城</span>
            </div>

            <div>
                <span>客户经理：</span>
                <span>张小飞</span>
            </div>

            <div>
                <span>贷款备注：</span>
                <span>无备注</span>
            </div>
        </div>
        <div class="li__divider mt20"></div>

        <!-- 步骤 -->
        <div class="track-progress">
            <com-steps :list="stepList" active="2">
                <template v-slot:title>
                    <div class="title">
                        还款纪录 <span class="sun-speed">(3/12)</span>
                    </div>
                </template>
            </com-steps>
        </div>

        <!-- 按钮 -->
        <div class="mod-bottom-fn">
            <div class="double-bnt mt30">
                <div class="bnt">
                    <van-button
                        plain
                        block
                        round
                        type="primary"
                        @click="$refs.editRepayment.show()"
                        >更改还款计划</van-button
                    >
                </div>
                <div class="bnt">
                    <van-button
                        round
                        block
                        type="primary"
                        @click="$refs.editState.show()"
                        >审核状态修改</van-button
                    >
                </div>
            </div>
        </div>

        <!-- 弹框 -->
        <editRepayment ref="editRepayment" />
        <editState ref="editState" />
    </div>
</template>
<script>
import editRepayment from "../components/edit-repayment";
import editState from "../components/edit-state";
export default {
    name: "planDetail",
    components: {
        editRepayment,
        editState,
    },
    data() {
        return {
            stepList: [
                { name: "第1期还款￥6982", time: "2021-08-01 10:00:00" },
                { name: "第2期还款￥6982", time: "2021-08-01 10:00:00" },
                { name: "本期还款￥6982", time: "2021-08-01 10:00:00" },
                { name: "第4期还款￥6982", time: "2021-08-01 10:00:00" },
                { name: "第1期还款￥6982", time: "2021-08-01 10:00:00" },
                { name: "第2期还款￥6982", time: "2021-08-01 10:00:00" },
                { name: "第1期还款￥6982", time: "2021-08-01 10:00:00" },
                { name: "第2期还款￥6982", time: "2021-08-01 10:00:00" },
                { name: "第1期还款￥6982", time: "2021-08-01 10:00:00" },
            ],
        };
    },
    methods: {
        onToPageDetail() {
            this.$router.push({
                name: "myPlanDetail",
                params: { id: "E123" },
            });
        },
    },
};
</script>

<style lang="less" scoped>
.mod-plan-detail {
    position: relative;
    margin-bottom: 90px;
    .client-detail {
        border-bottom: 1px #f0f0f0 solid;
        padding-bottom: 22px;
    }

    .mod-bottom-fn {
        position: fixed;
        left: 0;
        bottom: 0;
        height: 90px;
        width: 100%;
        z-index: 999;
        background: #ffffff;
    }
}
</style>