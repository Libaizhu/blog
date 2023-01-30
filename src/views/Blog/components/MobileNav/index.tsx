import React from 'react'
import styles from './index.module.scss'

export default function MobileNav():JSX.Element {
    return (
        <div className={styles.mobile}>
            <div className={styles.lilst}>
                <div className={styles.item}>
                    首页
                </div>
                <div className={styles.item}>
                    学习
                </div>
                <div className={styles.item}>
                    下载
                </div>
                <div className={styles.item}>
                    我的
                </div>
                <div className={styles.item}>
                    面试
                </div>
                <div className={styles.item}>
                    留言
                </div>
                <div className={styles.item}>
                    时间轴
                </div>
            </div>
        </div>
    )
}
