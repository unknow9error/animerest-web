import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'src/app';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';

// DECLARATION
import './index.d';

// STYLES
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

// FONTS
// import 'src/shared/assets/fonts/gilroy/Gilroy-Black.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-BlackItalic.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-Bold.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-Extrabold.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-Light.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-Medium.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-Regular.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-Thin.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-RegularItalic.ttf';
// import 'src/shared/assets/fonts/gilroy/Gilroy-BoldItalic.ttf';
import { store } from './store/rootReducer';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ConfigProvider locale={ruRU}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConfigProvider>
    </Provider>
);
