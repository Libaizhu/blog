import {useState} from 'react'

import {Button} from 'antd'
import styles from './index.module.scss'
import CustomInput from '../../components/CustomInput'


export default function Login():JSX.Element {

  const [userName,setUserName] = useState<string>('')
  const [passWord,setPassWord] = useState<string>('')
  // const [passWord,setPassWord] = useState<string>('')
  // const handleChange = (e:any)=>{
  //   setUserName(e)
  // }
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <div>13</div>
        <Button type="primary" shape="round" size='large'>登录</Button>
      </div>
      {/* <CustomInput placeholder="账 号" modelValue={userName} onChange={handleName}/>
      <CustomInput placeholder="密 码" type="password" modelValue={passWord} onChange={handlePwd}/> */}
    </div>
  )
  
  function handleName(e:any) {
    setUserName(e)
  }
  function handlePwd(e:any) {
    setPassWord(e)
  }
  
}
