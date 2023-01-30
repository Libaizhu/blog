import { FormEvent } from 'react'
import './index.scss'

interface IProps {
    modelValue?:string,
    type?:string,
    onChange?:any,
    placeholder?:string
}
export default function CustomInput(props:IProps) {
    const {placeholder,modelValue,type} = props
    return (
        <div className='custom-input-wrap'>
            <div className='input-wrap'>
                <input type={type?type:'text'} value={modelValue} required className='input' onChange={handleName} />
                <span className='label'>{placeholder}</span>
            </div>
        </div>
    )

    function handleName(event: FormEvent<HTMLInputElement>) {
        // console.log(event.currentTarget.value)
        props.onChange(event.currentTarget.value)
    }
}
