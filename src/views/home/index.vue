<template>
    <div>
        首页
        <van-button type="primary" size="small" round @click="push">测试跳转</van-button>
    </div>
</template>

<script>
export default {
    methods: {
        push() {
            this.$router.push('product')
        }
    }
}
</script>

<style></style>
