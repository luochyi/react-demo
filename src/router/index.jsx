import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from '../App'
import Home from '../pages/Home/Home'
import List from '../pages/List/List'
import Detail from '../pages/Detail/Detail'

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/list' element={<List />}></Route>
                <Route path='/detail' element={<Detail />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter
