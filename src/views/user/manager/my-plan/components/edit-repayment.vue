<template>
    <div>
        <van-popup
            v-model="isShow"
            position="right"
            :style="{ width: '100%', height: '100%' }"
        >
            <div class="edit-repayment">
                <!-- 方式选择 -->
                <div
                    class="header-cell"
                    v-for="(item, index) in cellList"
                    :key="index"
                    @click="activeIndex = index"
                >
                    <div class="cell-item flex jsb u-page">
                        <div>{{ item.name }}</div>
                        <van-icon
                            v-show="activeIndex === index"
                            name="success"
                            size="22"
                            color="#FF8300"
                        />
                    </div>
                </div>

                <!-- 自定义配置 custom -->
                <div class="custom u-page">
                    <div class="form-box">
                        <van-field
                            v-model="form.digit"
                            type="digit"
                            label="贷款金额"
                        />
                        <van-field v-model="form.number" label="贷款利率" />
                        <van-field v-model="form.term" label="贷款期限" />
                    </div>

                    <com-steps :list="stepList" :active="-1" title="">
                    </com-steps>
                </div>

                <!-- 按钮 -->
                <div class="mod-bottom-fn">
                    <div class="double-bnt mt30">
                        <div class="bnt">
                            <van-button plain block round type="primary"
                                >开始计算</van-button
                            >
                        </div>
                        <div class="bnt">
                            <van-button
                                round
                                block
                                type="primary"
                                @click="confirm"
                                >确认修改</van-button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    name: "editRepayment",
    data() {
        return {
            isShow: false,
            params: {},
            cellList: [
                {
                    name: "等额本息",
                },
                {
                    name: "等额本金",
                },
            ],
            activeIndex: 0,

            form: {
                digit: 50000,
                number: "5.7%",
                term: "60(期)",
            },

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
        show(params) {
            this.params = params;
            this.isShow = true;
        },
        confirm() {
            this.$toast({
                message: "修改成功",
                icon: "checked",
            });
            this.isShow = false;
            this.$emit("confirm", {});
        },
    },
};
</script>

<style lang="less" scoped>
.edit-repayment {
    position: absolute;
    height: 100%;
    width: 100vw;
    overflow-y: auto;
    margin-bottom: 90;
    .header-cell {
        .cell-item {
            border-bottom: 1px solid #f0f0f0;
            font-size: 17px;
        }
    }

    .custom {
        height: 100px;

        .form-box {
            /deep/.van-cell {
                background: #f6f6f6;
                &::after {
                    border-color: #8E8E93;
                    left: 0;
                    right: 0;
                }
            }
        }
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