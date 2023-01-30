import React from 'react'
import { FieldTimeOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import styles from './index.module.scss'

export default function Time():JSX.Element {
  return (
    <div className={styles.axis}>
      <Timeline>
        {
          [...new Array(7)].map((i,idx)=>{
            return(
              <Timeline.Item key={idx} dot={<FieldTimeOutlined style={{ fontSize: '18px',color:'#23B7E5'}}/>}>
                <div className={styles.card}>
                  <div className={styles.title}>Create a services site</div>
                  <div className={styles.time}>2015-09-0{idx + 2}</div>
                </div>
              </Timeline.Item>
            )
          })
        }
        <Timeline.Item dot={<FieldTimeOutlined style={{fontSize: '18px',color:'#23B7E5'}}/>}>
          <div className={styles.card}>
            <div className={styles.title}>Solve initial network problems</div>
            <div className={styles.time}>2015-12-26</div>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}
