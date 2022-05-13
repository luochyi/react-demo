import React, { useContext,createContext, useState,memo } from 'react'

const appContext = createContext(123)

const Child = memo(
    ()=>{
        const {data} = useContext(appContext)
        return (
            <div>{data}</div>
        )
    }
)


const Parent = ()=>{
    return <Child></Child>
}



export default function Home(){
    const [data,setData] = useState(456);
    return (
        <appContext.Provider value={{data,setData}}>
            <Parent></Parent>
        </appContext.Provider>
        
    )
}
