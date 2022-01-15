<template>
    <!-- 首页-详情页 -->
    <div class="mod-home-details u-page">
        <div class="mod-home-header">
            <div class="mod-home_title flex jsb ac">
                <h3>招商银行富税贷</h3>
                <van-image
                    round
                    width="30px"
                    height="30px"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
            <div class="mod-home_rate flex ac">
                <div class="mod-home_rate_item">
                    <div class="number mb10">5-50万</div>
                    <span>额度</span>
                </div>
                <div class="mod-home-rate-line"></div>
                <div class="mod-home_rate_item">
                    <div class="number mb10">0.69%-1.12%</div>
                    <span>月均综合费率</span>
                </div>
            </div>
            <div class="mod-home_regul">
                <div class="mod-home_regul_item flex ac">
                    <van-icon name="passed" />
                    <span class="term">授信期限</span>
                    <span>12期、36期、52期</span>
                </div>
                <div class="mod-home_regul_item flex ac">
                    <van-icon name="passed" />
                    <span class="term">贷款类型</span>
                    <span>等额本息、先息后本</span>
                </div>
                <div class="mod-home_regul_item flex ac">
                    <van-icon name="passed" />
                    <span class="term">产品类型</span>
                    <span>税金贷</span>
                </div>
                <div class="mod-home_regul_item flex ac">
                    <van-icon name="passed" />
                    <span class="term">面向区域</span>
                    <span class="u-line-1">广东、山西、河南、山东、</span>
                </div>
            </div>
            <div class="li__divider mt30"></div>
        </div>

        <!-- 列表介绍 -->
        <div class="mod-home-main">
            <div
                class="main-item"
                v-for="(item, index) in contentList"
                :key="index"
            >
                <div class="item-title fz-17 fw-b">{{ item.title }}</div>
                <div class="item-content txt-light-color">
                    {{ item.content }}
                </div>
            </div>
        </div>

        <div class="mod-bootom-msg flex flex-center">
            <van-image
                round
                width="30px"
                height="30px"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <span class="pl10">张小凡刚刚进件了</span>
        </div>

        <div class="mod-bottom-fn" safe-area-inset-bottom>
            <div class="u-page flex jsb">
                <div class="left-fn-box flex">
                    <div class="fn-item" @click="$router.go(-1)">
                        <van-icon name="arrow-left" size="26" />
                        <div>返回</div>
                    </div>
                    <div class="fn-item" @click="toSharePage">
                        <van-icon name="share-o" size="26" />
                        <div>分享</div>
                    </div>
                    <div class="fn-item" @click="onShowManager">
                        <van-icon name="chat-o" size="26" />
                        <div>客户经理</div>
                    </div>
                </div>

                <div class="right-fn-box flex ac">
                    <van-button
                        round
                        type="primary"
                        block
                        @click="$refs.applyInfo.show()"
                        >立刻申请</van-button
                    >
                </div>
            </div>
        </div>

        <van-dialog
            v-model="showManagerDialig"
            confirmButtonText="好的"
            confirmButtonColor="#11c564"
        >
            <div class="contact-manager">
                <van-icon name="checked" size="80" color="#11c564" />
                <p class="fz-16 fw-b">联系客户经理成功</p>
                <p class="fz-12 txt-tips-color">
                    稍后客户经理会添加您的微信给你联系
                </p>
            </div>
        </van-dialog>
        <applyInfo ref="applyInfo" />
    </div>
</template>

<script>
import applyInfo from "@/views/home/components/apply-info";
export default {
    name: "homeDetails",
    components: {
        applyInfo,
    },
    data() {
        return {
            contentList: [
                {
                    title: "产品介绍",
                    content:
                        "慧到账是慧算账专属为正在服务的代账客户提供的线上金融类增值服务，只要您有融资需求随时可以在线直接申请",
                },
                {
                    title: "申请条件",
                    content:
                        "慧到账是慧算账专属为正在服务的代账客户提供的线上金融类增值服务，只要您有融资需求随时可以在线直接申请",
                },
                {
                    title: "所需资料",
                    content:
                        "慧到账是慧算账专属为正在服务的代账客户提供的线上金融类增值服务，只要您有融资需求随时可以在线直接申请",
                },
                {
                    title: "申请流程",
                    content:
                        "慧到账是慧算账专属为正在服务的代账客户提供的线上金融类增值服务，只要您有融资需求随时可以在线直接申请",
                },
            ],

            showManagerDialig: false,
        };
    },

    methods: {
        onShowManager() {
            // api ...
            this.showManagerDialig = true;
        },

        toSharePage() {
            this.$router.push({
                name: "homeShare",
                params: {},
            });
        },
    },
};
</script>

<style scoped lang="less">
.mod-home-details {
    position: relative;
    .mod-home-header {
        box-sizing: border-box;

        .mod-home_rate {
            margin-top: 23px;
            .mod-home_rate_item {
                position: relative;
                .number {
                    height: 29px;
                    line-height: 29px;
                    margin-top: 0;

                    color: rgba(237, 26, 58, 1);
                    font-size: 20px;
                    font-weight: 500;
                    font-family: "PingFang SC";
                    text-align: center;
                }
                span {
                    height: 13px;
                    font-size: 11px;
                    color: #8e8e93;
                }
            }
            .mod-home-rate-line {
                height: 49px;
                width: 1px;
                background: #8e8e93;
                margin: 0 24px;
            }
        }
        .mod-home_regul {
            margin-top: 22px;
            .mod-home_regul_item {
                margin-top: 14px;
                .van-icon {
                    color: #3dae50;
                }
                span {
                    height: 18px;
                    font-size: 13px;
                    line-height: 18px;
                }
                .term {
                    color: #8e8e93;
                    margin: 0 10px;
                }
            }
        }
    }

    .mod-home-main {
        margin-bottom: 100px;
        .main-item {
            margin: 15px 0;
            .item-title {
                margin: 20px 0;
            }
            .item-content {
                font-size: 15px;
            }
        }
    }

    .mod-bootom-msg {
        position: fixed;
        bottom: 120px;
        left: 15px;
        height: 40px;
        padding: 5px 10px;
        border-radius: 25px;

        background: #fff;
        box-shadow: 0 16px 16px 0 rgba(50.1, 50.1, 71.27, 0.08),
            0 24px 32px 0 rgba(50.1, 50.1, 71.27, 0.08);
    }

    .contact-manager {
        background: #fff;
        text-align: center;
        margin: 0 auto;
        padding: 20px 0;
    }

    .mod-bottom-fn {
        position: fixed;
        left: 0;
        bottom: 0;
        height: 90px;
        width: 100%;
        background: #f6f6f6;

        .left-fn-box {
            .fn-item {
                text-align: center;
                &:not(:last-child) {
                    margin-right: 25px;
                }

                > div {
                    font-size: 15px;
                    color: #8e8e93;
                    margin-top: 5px;
                }
            }
        }

        .right-fn-box {
            width: 40%;
        }
    }
}
</style>