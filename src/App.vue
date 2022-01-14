<template>
    <div id="app">
        <keep-alive>
            <!-- Does the page need to be cached -->
            <router-view v-if="$route.meta.keeAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keeAlive"></router-view>
    </div>
</template>

<script>
export default {};
</script>

