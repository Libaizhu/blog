import React, { FC, useState } from 'react';
import { Drawer } from 'antd';
import { Outlet } from 'react-router-dom'
import { subscribe } from 'pubsub-js'
// scss模块化引入
import styles from './index.module.scss'
import MobileNav from './components/MobileNav';
import HeaderNav from './components/HeaderNav';
// import Particle from './components/Particle';
// import ReactCanvasNest from 'react-canvas-nest'


const Blog: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  // const token = 取消事件订阅使用
  subscribe('setOpen', function (): void {
    setOpen(!open)
  })
  // 关闭弹出层
  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <div className={styles.layout}>
      <HeaderNav />
      {/* 主体 */}
      <div className={styles.main}>
        <div className={styles.content}>
          <Outlet />
        </div>
        {/* <div className={styles.particles}>
          <ReactCanvasNest
              className='canvasNest'
              config={{
                  pointColor: '85,85,85',
                  lineColor: '119,119,119',
                  pointOpacity: 0.5,
                  pointR: 2,
                  count:100
              }}
                style={{ zIndex: -1 }}
            />
        </div> */}
      </div>
      <div className={styles.footer}>
        2021-2023 &copy; xxx博客 版权所有 | 渝ICP备19000130号-2
      </div>
      <Drawer width="60%" placement='left' closable={false} onClose={handleClose} open={open}>
        <MobileNav />
      </Drawer>
    </div>
  );
};

export default Blog;
