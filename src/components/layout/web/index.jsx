/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-27 09:59:33
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-27 15:08:56
 */
import React from 'react'
import { Layout, Row, Col } from 'antd'
import WebHeader from '../../header'
import WebFooter from '../../footer'
import styles from './index.module.css'

// 响应式的配置
const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

const WebLayout = props => {
    return (
        <Layout className={styles.container}>
            <WebHeader></WebHeader>
            <Row className={styles.wrapper}>
                <Col {...siderLayout}>{/* <SideBar /> */}</Col>
                <Col {...contentLayout}>{/* <AppMain {...props} /> */}</Col>
            </Row>
            <WebFooter></WebFooter>
        </Layout>
    )
}

export default WebLayout
