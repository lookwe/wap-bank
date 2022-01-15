<template>
    <div class="home-share">
        <div class="share-box">
            <div class="upper-lalf">
                <van-image
                    round
                    width="50px"
                    height="50px"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <h3 class="fz-22">招商银行富税贷</h3>
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

                <div class="fz-15 txt-tips-color mt20">
                    慧到账是慧算账专属为正在服务的代账客户提供的线上金融类增值服务，只要您有融资需求随时可以在线直接申请
                </div>
            </div>

            <!-- 二维码 -->
            <div class="lower-half">
                <div class="QR-code">
                    <van-image
                        width="100%"
                        height="100%"
                        src="https://obs-sxmaps.obs.cn-south-1.myhuaweicloud.com/1639538117017%E5%8A%A0%E5%88%86%E8%AF%BE%E5%A0%82app.png?AccessKeyId=EFEFKMKB34MST8GOISMX&Expires=1642315801&Signature=lQJceiATVYd18%2FvABjwI8EEu1VA%3D"
                    />
                </div>
            </div>
        </div>

        <div class="share-fn-box flex jsb">
            <div class="fn-item" @click="$router.go(-1)">
                <van-icon name="arrow-left" size="26" />
                <div>返回上一页</div>
            </div>
            <div class="fn-item">
                <van-icon name="wechat" size="26" />
                <div>分享到微信</div>
            </div>
            <div class="fn-item">
                <van-icon name="down" size="26" />
                <div>保存</div>
            </div>
        </div>
    </div>
</template>

<script>
import bgMixin from "@/assets/js/mixin/bodyBgMixin";
export default {
    name: "homeShare",
    mixins: [bgMixin],
    data() {
        return {};
    },
};
</script>

<style scoped lang="less">
.home-share {
    padding: 30px;
    .share-box {
        margin-top: 20px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 16px 16px 0 rgba(50.1, 50.1, 71.27, 0.08),
            0 24px 32px 0 rgba(50.1, 50.1, 71.27, 0.08);

        .upper-lalf {
            padding: 30px;
            .mod-home_rate {
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
                        font-size: 13px;
                    }
                }
                .mod-home-rate-line {
                    height: 49px;
                    width: 1px;
                    background: #8e8e93;
                    margin: 0 24px;
                }
            }
        }

        .lower-half {
            height: 260px;
            background: hsl(351, 85%, 52%);
            overflow: hidden;
            .QR-code {
                width: 180px;
                height: 170px;
                background: #fff;
                margin: 50px auto;
            }
        }
    }

    .share-fn-box {
        padding: 15px;
        margin-top: 20px;
        .fn-item {
            text-align: center;

            > div {
                font-size: 15px;
                margin-top: 5px;
            }
        }
    }
}
</style>