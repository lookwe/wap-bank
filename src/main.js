import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/style/index.less'
import '@/components'

// 工具类
import instructions from '@/utils/instructions'
import filters from '@/utils/filters'
import utils from '@/utils'

// 网络请求器
Object.keys(utils).forEach((k) => {
    Vue.prototype[`$${k}`] = utils[k]
})
Object.keys(instructions).forEach((k) => Vue.directive(k, instructions[k]))
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
