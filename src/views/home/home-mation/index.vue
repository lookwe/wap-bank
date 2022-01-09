<template>
    <!-- 资讯列表 -->
    <div class="mod-information u-page">
        <div>
            <div
                class="info-list-item u-page"
                v-for="(item, index) in infoList"
                :key="index"
                @click="onToPage(item)"
            >
                <div class="flex jsb">
                    <div :class="{ 'txt-tips-color': item.isBrowse }">
                        周万秋申请了银行富税贷
                    </div>
                    <div class="round-dot red" v-show="!item.isBrowse"></div>
                </div>
                <div class="mt20 fz-12 txt-tips-color">
                    申请时间：12/20 08:45
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: "homeMation",
    data() {
        return {
            infoList: [
                { type: 1 },
                { type: 2 },
                { isBrowse: false },
                { isBrowse: true },
                { isBrowse: true },
                { isBrowse: true },
            ],
        };
    },
    created() {
        console.log(this.$route);
    },
    methods: {
        onToPage({ type }) {
            const router = {
                params: { id: "E123" },
            };
            router.name = type == 1 ? "HomeDetails" : "myClient";
            this.$router.push(router);
        },
    },
};
</script>
 
<style scoped lang="less">
.mod-information {
    .info-list-item {
        background: #f6f6f6;
        border-radius: 8px;
        &:not(:nth-child(1)) {
            margin-top: 20px;
        }
    }
}
</style>