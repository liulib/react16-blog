import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Input, Button, Checkbox } from 'antd'
import { login } from '@store/user/actions'

class SignModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            code: ''
        }
    }
    onFinish(values) {
        console.log('Success:', values)
    }

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo)
    }
    render() {
        return (
            <>
                <Modal
                    title="Basic Modal"
                    visible={this.props.visible}
                    onOk={this.props.handleOk}
                    onCancel={this.props.handleCancel}
                    footer={null}
                >
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!'
                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                github登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}

const mapState = state => {
    return {
        visible: state.common.signVisible
    }
}

const mapDispatch = dispatch => {
    return {
        handleLogin() {
            dispatch(login({ username: 'liulib1', password: '123456' }))
        }
    }
}

export default connect(mapState, mapDispatch)(SignModal)
