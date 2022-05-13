import React, { useState } from 'react'
import { Menu } from 'antd';
import { Outlet, Link } from 'react-router-dom';


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
    const [key,setKey] = useState('0')
    const onsetChange = (e)=>{
       setKey(e.key)
    }
    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={key}  onClick={onsetChange}>
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
