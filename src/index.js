import ReactDOM from 'react-dom'
import Router from './router/index.jsx'
import 'antd/dist/antd.min.css'
import {store} from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
)
