import Vue from 'vue'
import {
    Tabbar, TabbarItem, Button, Swipe, SwipeItem, Lazyload, Icon,
    Image as VanImage
} from 'vant' //引入组件
import Test from './test'

Vue.use(Lazyload);

Vue.component('Test', Test)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(VanImage);


// 注册时可以配置额外的选项
Vue.use(Lazyload, {
    lazyComponent: true,
});
