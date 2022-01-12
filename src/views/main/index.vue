<template>
    <div>
        <div class="mb40">
            <keep-alive>
                <Home v-if="active === 'home'" />
                <User v-if="active === 'user'" />
            </keep-alive>
        </div>

        <van-tabbar safe-area-inset-bottom v-model="active">
            <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item name="user" icon="contact">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Home from "@/views/home/index";
import User from "@/views/user/index";
export default {
    components: {
        Home,
        User,
    },
    data() {
        return {
            active: "home",
        };
    },
};
</script>

<style></style>
