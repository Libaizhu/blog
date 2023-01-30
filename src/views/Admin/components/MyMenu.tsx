import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd';
import { FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons';

import type { MenuProps } from 'antd';


type MenuItem = Required<MenuProps>['items'][number];

// 生成菜单对象
function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[],): MenuItem {
  return { key, icon, children, label, } as MenuItem;
}

const items: MenuItem[] = [
  getItem('首页', '/admin/homePage', <PieChartOutlined />),
  getItem('用户管理', 'users', <UserOutlined />, [
    getItem('Tom', '/admin/users'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', 'sub3', <FileOutlined />),
];

const MyMenu: React.FC = () => {
  const navigate = useNavigate()
  const curRoute = useLocation()
  
  let arr = curRoute.pathname.split('/')
  let initKey = (arr[arr.length-1]) as string

  console.log(initKey)

  const [openKeys, setOpenKeys] = useState<string[]>([initKey])

  // 点击跳转列表
  const menuClick = (e: { key: string }) => {
    const { key } = e
    if (key.indexOf('/admin') !== -1) {
      navigate(e.key)
    }
  }
  // 展开子列表
  const handleOpenChange = (keys: Array<string>) => {
    // console.log(keys)
    setOpenKeys([keys[keys.length - 1]])
  }

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[curRoute.pathname]}
      mode="inline"
      onOpenChange={handleOpenChange}
      // 菜单当前展开项数组
      openKeys={openKeys}
      onClick={menuClick}
      items={items} />
  )
};

export default MyMenu;