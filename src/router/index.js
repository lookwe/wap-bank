/*
 * @Author: daihanqiao@126.com
 * @Date: 2020-12-25 18:14:31
 * @LastEditTime: 2021-03-24 14:44:38
 * @LastEditors: daihanqiao@126.com
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () => import( /* webpackChunkName: 'Main' */ '@/views/main')
// 首页模块
const HomeDetails = () => import( /* webpackChunkName: 'HomeDetails' */ '@/views/home/home-details')
const HomeMation = () => import( /* webpackChunkName: 'HomeMation' */ '@/views/home/home-mation')

// ==== 用户模块 ====

// -- 客户

// -- 经理
const myCard = () => import( /* webpackChunkName: 'myCard' */ '@/views/user/manager/my-card')
const myClient = () => import( /* webpackChunkName: 'myClient' */ '@/views/user/manager/my-client')
const myPlan = () => import( /* webpackChunkName: 'myPlan' */ '@/views/user/manager/my-plan')
const publicFetch = () => import( /* webpackChunkName: 'publicFetch' */ '@/views/user/manager/public-fetch')


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'main',
        component: Main
    },
    {
        path: '/home-details',
        name: 'HomeDetails',
        component: HomeDetails
    },
    {
        path: '/home-mation',
        name: 'HomeMation',
        component: HomeMation
    },

    // 用户模块
    {
        path: '/my-card',
        name: 'myCard',
        component: myCard
    },
    {
        path: '/my-client',
        name: 'myClient',
        component: myClient
    },
    {
        path: '/my-plan',
        name: 'myPlan',
        component: myPlan
    },
    {
        path: '/public-fetch',
        name: 'publicFetch',
        component: publicFetch
    },
]

const router = new VueRouter({
    routes
})

export default router