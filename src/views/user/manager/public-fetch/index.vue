<template>
    <div class="mod-public-fetch">
        <div
            class="mod-public-fetch-card"
            v-for="item of list"
            :key="item.name"
        >
            <div class="card-head">
                <div class="card-name">
                    {{ item.name }}
                </div>
                <div class="card-issue" v-for="iss of item.issue" :key="iss">
                    <span class="issue-txt">
                        {{ iss }}
                    </span>
                </div>
                <div class="card-btn" @click="$refs.fetchProp.show(item)">
                    <div>获取</div>
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
            </div>
            <div class="card-footer">
                <div class="">流转次数</div>
                <div class="enter" @click="$refs.fetchProp.show(item)">
                    &nbsp;>
                </div>
            </div>
        </div>
        <fetch-prop ref="fetchProp" @confirm="onfetchPropCallback"></fetch-prop>
    </div>
</template>
 
<script>
import fetchProp from "@/views/user/manager/public-fetch/components/fetch-popup.vue";
export default {
    name: "publicFetch",
    components: {
        fetchProp,
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
 
<style scoped lang="less">
.mod-public-fetch {
    @import "../../style/index.less";
    opacity: 1;
    background: rgba(246, 246, 246, 1);
    width: 100vw;
    min-height: 100vh;
    padding-top: 16px;
}
</style>