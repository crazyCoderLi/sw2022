import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Card, Form, Input, Button, Checkbox, Radio, Upload, message} from 'antd';
import axios from "axios";
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';


const AddUser = (props) => {

    // const state = {
    //     loading: false,
    // };

    const [files, setFiles] = useState();
    const beforeUpload = (file)=>{
        console.log("aaaaaaaaaaaaaaa");
        setFiles(file);
        return false;
    }

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );


    const handleChange = info => {
        console.log("change");
        console.log(info);
        // if (info.file.status === 'uploading') {
        //     console.log("uploading");
        //     setLoading(true);
        //     return;
        // }
        // if (info.file.status === 'done') {
        //     // Get this url from response in real world.
        //     console.log("done")
        //     getBase64(info.file.originFileObj, imageUrl => {
        //             setLoading(false);
        //             setImageUrl(imageUrl);
        //         },
        //     );
        // }

        getBase64(info.file, imageUrl => {
                setLoading(false);
                setImageUrl(imageUrl);
            },
        );
    };


    const onFinish = (values) => {
        console.log('Success:', values);

        const formData = new FormData();
        formData.append("id", values.id);
        formData.append("username", values.username);
        formData.append("identity", values.identity);
        formData.append("image", files);
        console.log(formData.get("image"))
        console.log(formData);

        axios.post("http://121.37.87.123:8000/register", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Card title="添加用户" style={{
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
                        label="学号"
                        name="id"
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
                        label="姓名"
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
                        label="身份"
                        name="identity"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Radio.Group>
                            <Radio value={"学生"}>学生</Radio>
                            <Radio value={"老师"}>老师</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label="图片"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            // action="http://121.37.87.123:8000/register"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                        </Upload>
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            添加用户
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

// function beforeUpload(file) {
//     // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     // if (!isJpgOrPng) {
//     //     message.error('You can only upload JPG/PNG file!');
//     // }
//     // const isLt2M = file.size / 1024 / 1024 < 2;
//     // if (!isLt2M) {
//     //     message.error('Image must smaller than 2MB!');
//     // }
//     // return isJpgOrPng && isLt2M;
//
//
// }

export default AddUser;