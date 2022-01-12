<template>
    <van-popup
        v-model="isShow"
        closeable
        position="bottom"
        :style="{ height: '65%' }"
    >
        <div class="mod-fliter">
            <div class="mod-fliter__header fz-20 fw-b">标签列表</div>

            <div class="u-page">
                <!-- 看需求，如果数据结构准许 可执行遍历整个 item -->
                <div class="filter-item">
                    <div class="filter-item__title fz-17 txt-tips-color">
                        产品分类
                    </div>
                    <div class="filter-item__content flex">
                        <van-button
                            v-for="(item, index) in data.intention"
                            :key="index"
                            class="bnt"
                            plain
                            :type="
                                userLable.intention === index
                                    ? 'primary'
                                    : 'default'
                            "
                            @click="userLable.intention = index"
                            >{{ item }}</van-button
                        >
                    </div>
                </div>

                <div class="filter-item">
                    <div class="filter-item__title fz-17 txt-tips-color">
                        需求
                    </div>
                    <div class="filter-item__content flex">
                        <van-button
                            v-for="(item, index) in data.demand"
                            :key="index"
                            class="bnt"
                            plain
                            :type="
                                userLable.demand === index
                                    ? 'primary'
                                    : 'default'
                            "
                            @click="userLable.demand = index"
                            >{{ item }}</van-button
                        >
                    </div>
                </div>

                <div class="filter-item">
                    <div class="filter-item__title fz-17 txt-tips-color">
                        期望
                    </div>
                    <div class="filter-item__content flex">
                        <van-button
                            v-for="(item, index) in data.expect"
                            :key="index"
                            class="bnt"
                            plain
                            :type="
                                userLable.expect === index
                                    ? 'primary'
                                    : 'default'
                            "
                            @click="userLable.expect = index"
                            >{{ item }}</van-button
                        >
                    </div>
                </div>

                <div class="filter-item">
                    <div class="filter-item__title fz-17 txt-tips-color">
                        更多
                    </div>
                    <div class="filter-item__content flex">
                        <van-button
                            v-for="(item, index) in data.more"
                            :key="index"
                            class="bnt"
                            plain
                            :type="
                                userLable.more.includes(index)
                                    ? 'primary'
                                    : 'default'
                            "
                            @click="__onMoreOptionClick(index)"
                            >{{ item }}</van-button
                        >
                    </div>
                </div>

                <div class="filter-item">
                    <div class="filter-item__title fz-17 txt-tips-color">
                        没有合适的标签?
                    </div>
                    <div class="filter-item__content flex">
                        <div
                            v-for="(item, index) in data.custom"
                            :key="index"
                            class="bnt bnt-icon"
                        >
                            {{ item }}
                            <van-icon class="pl10" name="cross" size="16" />
                        </div>

                        <div class="bnt bnt-icon">
                            <van-icon name="plus" />自定义标签
                        </div>
                    </div>
                </div>
            </div>

            <div class="mod-fliter__footer flex">
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
</template>

<script>
export default {
    name: "comAddLabel",
    data() {
        return {
            isShow: false,

            //
            data: {
                intention: ["意向很高", "意向不明", "邀约上门"],
                demand: ["公司生产", "个人消费"],
                expect: ["4-10万", "200万以上", "10万-100万"],
                more: ["企业主", "上班族", "有社保", "公积金", "有车"],
                custom: ["上班族"],
            },

            userLable: {
                intention: 0,
                demand: 0,
                expect: 0,
                more: [0, 1],
            },
        };
    },
    methods: {
        show() {
            this.isShow = true;
        },
        resetData() {},

        confirm() {
            this.isShow = false;
            this.$emit("confirm", {});
        },

        __onMoreOptionClick(index) {
            if (this.userLable.more.includes(index)) {
                const _inx = this.userLable.more.indexOf(index);
                this.userLable.more.splice(_inx, 1);
            } else {
                this.userLable.more.push(index);
            }
        },
    },
};
</script>

<style scoped lang="less">
.mod-fliter {
    &__header {
        padding: 15px;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06);
    }

    .filter-item {
        /deep/.van-button--plain {
            background-color: #f0f0f0;
        }
        margin-bottom: 20px;

        &__content {
            flex-wrap: wrap;

            .bnt {
                margin-top: 20px;
            }
            .bnt:not(:last-child) {
                margin-right: 16px;
            }
            .bnt-icon {
                padding: 12px 15px;
                font-size: 14px;
                background-color: #f0f0f0;
            }

            .box-slider {
                width: 50%;
                .custom-button {
                    width: 20px;
                    height: 20px;
                    border-radius: 100px;
                    position: relative;

                    .span-value {
                        position: absolute;
                        top: 10px;
                        left: 0;
                    }
                }
            }
        }
    }

    &__footer {
        padding: 0 10px;
        justify-content: space-around;

        // 不是公共
        margin-bottom: 40px;
        .bnt {
            width: 46%;
            height: 40px;
        }
    }
}
</style>