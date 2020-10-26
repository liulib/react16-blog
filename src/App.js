/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-26 09:37:01
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-26 10:21:29
 */
import React, { Fragment } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Redirect to={'/home'} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
