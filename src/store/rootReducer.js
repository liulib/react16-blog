/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-26 11:03:32
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-30 09:57:18
 */
import { combineReducers } from 'redux'
import user from './user/reducer'
import common from './common/reduce'

export default combineReducers({
    user,
    common
})
