import React from 'react'
import { Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom'

const App = () => {
    const menus = [
        {
            label: '首页',
            path: '/home'
        },
        {
            label: '列表',
            path: '/list'
        },
        {
            label: '详情',
            path: '/detail'
        },
    ]
    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys='0'>
                {
                    menus.map((menu, index) => (
                        <Menu.Item key={index}>
                            <Link to={menu.path}>{menu.label}</Link>
                        </Menu.Item>
                    ))
                }
            </Menu>
            <Outlet />
        </>
    )
}

export default App
