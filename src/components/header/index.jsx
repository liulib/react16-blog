/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-27 11:21:42
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-27 15:26:02
 */
import React from 'react'
import { Layout, Row, Col } from 'antd'
import styles from './index.module.css'
import HeaderLeft from './left'
import HeaderRight from './right'
const { Header } = Layout
// 响应式的配置
const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 }
const responsiveRight = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 }

const WebHeader = props => {
    return (
        <Header className={styles.header}>
            <Row>
                <Col {...responsiveLeft}>
                    <HeaderLeft></HeaderLeft>
                </Col>
                <Col {...responsiveRight}><HeaderRight></HeaderRight></Col>
            </Row>
        </Header>
    )
}

export default WebHeader
