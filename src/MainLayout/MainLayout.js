import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

const MainLayout = () => {

    // const nav = useNavigate();

    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
                {/*    <Menu.Item key="1">nav 1</Menu.Item>*/}
                {/*    <Menu.Item key="2">nav 2</Menu.Item>*/}
                {/*    <Menu.Item key="3">nav 3</Menu.Item>*/}
                {/*</Menu>*/}
            </Header>
            <Content style={{padding: '0 50px', height: "100%"}}>
                {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["ModelManagementPage"]}
                            // defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                            onSelect={
                                (item) => {
                                    console.log(item);
                                    let key = item.key;
                                    // if (key === "1") {
                                    //     nav("/modelmanagementpage");
                                    // } else if (key === "2") {
                                    //     nav("/datasetmanagementpage");
                                    // } else if (key === "3") {
                                    //     nav("/labeljobmanagementpage")
                                    // }
                                    // switch (key) {
                                    //     case "ModelManagementPage":
                                    //         nav("/modelmanagementpage");
                                    //         break;
                                    //     case "DatasetManagementPage":
                                    //         nav("/datasetmanagementpage");
                                    //         break;
                                    //     case "LabelJobManagementPage":
                                    //         nav("/labeljobmanagementpage");
                                    //         break;
                                    //     case "TrainAndDeployJobManagementPage":
                                    //         nav("/trainanddeployjobmanagementpage");
                                    //         break;
                                    //
                                    // }

                                }
                            }
                        >
                            {/*<SubMenu key="sub1" title="subnav 1">*/}
                            {/*    <Menu.Item key="1">option1</Menu.Item>*/}
                            {/*    <Menu.Item key="2">option2</Menu.Item>*/}
                            {/*    <Menu.Item key="3">option3</Menu.Item>*/}
                            {/*    <Menu.Item key="4">option4</Menu.Item>*/}
                            {/*</SubMenu>*/}
                            {/*<SubMenu key="sub2" title="subnav 2">*/}
                            {/*    <Menu.Item key="5">option5</Menu.Item>*/}
                            {/*    <Menu.Item key="6">option6</Menu.Item>*/}
                            {/*    <Menu.Item key="7">option7</Menu.Item>*/}
                            {/*    <Menu.Item key="8">option8</Menu.Item>*/}
                            {/*</SubMenu>*/}
                            {/*<SubMenu key="sub3" title="subnav 3">*/}
                            {/*    <Menu.Item key="9">option9</Menu.Item>*/}
                            {/*    <Menu.Item key="10">option10</Menu.Item>*/}
                            {/*    <Menu.Item key="11">option11</Menu.Item>*/}
                            {/*    <Menu.Item key="12">option12</Menu.Item>*/}
                            {/*</SubMenu>*/}
                            <SubMenu key="ModelManagement" title="人员信息管理">
                                <Menu.Item key="ModelManagementPage">增加人员信息</Menu.Item>
                                <Menu.Item key="aaa">啊啊啊啊啊</Menu.Item>
                            </SubMenu>
                            <SubMenu key="DatasetManagement" title="数据集管理">
                                <Menu.Item key="DatasetManagementPage">数据集总览</Menu.Item>
                            </SubMenu>
                            <SubMenu key="JobManagement" title="任务管理">
                                <Menu.Item key="LabelJobManagementPage">标注任务总览</Menu.Item>
                                <Menu.Item key="TrainAndDeployJobManagementPage">训练与部署任务总览</Menu.Item>

                            </SubMenu>
                        </Menu>
                    </Sider>
                    {/*<Content style={{padding: '0 24px', minHeight: 280}}><Outlet></Outlet></Content>*/}
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default MainLayout;