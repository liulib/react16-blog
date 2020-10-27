/*
 * @Des          :
 * @Author       : liulib
 * @Date         : 2020-10-27 15:15:52
 * @LastEditors  : liulib
 * @LastEditTime : 2020-10-27 16:08:34
 */
import React from 'react'
import { Menu } from 'antd';
import navList from './navListData'
import { Link, useLocation } from 'react-router-dom'


const NavList = (props)=>{
    const location = useLocation()
    return <Menu mode="horizontal" selectedKeys={[location.pathname]}>
      {navList.map(nav => (
        <Menu.Item key={nav.link}>
          <Link to={nav.link}>
            <span className='nav-text'>{nav.title}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
}

export default NavList