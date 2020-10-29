/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-26 11:03:10
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-29 15:33:49
 */
import * as constants from '../constants'
import { reqLogin } from '../../api/user'

export const setUserInfo = data => ({
    type: constants.SET_USER_INFO,
    data
})

export const login = data => {
    return async dispatch => {
        const res = await reqLogin(data)
        const action = setUserInfo(res.data.data)
        dispatch(action)
        console.log(res.data.data)
    }
}
