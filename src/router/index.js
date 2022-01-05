/*
 * @Author: daihanqiao@126.com
 * @Date: 2020-12-25 18:14:31
 * @LastEditTime: 2021-03-24 14:44:38
 * @LastEditors: daihanqiao@126.com
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () => import(/* webpackChunkName: 'Main' */ '@/views/main/index.vue')
const Product = () => import(/* webpackChunkName: 'Product' */ '@/views/product/index.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'main',
        component: Main
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    }
]

const router = new VueRouter({
    routes
})

export default router
