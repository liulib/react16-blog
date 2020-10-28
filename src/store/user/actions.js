/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-26 11:03:10
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-28 16:25:58
 */
import * as constants from '../constants'

export const setUserInfo = data => ({
    type: constants.SET_USER_INFO,
    data
})

export const login = data => {
    return () => {}
}
