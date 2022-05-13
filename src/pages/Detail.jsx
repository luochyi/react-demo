import React, { useState,useEffect } from 'react'
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom'
import './detail.less'

export default function Detail() {
    const print = (msg)=>{
        console.log('thatisPrinted!!'+ msg);
    }
    return (
        <>
            <Head />
            <Body title='hello'/>
            <Body title='父传子' print={print}/>
        </>
    )
}
const Head = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/home', {
            state: { id: 1 }
        })
    }
    return (
        <PageHeader
            className="site-page-header"
            onBack={goHome}
            title="返回首页"
            subTitle="This is a subtitle"
        />
    )
}
const Body = (props) => {
    // count变量   setCount设置变量的方法
    const [count, setCount] = useState(0)
    const addcount = () => {
        setCount(count + 1)
    }
    console.log(props);
    return (
        <div className='body'>
            <div onClick={()=>props.print(1)}>{props.title}</div>
            <div>{count}</div>
            <button onClick={addcount}>count++</button>
        </div>
    )

}