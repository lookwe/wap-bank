/*
 * @Author: daihanqiao@126.com
 * @Date: 2021-04-09 16:45:04
 * @LastEditTime: 2021-04-15 16:13:24
 * @LastEditors: daihanqiao@126.com
 */
import Utils from './index'
import { Toast } from 'vant'
export default {
    copy: {
        name: 'copy',
        inserted(el, binding) {
            el.onclick = () =>
                Utils.copyText(binding.value, () => {
                    Toast.success('复制成功')
                })
        }
    }
}
