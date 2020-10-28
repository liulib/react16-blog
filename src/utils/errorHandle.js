/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-13 16:45:29
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-28 15:28:41
 */
import { message } from 'antd'

// 提示函数
const tip = msg => {
    message.error({
        content: msg,
        duration: 1
    })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} response 请求
 */
const errorHandle = response => {
    const status = response.status || -1000 // -1000 自己定义，连接错误的status
    if ((status >= 200 && status < 300) || status === 304) {
        // 如果http状态码正常，则直接返回数据
        return response.data
    } else {
        let errorInfo = ''
        switch (status) {
            case -1:
                errorInfo = '远程服务响应失败,请稍后重试'
                break
            case 400:
                errorInfo = '400：错误请求'
                break
            case 401:
                errorInfo = '401：访问令牌无效或已过期'
                break
            case 403:
                errorInfo = '403：拒绝访问'
                break
            case 404:
                errorInfo = '404：资源不存在'
                break
            case 405:
                errorInfo = '405：请求方法未允许'
                break
            case 408:
                errorInfo = '408：请求超时'
                break
            case 500:
                errorInfo = '500：访问服务失败'
                break
            case 501:
                errorInfo = '501：未实现'
                break
            case 502:
                errorInfo = '502：无效网关'
                break
            case 503:
                errorInfo = '503：服务不可用'
                break
            case -100:
                errorInfo = '连接超时'
                break
            default:
                errorInfo = `连接错误`
        }
        tip(errorInfo)
        return {
            status,
            msg: errorInfo
        }
    }
}

export default errorHandle
