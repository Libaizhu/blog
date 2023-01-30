// router v6 组件写法

import {BrowserRouter, Route, Routes,Navigate} from 'react-router-dom'

import Bolg from '../views/Blog'
import Login from '../views/Login'
import Article from '../views/Blog/pages/Article'
import App from '../App'


const baseRouter = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/home' element={<Bolg/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/' element={<Navigate to='/home' />} />
            </Route>
            <Route path='/admin' element={<Article/>} />
        </Routes>
    </BrowserRouter>
)

export default baseRouter


// index.tsx
// import Router from './router'
// root.render(<Router />);