/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-27 13:52:50
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-27 14:29:37
 */
import React, { Component } from 'react'
import { Layout } from 'antd'
import styles from './footer.module.css'
const { Footer } = Layout

class WebFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createTime: 1603779257024,
            tips: ''
        }
    }
    componentDidMount() {
        // setInterval(() => {
        //     const newTips = this.timeFn(this.state.createTime)
        //     this.setState({ tips: newTips })
        // }, 1000)
    }
    render() {
        return (
            <Footer className={styles.footer}>
                <p>MIT Licensed | Copyright © 2020-present liulib</p>
                <p className={styles.tips}>{this.state.tips}</p>
            </Footer>
        )
    }
    /**
     * @description: 计算两个时间差
     * @param {*} createTime
     * @return {*}
     */
    timeFn(createTime) {
        //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
        var dateEnd = new Date() //获取当前时间
        var dateDiff = dateEnd.getTime() - createTime //时间差的毫秒数
        var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)) //计算出相差天数
        var leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000)
        var timeFn =
            '本站运行时长：' +
            dayDiff +
            '天 ' +
            hours +
            '小时 ' +
            minutes +
            '分钟' +
            seconds +
            '秒'
        return timeFn
    }
}

export default WebFooter
