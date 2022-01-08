import Vue from 'vue'
import {
    Tabbar,
    TabbarItem,
    Button,
    Swipe,
    SwipeItem,
    Lazyload,
    Icon,
    Image as VanImage,
    Popup,
    Slider,
    IndexBar,
    IndexAnchor,
    Search,
    Cell, PullRefresh, Empty, Skeleton
} from 'vant' //引入组件

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(VanImage);
Vue.use(Popup);
Vue.use(Slider);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Search);
Vue.use(Cell);
Vue.use(PullRefresh);
Vue.use(Empty);
Vue.use(Skeleton);
Vue.use(Lazyload);

// 自定义全局组件
import comIndexAnchor from './com-index-anchor' // 地址筛选
Vue.component('com-index-anchor', comIndexAnchor)

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
    lazyComponent: true,
});