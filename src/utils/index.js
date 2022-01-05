import dayjs from 'dayjs'
import { post, get, put, del, save } from './fetch'
export default {
    // 加密手机号，185****8811
    encryPhone(val) {
        if (!val) return ''
        return val.toString().replace(/^(\d{3})\d*(\d{4})$/, '$1****$2')
    },
    // 添加style，并返回id用于删除操作
    addCss: (css) => {
        const d = document.createElement('style')
        d.setAttribute('type', 'text/css')
        d.innerHTML = css
        const id = `sx-css-add-${parseInt(Math.random() * 1000000)}`
        d.id = id
        document.getElementsByTagName('head')[0].appendChild(d)
        return id
    },
    // 日期格式化
    formatDate: (time) => {
        return time ? dayjs(time).format('YYYY-MM-DD') : '-'
    },
    // 时间格式化
    formatTime: (time) => {
        return time ? dayjs(time).format('YYYY-MM-DD HH:mm:ss') : '-'
    },
    /**
     * 格式化字符显示
     * @param {*} text，为空时，显示-
     * @param {*} unit 单位，拼接到text后面
     */
    formatStr(text, unit) {
        if (typeof unit !== 'string') {
            unit = ''
        }
        return text || parseInt(text) === 0 ? text + unit : '-'
    },
    /**
     * 转换数组对象key为label/value
     * @param {*} arr 原数据
     * @param {*} key ['label','value']
     */
    changeKey: (arr, key) => {
        let newArr = []
        arr.length &&
            arr.forEach((item) => {
                let newObj = {}
                newObj['label'] = item[key[0]]
                newObj['value'] = item[key[1]]
                newArr.push(newObj)
            })
        return newArr
    },

    //複製文本內容
    copyText: (text, callBack) => {
        const textarea = document.createElement('input')
        const currentFocus = document.activeElement
        document.body.appendChild(textarea)
        textarea.value = text
        textarea.focus()
        if (textarea.setSelectionRange) {
            textarea.setSelectionRange(0, textarea.value.length)
        } else {
            textarea.select()
        }
        let flag
        try {
            flag = document.execCommand('copy') //执行复制
        } catch (error) {
            flag = false
        }
        document.body.removeChild(textarea) //删除元素
        currentFocus.focus()
        callBack && callBack()
        return flag
    },
    post,
    get,
    put,
    del,
    save
}
