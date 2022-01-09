<template>
    <div>
        <!-- 用户 -->
        <client v-if="user_role == 1"></client>

        <!-- 经理 -->
        <manager v-if="user_role == 2"></manager>
    </div>
</template>

<script>
import client from "@/views/user/client";
import manager from "@/views/user/manager";
export default {
    name: "user",
    components: {
        client,
        manager,
    },
    data() {
        return {
            user_role: 2,
        };
    },
    computed: {},
};
</script>
 
<style scoped lang="less">
</style>