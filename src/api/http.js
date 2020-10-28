/*
 * @Des          : axios封装 主要做了请求参数的格式转换、错误处理
 * @Author       : liulib
 * @Date         : 2020-10-12 14:58:07
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-28 16:26:29
 */
/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'
import errorHandle from '../utils/errorHandle'
import qs from 'qs'

// 创建axios实例
const instance = axios.create({
    // 超时时间
    timeout: 1000 * 12
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 对 data 进行任意转换处理 实际上用不到
    // transformRequest: [
    //     function(data) {
    //         return data
    //     }
    // ]
    // `withCredentials`
    //  withCredentials: false, // default
})

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 在发送请求之前做处理...
        // post默认请求格式为json格式  如果你的项目默认是使用application/x-www-form-urlencoded 则启用下面的代码(这时候你想要json格式的请求就传json的请求头)
        // ====>>这里有坑 如果直接在生成实例的时候传header:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} 下面就无法获取到config.headers['Content-Type']
        // config.headers = Object.assign(
        //     {
        //         'Content-Type':
        //             'application/x-www-form-urlencoded; charset=UTF-8'
        //     },
        //     config.headers
        // )
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // const token = store.state.token
        // token && (config.headers.Authorization = token)
        // 根据请求头修改post请求参数格式
        if (config.method === 'post') {
            const contentType = config.headers['Content-Type']
            // 根据Content-Type转换data格式
            if (contentType) {
                // json multipart/form-data 都不用转换
                if (contentType.includes('urlencoded')) {
                    // 类型 'application/x-www-form-urlencoded;'
                    // 服务器收到的raw body(原始数据) name=nowThen&age=18
                    config.data = qs.stringify(config.data)
                }
            }
        }
        return config
    },
    error => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    response => {
        // 对响应数据做处理，根据实际数据结构改动！！...
        return response
    },
    // 请求失败
    error => {
        if (error.response) {
            return Promise.reject(errorHandle(error.response))
        } else if (
            // 请求超时
            error.code === 'ECONNABORTED' &&
            error.message.indexOf('timeout') !== -1
        ) {
            return Promise.reject(errorHandle({ status: -100 }))
        } else {
            // 连接出错
            return Promise.reject(errorHandle({}))
        }
    }
)

export default instance
