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
            <button onClick={props.onChange}>修改</button>
            <button onClick={props.addNum}>num</button>
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
const mapDispatchToProps = (dispatch) => {
    return {
        onChange(){
            let action = {type: 'changeMsg', value: 'hello world'}
            dispatch(action)
        },
        addNum(){
            let action = {type: 'addNum', num:1}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)