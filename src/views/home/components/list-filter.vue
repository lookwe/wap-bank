<template>
    <div>
        <van-popup
            v-model="isShow"
            closeable
            position="bottom"
            :style="{ height: '68%' }"
        >
            <div class="mod-popup">
                <div class="mod-popup__header">列表筛选</div>

                <div class="u-page">
                    <div class="filter-item">
                        <div class="filter-item__title fz-17 txt-tips-color">
                            产品分类
                        </div>
                        <div class="filter-item__content flex">
                            <van-button class="bnt" plain type="primary"
                                >税金贷</van-button
                            >
                            <van-button class="bnt" plain type="default"
                                >发票贷</van-button
                            >
                        </div>
                    </div>

                    <div class="filter-item">
                        <div class="filter-item__title fz-17 txt-tips-color">
                            面向区域
                        </div>
                        <div class="filter-item__content flex">
                            <van-button class="bnt" plain type="primary"
                                >广东</van-button
                            >
                            <van-button
                                class="bnt"
                                plain
                                @click="__handlerCustomArea"
                                >选择区域></van-button
                            >
                        </div>
                    </div>

                    <div class="filter-item">
                        <div class="filter-item__title fz-17 txt-tips-color">
                            贷款额度(万)
                        </div>
                        <div class="filter-item__content flex">
                            <div class="box-slider">
                                <van-slider
                                    v-model="filter.loan_mount"
                                    range
                                    button-size="16"
                                    bar-height="6px"
                                    active-color="#FF8300"
                                >
                                    <template v-slot:left-button="{ value }">
                                        <div class="custom-button bg-p">
                                            <span class="span-value">{{
                                                value
                                            }}</span>
                                        </div>
                                    </template>

                                    <template v-slot:right-button="{ value }">
                                        <div class="custom-button bg-p">
                                            <span class="span-value">{{
                                                value
                                            }}</span>
                                        </div>
                                    </template>
                                </van-slider>
                            </div>
                        </div>
                    </div>

                    <div class="filter-item mt20">
                        <div class="filter-item__title fz-17 txt-tips-color">
                            贷款利率(%)
                        </div>
                        <div class="filter-item__content flex">
                            <div class="box-slider">
                                <van-slider
                                    v-model="filter.loan_rate"
                                    range
                                    button-size="16"
                                    bar-height="6px"
                                    active-color="#FF8300"
                                >
                                    <template v-slot:left-button="{ value }">
                                        <div class="custom-button bg-p">
                                            <span class="span-value">{{
                                                value
                                            }}</span>
                                        </div>
                                    </template>

                                    <template v-slot:right-button="{ value }">
                                        <div class="custom-button bg-p">
                                            <span class="span-value">{{
                                                value
                                            }}</span>
                                        </div>
                                    </template>
                                </van-slider>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mod-popup__footer flex">
                    <div class="bnt bnt-reset">
                        <van-button
                            plain
                            block
                            round
                            type="primary"
                            @click="resetData"
                            >重置</van-button
                        >
                    </div>
                    <div class="bnt bnt-sbmit">
                        <van-button round block type="primary" @click="confirm"
                            >确定</van-button
                        >
                    </div>
                </div>
            </div>
        </van-popup>

        <com-index-anchor ref="comIndexAnchor" @confirm="__onAnchorConfirm" />
    </div>
</template>

<script>
export default {
    name: "listFilter",
    data() {
        return {
            isShow: false,
            params: {},

            filter: {
                productType: 1,
                area: "广东",
                loan_mount: [10, 50],
                loan_rate: [0.5, 20],
            },
        };
    },
    methods: {
        show(params) {
            this.params = params;
            this.isShow = true;
        },
        resetData() {},

        confirm() {
            this.isShow = false;
            this.$emit("confirm", {
                ...this.filter,
            });
        },

        __handlerCustomArea() {
            console.log("筛选区域");
            this.$refs.comIndexAnchor.show();
        },

        __onAnchorConfirm(item) {
            console.log(item);
        },
    },
};
</script>

<style scoped lang="less">
.mod-popup {
    .filter-item {
        /deep/.van-button--plain {
            background-color: #f0f0f0;
        }
        margin-bottom: 20px;

        &__content {
            margin-top: 20px;
            .bnt:not(:last-child) {
                margin-right: 16px;
            }

            .box-slider {
                width: 50%;
                padding-bottom: 30px;
                .custom-button {
                    width: 20px;
                    height: 20px;
                    border-radius: 100px;
                    position: relative;

                    .span-value {
                        position: absolute;
                        top: 25px;
                        left: 0;
                    }
                }
            }
        }
    }

    &__footer {
        padding: 0 20px;
        margin-bottom: 30px;
        justify-content: space-around;
        .bnt {
            width: 45%;
            height: 40px;
        }
    }
}
</style>