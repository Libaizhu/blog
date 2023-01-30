import React from 'react'
import {DownloadOutlined} from '@ant-design/icons'
import styles from './index.module.scss'

export default function Resource():JSX.Element {
  return (
    <div className={styles.resource}>
      <div className={styles.item}>
        <div className={styles.desc}>
          <span className={styles.title}>china.js，ECharts绘制地图</span>
          <span className={styles.txt}>ECharts绘制地图的JS文件。ECharts绘制地图的JS文件。ECharts绘制地图的JS文件。</span>
          <span>2022-10-10</span>
        </div>
        <div className={styles.down}>下载</div>
      </div>
      {
        [...new Array(7)].map((i,idx)=>{
          return(
            <div className={styles.item} key={idx}>
              <div className={styles.desc}>
                <span className={styles.title}>china.js，ECharts绘制地图</span>
                <span className={styles.txt}>ECharts绘制地图的JS文件。ECharts绘制地图的JS文件。ECharts绘制地图的JS文件。</span>
                <span>2022-10-10</span>
              </div>
              <div className={styles.down}>
                <DownloadOutlined />
                <span>下载</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
