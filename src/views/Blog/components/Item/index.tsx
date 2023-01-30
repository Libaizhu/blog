import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import {timeFormat} from '@/utils'

interface IProps{
    id:string | number,
    cover?:string,
    title:string,
    small:string,
    category:string,
    tag:string,
    auth:string,
    time:string | number,
}

export default function Item(props: IProps) {
  const {id,cover,title,small,tag,auth,time} = props
  return (
    <Link to={`/blog/article/${id}`} className={styles.item}>
      {
        cover ? <img className={[`${styles.cover}`,'image'].join(' ')} src={cover} alt="cover" /> : ''
      }
      <div className={styles.desc}>
        <div className={styles.title}>{title}</div>
        <div className={styles.small}>{small}</div>
        <div className={styles.tags}>
          {/* <span className={styles.tag}>
            <i className="iconfont icon-fenlei"></i>
            <span className={styles.content}>{category}</span>
          </span> */}
          <span className={styles.tag}>
            <i className="iconfont icon-tag"></i>
            <span className={styles.content}>{tag}</span>
          </span>
          <span className={styles.tag}>
            <i className="iconfont icon-my"></i>
            <span className={styles.content}>{auth}</span>
          </span>
          <span className={styles.tag}>
            <i className="iconfont icon-time"></i>
            <span className={styles.content}>{timeFormat(time)}</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
