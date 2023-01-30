import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
// 初始化样式
import 'reset-css'
// 框架样式、（按需引入）
// import 'antd/dist/antd.min.css'
// 全局样式
import './assets/style/base.css'
// 覆盖antd样式
import './assets/style/antd.css'
// 字体图标
import './assets/iconfont/iconfont.css'

import App from './App';

// import Router from './router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
