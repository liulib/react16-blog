import React, { Fragment } from 'react'
import {Button} from 'antd'
import LoginModal from './loginModal'

const UserInfo = (props)=>{
    return (<Fragment><Button
              ghost
              type='primary'
              size='small'
              style={{ marginRight: 20 }}
              >
              登录
            </Button>
            <Button ghost type='danger' size='small' >
              注册
            </Button></Fragment>)
}

export default UserInfo