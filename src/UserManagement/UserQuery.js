import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Button, Form, Input, Table} from 'antd';
import axios from "axios";
// import {Link, useNavigate} from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const UserQuery = (props) => {
    const onFinish = (values) => {
        console.log('Finish:', values);
        axios.get("http://121.37.87.123:8000/searchStudent/",  {
            params: {
                id: values.id,
                name: values.name,
                identity: values.identity
            }
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data.students);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const [data, setData] = useState([]);
    // const nav = useNavigate();

    const columns = [
        {title: '学号', dataIndex: 'id', key: 'id'},
        {title: '姓名', dataIndex: 'name', key: 'username'},
        {title: '身份', dataIndex: 'identity', key: 'identity'},
        // {title: '操作', dataIndex: 'operation', key: 'operation', render: (text, record)=> <Link to={`/labelpage/${record.id}`}>去标记</Link>},
        {title: '操作', dataIndex: 'operation', key: 'operation', render: (text, record)=> <a>删除</a>},

    ];



    // useEffect(()=>{
    //     axios.get("http://121.37.87.123:8000/searchStudent/", )
    //         .then((res) => {
    //             console.log(res.data);
    //             setData(res.data.map((item) => {
    //                 return {
    //                     ...item
    //                 }
    //             }))
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])

    //TODO expand 组件没有换下来
    return (
        <div>

            <Form name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    name="id"
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="id" />
                </Form.Item>

                <Form.Item
                    name="name"
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="name" />
                </Form.Item>

                <Form.Item
                    name="identity"
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="identity" />
                </Form.Item>

                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"

                        >
                            查询
                        </Button>
                    )}
                </Form.Item>
            </Form>

            {/*<Button type="primary" onClick={*/}
            {/*    (e)=>{*/}

            {/*    }*/}
            {/*}>新建标注任务</Button>*/}
            <Table
                columns={columns}
                dataSource={data}
            ></Table>
        </div>
    )
}

export default UserQuery;