import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {publish} from 'pubsub-js'
import {getStorage,setStorage} from '@/utils'

import DarkIcon from '../DarkIcon';
import LightIcon from '../LightIcon';

import styles from './index.module.scss'
import logo from '@/assets/test.png'


import { MenuOutlined } from '@ant-design/icons';
import {Row,Col } from 'antd'



export default function HeaderNav():JSX.Element{
    // 主题状态切换
    const [flag, setFlag] = useState<boolean>(false)

    useEffect(()=>{
        const isDark = getStorage('isDark') ? getStorage('isDark') : false
        changeTheme(isDark)
    },[])

    const handleDrawer = ():void=>{
        publish('setOpen')
    }
    // 主题切换
    const changeTheme = (data:boolean):void => {
        setFlag(!data)
        setStorage('isDark',data)
        let body = document.getElementsByTagName('body')[0] as HTMLElement;
        if (!data) {
            body.className = 'light'
        }else{
            body.className = 'dark';
        }
    }
    
    return (
        <div className={styles.header}>
            <div className={styles.wrap}>
                <Row>
                    <Col md={8} lg={10} className='hidden-xs-only'>
                        <div className={styles.logo}>
                            <Link to={`/blog/home`}>
                                <img className={styles.img} src={logo} alt="logo" />
                            </Link>
                            <Link to={`/blog/home`}>
                                <span className={styles.title}>盛意以江河</span>
                            </Link>
                        </div>
                    </Col>
                    <Col sm={24} md={16} lg={14} className='hidden-xs-and-down'>
                        <div className={styles.menu}>
                            <div className={styles.item}>
                                <Link to={`/blog/home`} className={styles.span}>首页</Link>
                            </div>
                            <div className={styles.item}>
                                <Link to={`/blog/read`} className={styles.span}>学习</Link>
                            </div>
                            <div className={styles.item}>
                                <Link to={`/blog/resource`} className={styles.span}>下载</Link>
                            </div>
                            <div className={styles.item}>
                                <Link to={`/blog/time`} className={styles.span}>时间轴</Link>
                            </div>
                            {/* <div className={styles.item}>
                                <Link to={`/blog/message`} className={styles.span}>留言</Link>
                            </div> */}
                            <div className={styles.item}>
                                <Link to={`/admin`} className={styles.span}>我的</Link>
                            </div>
                            <div className={styles.icon} onClick={()=>changeTheme(flag)}>
                                {
                                    flag ? <DarkIcon /> : <LightIcon />
                                }
                            </div>
                        </div>
                    </Col>
                    {/* 移动端 */}
                    <Col span={24} className='hidden-xs'>
                        <div className={styles.mobile}>
                            <MenuOutlined onClick={handleDrawer} className={styles.more}/>
                            <div className={styles.title}>小小李的博客</div>
                            <div className={styles.icon} onClick={()=>changeTheme(flag)}>
                                {
                                    flag ? <DarkIcon /> : <LightIcon />
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
