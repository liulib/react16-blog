import React from 'react'
import {Button} from 'antd'
import LoginModal from './loginModal'
import {connect} from 'react-redux' 

class UserInfo extends React.Component {

  render(){
    return (<><Button
              ghost
              type='primary'
              size='small'
              style={{ marginRight: 20 }}
              onClick={this.props.handleLogin}
              >
              登录
            </Button>
            <Button ghost type='danger' size='small' >
              注册
            </Button>
            <p>{this.props.userInfo.username}</p>
            <LoginModal></LoginModal></>)
  }
} 

const mapStateToProps = (state)=>{
  return {
    userInfo:state.user.userInfo
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleLogin(){}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserInfo)