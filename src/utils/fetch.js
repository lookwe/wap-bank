import axios from 'axios'
import { Toast } from 'vant'

let apiTop = process.env.VUE_APP_BASE_API
let contentType = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
    (config) => {
        let headers = {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': contentType,
            token: sessionStorage.getItem('token'),
            timeout: 100000
        }
        config.headers = headers
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/**
 * 响应拦截
 */
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (err) => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = err.response.data.title || '请求失败'
                    break
                case 401:
                    err.message = '授权失败，请检查token'
                    break
                case 403:
                    err.message = '拒绝访问'
                    break
                case 404:
                    err.message = `请求${err.response.config.url
                        .split('/')
                        .pop()
                        .replace(/\.html/, '')}接口出错`
                    break
                case 408:
                    err.message = '请求超时'
                    break
                case 500:
                    err.message = '服务器内部错误'
                    break
                case 501:
                    err.message = '服务未实现'
                    break
                case 502:
                    err.message = '网关错误'
                    break
                case 503:
                    err.message = '服务不可用'
                    break
                case 504:
                    err.message = '网关超时'
                    break
                case 505:
                    err.message = 'HTTP版本不受支持'
                    break
                default:
            }
        }
        Toast.fail(err.message)
        return Promise.reject(err)
    }
)

// http request
const request = function (baseUrl, url, method, params, urlParams) {
    const { isHandleError } = params || {}
    params = ['get', 'delete'].includes(method) ? { params } : params
    urlParams = urlParams && { params: urlParams }
    return new Promise((resolve, reject) => {
        axios[method](baseUrl + url, params, urlParams)
            .then((res) => {
                const code = res.data.code
                if (code === 200) {
                    resolve(res.data.data || res.data)
                } else if (!isHandleError) {
                    Toast.fail(res.data.text || '网络异常 请稍后重试 ')
                    reject(res.data.data || res.data)
                } else {
                    reject(res)
                }
            })
            .catch((err) => {
                reject(err.data)
            })
    })
}

const post = (url, params, urlParams) => {
    return request(apiTop, url, 'post', params, urlParams)
}
const del = (url, params) => {
    return request(apiTop, url, 'delete', params)
}
const put = (url, params, urlParams) => {
    return request(apiTop, url, 'put', params, urlParams)
}
const get = (url, params) => {
    return request(apiTop, url, 'get', params)
}
// 编辑或新增
const save = async (url, params = {}) => {
    params = { ...params }
    const { id } = params
    if (id) {
        delete params.id
        return put(`${url}/${id}`, params)
    } else {
        return post(url, params)
    }
}

export { post, get, del, put, save }
