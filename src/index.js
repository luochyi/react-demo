import { createRoot } from 'react-dom/client';
import Router from './router/index.jsx'
import 'antd/dist/antd.min.css'
import { store } from './store'
import { Provider } from 'react-redux'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <Router />
    </Provider>
);