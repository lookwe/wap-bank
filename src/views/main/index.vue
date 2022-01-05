<template>
    <div>
        <Home v-if="active === 'home'" />
        <User v-if="active === 'user'" />
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item name="user" icon="search">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Home from '@/views/home/index'
import User from '@/views/user/index'
export default {
    components: {
        Home,
        User
    },
    data() {
        return {
            active: 'home'
        }
    }
}
</script>

<style></style>
