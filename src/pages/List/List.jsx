import React, {useState,memo} from 'react'
import { connect } from 'react-redux'

// 子组件
const Sub = memo(()=>{
    console.log('子组件被更新了')
    return <div>子组件</div>
})

// 父组件
 function App(props){
    const [msg, setMsg] = useState("你好世界");
    return (
        <>
            <h2>内容为：{msg}  {props.text}</h2>
            <button onClick={()=>setMsg("Hello World")}>修改Msg</button>
            <hr />
            <Sub />
        </>
    )
}

// state映射
const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps)(App)