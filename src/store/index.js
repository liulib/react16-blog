/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-26 11:03:25
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-28 16:00:00
 */
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

// 这里让项目支持浏览器插件Redux DevTools
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, enhancer)

export default store
