import Vue from 'vue'
import { Tabbar, TabbarItem, Button } from 'vant' //引入组件
import Test from './test'

Vue.component('Test', Test)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
