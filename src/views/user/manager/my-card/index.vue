<template>
    <div class="mod-my-card">
        <div class="mod-card-top">
            <div class="card-text1">999</div>
            <div class="card-text2">我的名片</div>
            <div class="addCard" @click="$refs.cardProp.show()">
                <div>+</div>
                <div>添加新名片</div>
            </div>
        </div>
        <div class="cards">
            <div
                class="mod-public-fetch-card"
                v-for="item of list"
                :key="item.name"
            >
                <div class="card-head">
                    <div class="card-name">
                        {{ item.name }}
                    </div>
                    <div
                        class="card-issue"
                        v-for="iss of item.issue"
                        :key="iss"
                    >
                        <span class="issue-txt">
                            {{ iss }}
                        </span>
                    </div>
                </div>
                <div class="card-tel">
                    <van-icon name="phone-o" />
                    <span class="tel">{{ item.tel }}</span>
                </div>
                <div class="card-pcs">
                    <span style="font-size: 11px; font-weight: 400">￥</span>
                    <span style="font-size: 20px; margin-top: -1px">{{
                        item.pcs
                    }}</span>
                    <span style="font-size: 13px">次</span>
                    <span
                        style="
                            font-size: 20px;
                            margin-top: -1px;
                            margin-left: 60px;
                        "
                        >{{ item.pcs }}</span
                    >
                    <span style="font-size: 13px">天</span>
                </div>
                <div class="card-footer">
                    <div>流转次数</div>
                    <div style="margin-left: -112px">剩余持有</div>
                    <div class="enter" @click="$refs.cardProp.show(item)">
                        &nbsp;>
                    </div>
                </div>
            </div>
        </div>
        <cardPropup ref="cardProp" @confirm="onfetchPropCallback"></cardPropup>
    </div>
</template>
<script>
import cardPropup from "@/views/user/manager/my-card/components/card-propup.vue";
export default {
    name: "myCard",
    components: {
        cardPropup,
    },
    data() {
        return {
            list: [
                {
                    name: "姚成平",
                    tel: "18736463012",
                    issue: ["意向", "待跟进"],
                    pcs: 2,
                    active: 1,
                    propupList: [
                        {
                            ygName: "切格瓦拉",
                            detail: "打工是不可能打工的",
                            time: "2021-10-01 10:00:00",
                        },
                        {
                            ygName: "罗翔",
                            detail: "罗翔说刑法；dsaasdsadsa",
                            time: "2021-10-01 10:00:00",
                        },
                        {
                            ygName: "张三",
                            detail: "蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑； 存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司",
                            time: "2021-10-01 10:00:00",
                        },
                    ],
                },
                {
                    name: "姚大萨达",
                    tel: "1877777772",
                    issue: ["意向", "待跟进", "随便"],
                    pcs: 1,
                    active: 2,
                    propupList: [
                        {
                            ygName: "切格瓦拉",
                            detail: "打工是不可能打工的",
                            time: "2021-10-01 10:00:00",
                        },
                        {
                            ygName: "罗翔",
                            detail: "罗翔说刑法；dsaasdsadsa",
                            time: "2021-10-01 10:00:00",
                        },
                        {
                            ygName: "张三",
                            detail: "蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑； 存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司",
                            time: "2021-10-01 10:00:00",
                        },
                    ],
                },
                {
                    name: "姚为",
                    tel: "18736123456",
                    issue: ["待跟进"],
                    pcs: 2,
                    active: 0,
                    propupList: [
                        {
                            ygName: "切格瓦拉",
                            detail: "打工是不可能打工的",
                            time: "2021-10-01 10:00:00",
                        },
                        {
                            ygName: "罗翔",
                            detail: "罗翔说刑法；dsaasdsadsa",
                            time: "2021-10-01 10:00:00",
                        },
                        {
                            ygName: "张三",
                            detail: "蒸胆剑；存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司蒸胆剑； 存慰展基助吭礁挂肤寻挠者虏芳譬钻翘她司",
                            time: "2021-10-01 10:00:00",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        onfetchPropCallback(option) {
            console.log(option);
        },
    },
};
</script>
 
<style lang="less" scoped>
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
            font-size: 16px;
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
            width: 111px;
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
                font-size: 13px;
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
        width: 100vw;
        margin-top: -88px;
    }
}
</style>