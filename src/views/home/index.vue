<template>
    <div class="mod-home">
        <!-- 头部轮播图 -->
        <div class="header-banner-swipe">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" class="image" />
                </van-swipe-item>
            </van-swipe>
        </div>

        <!-- 内容主体 -->
        <div class="mod-main u-page">
            <!-- 资讯 -->
            <div class="mod-main__consulting flex flex-center mb20">
                <div class="left-image">
                    <div>资讯</div>
                </div>
                <div class="title u-line-1 fz-13 txt-tips-color">
                    | 张小伟查看了经营性贷款分三期资料档案
                </div>
                <div class="rigth-inco flex">
                    <span class="round-dot-red"></span>
                    <van-icon name="arrow" color="#8E8E93" />
                </div>
            </div>

            <!-- 最近热销 -->
            <div class="mod-main__hot flex jsb mb20">
                <div class="flex left-box">
                    <div class="fz-20 fw-b txt-main-color pr20">最近热销</div>
                    <div class="fz-15 txt-tips-color">银行推荐</div>
                </div>
                <div class="right-box">
                    <div class="flex as">
                        <van-icon name="location-o" />
                        <span class="span-city">广东 |</span>
                        <van-icon name="apps-o" />
                    </div>
                </div>
            </div>

            <!-- 商贷列表 -->
            <div class="mod-main__loan">
                <div class="loan-item">
                    <div class="loan-item__upper flex jsb">
                        <div class="flex">
                            <van-image
                                round
                                width="18px"
                                height="18px"
                                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                            />
                            <div class="ml10">
                                <div class="fz-17 txt-main-color mb5">
                                    招商银行富税贷
                                </div>
                                <div class="txt-tips">申请最多</div>
                            </div>
                        </div>
                        <div style="height: 30px">
                            <van-button round type="primary" size="small"
                                >立即申请</van-button
                            >
                        </div>
                    </div>

                    <div class="loan-item__lower">
                        <div class="flex jsb mb10">
                            <div>
                                <div class="c-r mb5">
                                    <span class="fz-22 fw-b">20</span>
                                    <span class="fz-12">万</span>
                                </div>
                                <div class="fz-12">额度最高可达</div>
                            </div>
                            <div>
                                <div class="mb5 fz-14">等额本息</div>
                                <div class="fz-12">年利率15%起</div>
                            </div>
                            <div>
                                <div class="mb5 fz-14">税金贷</div>
                                <div class="fz-12">授信期限3个月起</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                "https://img01.yzcdn.cn/vant/apple-1.jpg",
                "https://img01.yzcdn.cn/vant/apple-2.jpg",
            ],
        };
    },
    methods: {
        push() {
            this.$router.push("product");
        },
    },
};
</script>

<style lang="less" scoped>
.mod-home {
    .header-banner-swipe {
        .image {
            width: 100vw;
            height: 212px;
        }
    }

    .mod-main {
        &__consulting {
            height: 56px;
            border-radius: 5px;
            background: rgba(246, 246, 246, 1);
            padding: 0 17px;

            .left-image {
                width: 15%;

                // 临时
                div {
                    display: inline-block;
                    font-weight: 600;
                    width: 40px;
                    height: 17px;
                    font-family: "Gill Sans", "Gill Sans MT", Calibri,
                        "Trebuchet MS", sans-serif;
                }
            }

            .title {
                width: 70%;
            }
            .rigth-inco {
                margin-left: 5%;
                width: 10%;
                justify-content: flex-end;
            }
        }

        &__hot {
            height: 45px;
            align-items: baseline;
            box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06);
            .left-box {
                align-items: baseline;
            }

            .right-box {
                align-items: baseline;
                color: #8e8e93;
                .van-icon {
                    font-size: 20px;
                }
                .span-city {
                    font-size: 13px;
                    padding: 0 5px;
                }
            }
        }

        &__loan {
            background: chartreuse;
            .loan-item {
                &__upper {
                }

                &__lower {
                }
            }
        }
    }
}
</style>
