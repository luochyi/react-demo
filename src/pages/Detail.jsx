import React, {useState} from 'react'
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom'
import './detail.less'

export default function Detail() {
    return (
        <>
            <Head />
            <Body />
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
const Body = () => {
    // const [count, setCount] = useState(0)
    // const addcount = () => {
    //     let newCount = count
    //     setCount(newCount += 1)
    // }
    let count = 1;
    const addcount = ()=>{
        count = count+1
    }
    return <div className='body'>
        <div>{count}</div>
        <button onClick={addcount}>count++</button>
    </div>
}