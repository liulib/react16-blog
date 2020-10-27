import React from 'react'
import { Row, Col } from 'antd';
import SearchBar from './searchBar'
import NavList from './navList'
import UserInfo from './userInfo'
// 响应式的配置
// const responsive = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 }

const HeaderRight = (props)=>{
    return (<Row justify="end">
      <Col><SearchBar></SearchBar></Col>
      <Col>
       <NavList></NavList>
      </Col>
      <Col>
        <UserInfo></UserInfo>
      </Col>
    </Row>)
}
export default HeaderRight