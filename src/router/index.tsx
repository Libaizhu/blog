// router v6 路由表
import {lazy} from 'react'
import {RouteObject,Navigate} from 'react-router-dom'

// 登录
import Login from '@/views/Login'
// 博客
import Bolg from '@/views/Blog'
import Home from '@/views/Blog/pages/Home'
const  Article = lazy(()=>import('@/views/Blog/pages/Article'))
const  Read = lazy(()=>import('@/views/Blog/pages/Read'))
const  Resource = lazy(()=>import('@/views/Blog/pages/Resource'))
const  Time = lazy(()=>import('@/views/Blog/pages/Time'))

// 后台管理
const  Admin = lazy(()=>import('@/views/Admin'))
const  HomePage = lazy(()=>import('@/views/Admin/HomePage'))
const  Users = lazy(()=>import('@/views/Admin/Users'))
// 404

const routes:Array<RouteObject> = [
    {
        path:'/blog',
        element:<Bolg />,
        children:[
            {
                path:'home',
                element:<Home />
            },
            {
                path:'article/:id',
                element:<Article />
            },
            {
                path:'read',
                element:<Read />
            },
            {
                path:'resource',
                element:<Resource />
            },
            {
                path:'time',
                element:<Time />
            },
            {
                path:'',
                element:<Navigate to='/blog/home'/>
            },
        ]
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/admin',
        element:<Admin />,
        children:[
            {
                path:'homePage',
                element:<HomePage />
            },
            {
                path:'users',
                element:<Users />
            },
            {
                path:'',
                element:<Navigate to='/admin/users'/>
            },
        ]
    },
    {
        path:'/',
        element:<Navigate to='/blog'/>
    },
]


export default routes