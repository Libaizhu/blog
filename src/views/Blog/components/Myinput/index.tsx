import { FormEvent } from 'react'
import styles from './index.module.scss'

import {SearchOutlined} from '@ant-design/icons';

interface IProps {
    modelValue?:string,
    type?:string,
    onChange?:any,
    placeholder?:string
    txt?:string,
}
export default function MyInput(props:IProps):JSX.Element {
    const {placeholder,modelValue} = props
    return (
        <div className={styles.container}>
            <span className={styles.label}>
                <SearchOutlined />
            </span>
            <input className={styles.input} type='text' placeholder={placeholder?placeholder:'请输入关键字'} value={modelValue} onChange={handleName} />
        </div>
    )

    function handleName(event: FormEvent<HTMLInputElement>) {
        // console.log(event.currentTarget.value)
        props.onChange && props.onChange(event.currentTarget.value)
    }
}
