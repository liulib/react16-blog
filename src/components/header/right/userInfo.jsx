import React from 'react'
import { Button } from 'antd'
import LoginModal from './loginModal'
import { connect } from 'react-redux'
import { login } from '../../../store/user/actions'

class UserInfo extends React.Component {
    render() {
        return (
            <>
                <Button
                    ghost
                    type="primary"
                    size="small"
                    style={{ marginRight: 20 }}
                    onClick={this.props.handleLogin}
                >
                    登录
                </Button>
                <Button ghost type="danger" size="small">
                    注册
                </Button>
                <p>{this.props.userInfo.username}</p>
                <LoginModal></LoginModal>
            </>
        )
    }
}

const mapState = state => {
    return {
        userInfo: state.user.userInfo
    }
}

const mapDispatch = dispatch => {
    return {
        handleLogin() {
            dispatch(login({ username: 'liulib1', password: '123456' }))
        }
    }
}

export default connect(mapState, mapDispatch)(UserInfo)
