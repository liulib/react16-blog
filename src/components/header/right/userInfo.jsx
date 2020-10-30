import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { updateSignVisible } from '../../../store/common/actions'

class UserInfo extends React.Component {
    render() {
        return (
            <>
                <Button
                    ghost
                    type="primary"
                    size="small"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                        this.props.showModal('login')
                    }}
                >
                    登录
                </Button>
                <Button
                    ghost
                    type="danger"
                    size="small"
                    onClick={() => {
                        this.props.showModal('register')
                    }}
                >
                    注册
                </Button>
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
        showModal(type) {
            console.log('object')
            dispatch(updateSignVisible({ visible: true, type: type }))
        }
    }
}

export default connect(mapState, mapDispatch)(UserInfo)
