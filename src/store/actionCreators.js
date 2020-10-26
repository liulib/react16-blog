/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-26 11:03:10
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-26 15:01:29
 */
import * as constants from './constants'

export const getData = data => ({
    type: constants.SET_DATA,
    data
})
