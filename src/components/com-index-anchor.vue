<template>
    <!-- 地址选择 -->
    <van-popup
        v-model="isShow"
        position="right"
        :style="{ width: '100%', height: '100%' }"
    >
        <div class="com-index-bar">
            <div class="search-anchor">
                <van-search
                    v-model="searchAnchor"
                    placeholder="请输入地区搜索"
                />
            </div>

            <van-index-bar class="index-bar-box" :sticky-offset-top="50">
                <div v-for="(item, index) in getGeneratLetter" :key="index">
                    <van-index-anchor :index="item" />
                    <van-cell
                        :title="item + '文本'"
                        @click="__onCellClick(item)"
                    />
                    <van-cell
                        :title="item + '文本'"
                        @click="__onCellClick(item)"
                    />
                </div>
            </van-index-bar>
        </div>
    </van-popup>
</template>
 
<script>
export default {
    name: "comIndexAnchor",
    data() {
        return {
            isShow: false,
            searchAnchor: "",
        };
    },
    computed: {
        getGeneratLetter() {
            let str = [];
            for (let i = 65; i < 91; i++) {
                str.push(String.fromCharCode(i));
            }
            return str;
        },
    },
    methods: {
        show() {
            this.isShow = true;
        },

        __onCellClick(item) {
            this.isShow = false;
            this.$emit("confirm", { ...item });
        },
    },
};
</script>
 
<style scoped lang="less">
.com-index-bar {
    position: absolute;
    height: 100%;
    overflow-y: auto;
    .search-anchor {
        height: 55;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }

    .index-bar-box {
        width: 100vw;
        margin-top: 60px;

        /deep/.van-index-anchor {
            background-color: #f7f8fa;
        }
    }
}
</style>