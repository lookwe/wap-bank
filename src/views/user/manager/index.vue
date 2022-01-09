<template>
    <!-- 用户类型 - 经理 -->
    <div class="mod-user-manager">
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
            <div>
                <div class="loan-item">
                    <div class="fw-b fz-17">
                        <span class="round-dot"></span>
                        申请中
                    </div>
                </div>
            </div>
        </div>

        <van-button type="primary" block @click="onToPage({ name: 'myCard' })"
            >我的名片</van-button
        >
        <br />
        <van-button type="primary" block @click="onToPage({ name: 'myClient' })"
            >我的客户</van-button
        >
        <br />
        <van-button type="primary" block @click="onToPage({ name: 'myPlan' })"
            >我的进件</van-button
        >
        <br />

        <van-button
            type="primary"
            block
            @click="onToPage({ name: 'publicFetch' })"
            >公害捞取</van-button
        >
    </div>
</template>
 
<script>
export default {
    name: "manager",
    data() {
        return {};
    },
    methods: {
        onToPage(option) {
            const router = {
                ...option,
                // ...
            };
            this.$router.push(router);
        },

        onShowManager() {},
    },
};
</script>
 
<style scoped lang="less">
@import "../style/index.less";
.mod-user-manager {
    .user-header {
        text-align: center;
        padding: 50px 0 15px;
        background: linear-gradient(
            180deg,
            rgba(255, 107, 0, 0.05) 0%,
            rgba(255, 255, 255, 0.04) 42%,
            rgba(255, 255, 255, 0) 100%
        );

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
        margin-top: 20px;
        padding: 20px;
        .round-dot {
            margin-left: 15px;
        }
    }
}
</style>