// 全局主题配置，需要在项目中通过modifyVars 的方式来进行覆盖变量
// 主题配置地址：https://github.com/youzan/vant/blob/2.x/src/style/var.less
module.exports = {
    'primary-color': '#FF8300',
    'text-color': '#000000', // 主文本色
    'text-color-secondary': '#8E8E93', // 次文本色
    'button-primary-background-color': '@primary-color', // 按钮背景色
    'button-primary-border-color': '@primary-color',
    'tabbar-item-active-color': '@primary-color', //标签栏颜色
    'button-small-height': '29px', // small按钮高度
    'button-round-border-radius': '29px' // 圆角按钮radius大小
}
