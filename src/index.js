/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-26 09:37:01
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-26 17:30:34
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/style/frame.scss'
import { Provider } from 'react-redux'
import store from './store'

const Apps = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(Apps, document.getElementById('root'))
