import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Card, Form, Input, Button, Checkbox, message} from 'antd';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './loginpage.css'


const LoginPage = (props) => {

    const nav = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post("http://121.37.87.123:8000/login", {
            username: values.username,
            password: values.password
        })
            .then((res) => {
                console.log(res);
                if (res.data.statuscode === 1) {
                    message.success(res.data.description);
                    nav("/main");
                } else {
                    message.error(res.data.description);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="bg">
            <h1 className="title">欢迎登录餐厅自助结算系统管理员端</h1>
            <Card title="管理员登录" style={{
                width: 400,
                margin: "0 auto",
                position: "relative",
                top: "200px",
            }}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

export default LoginPage;