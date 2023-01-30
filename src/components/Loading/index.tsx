import { createPortal } from 'react-dom'
import styles from './index.module.scss'
import { Spin } from 'antd';

function Loading() {
    return createPortal(
        <div className={styles.loading}>
            <Spin size="large" />
        </div>
    ,document.body)
}

export default Loading