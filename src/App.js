/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-26 09:37:01
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-27 11:03:12
 */
import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
// 导入路由
import routes from './routes'
function App() {
    return (
        <Fragment>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Fragment>
    )
}

export default App
