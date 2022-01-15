<template>
    <div class="mod-public-fetch u-page">
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
                <span class="fz-11">￥</span>
                <span class="fz-20">{{ item.pcs }}</span>
                <span class="fz-13">次</span>
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
import bgMixin from "@/assets/js/mixin/bodyBgMixin";
export default {
    name: "publicFetch",
    mixins: [bgMixin],
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
                },
                {
                    name: "姚大萨达",
                    tel: "1877777772",
                    issue: ["意向", "待跟进", "随便"],
                    pcs: 1,
                    active: 2,
                },
                {
                    name: "姚为",
                    tel: "18736123456",
                    issue: ["待跟进"],
                    pcs: 2,
                    active: 0,
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
    overflow-y: auto;
}
</style>