import React from 'react'
import {Outlet} from 'react-router-dom'
import MyMenu from './components/MyMenu';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



const Admin: React.FC = ():JSX.Element => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 侧边栏 */}
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <MyMenu />
      </Sider>
      {/* 右侧内容区 */}
      <Layout className="site-layout">
        <Header style={{ backgroundColor: '#fff', padding: 0 }}>
          <Breadcrumb style={{ margin: '16px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content className="site-content">
          {/* 子路由展示 */}
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '36px' }}>Ant Design ©2022 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
};

export default Admin;