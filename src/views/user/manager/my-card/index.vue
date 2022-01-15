<template>
    <div class="mod-my-card">
        <div class="mod-card-top">
            <div class="card-text1">999</div>
            <div class="card-text2 fz-16">我的名片</div>
            <div class="addCard fz-13" @click="$refs.cardProp.show()">
                <div>+</div>
                <div>添加新名片</div>
            </div>
        </div>
        <div class="cards">
            <div
                class="mod-public-fetch-card"
                v-for="(item, index) of 3"
                :key="index"
                @click="toCardDetailPage"
            >
                <div class="card-head">
                    <div class="card-name">姚成平</div>
                    <div
                        class="card-issue"
                        v-for="iss of ['意向', '待跟进']"
                        :key="iss"
                    >
                        <span class="issue-txt">
                            {{ iss }}
                        </span>
                    </div>
                </div>
                <div class="card-tel">
                    <van-icon name="phone-o" />
                    <span class="tel">18113131212</span>
                </div>
                <div class="card-pcs">
                    <span class="fz-11">￥</span>
                    <span class="fz-20"> 1 </span>
                    <span class="fz-13">次</span>
                    <!-- 剩余持有天数 -->
                    <span class="fz-20"> 2</span>
                    <span class="fz-13">天</span>
                    <!-- xxx -->
                </div>
                <div class="card-footer">
                    <div>流转次数</div>
                    <div>剩余持有</div>
                    <div class="enter" @click="$refs.cardProp.show(item)">
                        &nbsp;>
                    </div>
                </div>
            </div>
        </div>

        <!-- 添加名片 -->
        <cardPropup ref="cardProp" @confirm="onfetchPropCallback" />
        <cardDetail ref="cardDetail" />
    </div>
</template>
<script>
import cardPropup from "@/views/user/manager/my-card/components/add-card";
import cardDetail from "@/views/user/manager/my-card/components/card-detail";
import bgMixin from "@/assets/js/mixin/bodyBgMixin";
export default {
    name: "myCard",
    mixins: [bgMixin],
    components: {
        cardPropup,
        cardDetail,
    },
    data() {
        return {};
    },
    methods: {
        onfetchPropCallback(option) {
            console.log(option);
        },

        toCardDetailPage() {
            this.$refs.cardDetail.show();
        },
    },
};
</script>
 
<style lang="less">
@import "../../style/index.less";
.mod-my-card {
    position: relative;
    .mod-card-top {
        overflow: hidden;
        width: 100vw;
        height: 269px;
        background: rgba(255, 131, 0, 1);
        z-index: 0;
        .card-text1 {
            line-height: 69px;
            height: 69px;
            color: rgba(255, 255, 255, 1);
            font-size: 48px;
            font-weight: 500;
            font-family: "PingFang SC";
            text-align: left;
            margin-top: 45px;
            margin-left: 30px;
        }
        .card-text2 {
            height: 22px;
            opacity: 0.9000000357627869;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            font-family: "SF Pro Text";
            text-align: left;
            line-height: 22px;
            margin-top: 5px;
            margin-left: 30px;
        }
        .addCard {
            display: flex;
            align-items: center;
            padding-right: 10px;
            height: 32px;
            border-radius: 34px;
            background: rgba(255, 255, 255, 1);
            color: rgba(255, 131, 0, 1);
            position: absolute;
            top: 77px;
            right: 16px;
            > div {
                height: 22px;
                opacity: 1;
                color: rgba(255, 131, 0, 1);
                font-weight: 500;
                font-family: "SF Pro Text";
                text-align: left;
                line-height: 22px;
            }
            > div:nth-child(1) {
                overflow: hidden;
                line-height: 22px;
                font-size: 28px;
                font-family: "Times New Roman", Times, serif;
                margin: 8px 10px;
            }
        }
    }
    .cards {
        margin-top: -88px;
        padding: 15px;
        .mod-public-fetch-card {
            .card-pcs {
                > span:nth-child(1) {
                    font-weight: 400;
                }
                // 剩余持有天数
                > span:nth-child(4) {
                    margin-left: 50px;
                }
            }
            .card-footer {
                // 剩余持有
                div:nth-child(2) {
                    margin-left: -112px;
                }
            }
        }
    }
}
</style>