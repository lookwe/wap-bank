<template>
    <!-- 用户类型 - 用户 -->
    <div class="mod-user-client">
        <div class="user-header header-bg">
            <van-image
                round
                width="5rem"
                height="5rem"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <div class="user-info">
                <div class="fz-20 fw-b">方江</div>
                <div class="fz-13 txt-tips-color">1873631034</div>
                <div class="fz-13 txt-tips-color">深圳市腾讯科技有限公司</div>
            </div>

            <div class="user-info__footer flex">
                <div class="bnt bnt-reset">
                    <van-button
                        icon="service-o"
                        block
                        round
                        type="primary"
                        @click="onShowManager"
                        >客户经理</van-button
                    >
                </div>
                <div class="bnt bnt-sbmit">
                    <van-button plain round block type="primary"
                        >编辑资料</van-button
                    >
                </div>
            </div>
        </div>

        <div class="my-loan u-page">
            <div class="fz-17 fw-b">我的贷款</div>

            <div
                class="loan-item"
                v-for="(item, index) in loanList"
                :key="index"
                @click="onShowLoanDateils"
            >
                <div class="fw-b fz-17">
                    <template v-if="item.type == 1">
                        <span class="round-dot"></span>申请中
                    </template>

                    <template v-if="item.type == 2">
                        <span class="round-dot green"></span>已放款
                    </template>

                    <template v-if="item.type == 3">
                        <span class="round-dot red"></span>已失败
                    </template>
                </div>
                <div class="loan-item__user flex jsb">
                    <div>
                        <div class="fz-16 pb5">50万</div>
                        <div class="fz-15 txt-tips-color">申请额度</div>
                    </div>
                    <div>
                        <div class="fz-16 pb5">张小凡</div>
                        <div class="fz-15 txt-tips-color">客户经理</div>
                    </div>
                </div>
                <div class="fz-15 txt-tips-color">更新日期：2015/02/04</div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: "client",
    data() {
        return {
            loanList: [{ type: 1 }, { type: 2 }, { type: 3 }, { type: 2 }],
        };
    },
    methods: {
        onShowManager() {},

        onShowLoanDateils() {},
    },
};
</script>
 
<style scoped lang="less">
@import "../style/index.less";
.mod-user-client {
    .user-header {
        text-align: center;
        padding: 50px 0 15px;
        .user-info {
            margin-top: 20px;
            div {
                margin: 15px 0;
            }

            &__footer {
                margin-top: 30px;
                justify-content: space-around;
                .bnt {
                    width: 40%;
                    height: 40px;
                }
            }
        }
    }

    .loan-item {
        background: #f6f6f6;
        border-radius: 8px;
        margin-top: 20px;
        padding: 20px;
        .round-dot {
            margin-left: 15px;
        }

        &__user {
            width: 50%;
            margin: 15px 0;
        }
    }
}
</style>