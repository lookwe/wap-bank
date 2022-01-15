import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = () => import( /* webpackChunkName: 'Main' */ '@/views/main')
// 首页模块
const HomeDetails = () => import( /* webpackChunkName: 'HomeDetails' */ '@/views/home/home-details')
const HomeMation = () => import( /* webpackChunkName: 'HomeMation' */ '@/views/home/home-mation')
const homeShare = () => import( /* webpackChunkName: 'homeShare' */ '@/views/home/home-share')
// ==== 用户模块 ====


// -- 经理
const myCard = () => import( /* webpackChunkName: 'myCard' */ '@/views/user/manager/my-card')
const myClient = () => import( /* webpackChunkName: 'myClient' */ '@/views/user/manager/my-client')
const myPlan = () => import( /* webpackChunkName: 'myPlan' */ '@/views/user/manager/my-plan')
const publicFetch = () => import( /* webpackChunkName: 'publicFetch' */ '@/views/user/manager/public-fetch')

// -- 【我的客户、我的进件】详情页  ---> 其他简单详情由弹框实现
const myClientDetail = () => import( /* webpackChunkName: 'clientDetail' */ '@/views/user/manager/my-client/client-detail')
const myPlanDetail = () => import( /* webpackChunkName: 'myPlanDetail' */ '@/views/user/manager/my-plan/plan-detail')


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/main'
},
{
    path: '/main',
    name: 'main',
    component: Main,
    meta: { keeAlive: true }
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

{
    path: '/home-share',
    name: 'homeShare',
    component: homeShare
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
{
    path: '/my-client-detail',
    name: 'myClientDetail',
    component: myClientDetail
},
{
    path: '/my-plan-detail',
    name: 'myPlanDetail',
    component: myPlanDetail
},

]

const router = new VueRouter({
    routes
})

export default router
