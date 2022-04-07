import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

const MainLayout = () => {

    const nav = useNavigate();

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
                                    switch (key) {
                                        case "AddUser":
                                            nav("/main/adduser");
                                            break;
                                        case "UserQuery":
                                            nav("/main/userquery");
                                            break;
                                        case "ConsumeRecordQuery":
                                            nav("/main/consumerecordquery");
                                            break;

                                    }

                                }
                            }
                        >

                            <SubMenu key="UserManagement" title="人员信息管理">
                                <Menu.Item key="AddUser">增加人员信息</Menu.Item>
                                <Menu.Item key="UserQuery">查询人员信息</Menu.Item>
                            </SubMenu>
                            <SubMenu key="DatasetManagement" title="**管理">
                                <Menu.Item key="DatasetManagementPage">**</Menu.Item>
                            </SubMenu>
                            <SubMenu key="ConsumeRecordManagement" title="明细管理">
                                <Menu.Item key="ConsumeRecordQuery">明细查询</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}><Outlet></Outlet></Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default MainLayout;