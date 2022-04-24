import React from 'react'
import { Button } from 'antd';
import {Outlet, Link,useNavigate} from 'react-router-dom'

function App() {
    const navigate = useNavigate()
    function goHome(){
        navigate('/home',{
            state: {id: 789}
          })
    }
    return (
        <>  
            <div>
                <Button type="primary">Primary Button</Button>
            </div>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/list">列表页</Link></li>
                <li><Link to="/detail">详情页</Link></li>
            </ul>
            <button onClick={goHome}>回首页</button>
            <Outlet />
        </>
    )
}

export default App
