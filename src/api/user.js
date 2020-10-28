/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-28 15:31:21
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-28 16:27:31
 */
import axios from './http'
import { BASEURL } from '@/config/base-config'

export const login = data => {
    return axios.post(`${BASEURL.REQUEST_URL}user/login`, data)
}
