<template>
    <van-popup
        v-model="isShowManager"
        position="bottom"
        closeable
        :style="{
            height: '13%',
            width: '90%',
            left: '50%',
            borderRadius: '10px',
            transform: 'translateX(-50%)',
            bottom: '3%',
        }"
    >
        <div class="u-page">
            <div class="flex">
                <van-image
                    round
                    width="20px"
                    height="20px"
                    src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <div class="ml10 fz-15 txt-tips-color">客户经理</div>
            </div>

            <div class="flex jsb ac mt25">
                <div class="fz-20">18592658632</div>
                <van-button
                    round
                    type="primary"
                    size="small"
                    @click="onDialPhone"
                    >拨打电话</van-button
                >
            </div>
        </div>
    </van-popup>
</template>
 
<script>
export default {
    name: "editData",
    data() {
        return {
            isShowManager: false,
        };
    },
    methods: {
        show() {
            this.isShowManager = true;
        },

        onDialPhone() {},
    },
};
</script>
 
<style scoped lang="less">
</style>