import React,{useRef,useState} from 'react'
import {Pagination,Row,Col} from 'antd'
import Item from '@/views/Blog/components/Item'
import MyInput from '../../components/Myinput'
import styles from './index.module.scss'
import {getRgb} from '@/utils'
// 模拟列表
const obj = {
  id:1,
  cover:'http://www.shijiayi.top/attachment/20221019/81724c41122844e49a025920a8fdb4ba.jpeg',
  title:'有太多的心酸和付出，有些是你想都想不到的。',
  small:'每天抄背5个未来要走的方向的面试题，可上课前参加游戏。 游戏规则： 第一题回答正确可减少5个题，可选择继续或退出，有一次场外求助机会。',
  category:'JavaScript',
  tag:'Vue.js',
  auth:'江盛意',
  time:'1672087923366',
}
const obj1 = {
  id:1,
  cover:'',
  title:'有太多的心酸和付出，有些是你想都想不到的。',
  small:'每天抄背5个未来要走的方向的面试题，可上课前参加游戏。 游戏规则： 第一题回答正确可减少5个题，可选择继续或退出，有一次场外求助机会。',
  category:'JavaScript',
  tag:'React.js',
  auth:'江盛意',
  time:'1672787923366',
}

export default function Home():JSX.Element {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [page,setPage] = useState(1)
  const [total] = useState(50)
  // const getKey = (keyword:string):void=>{
  //   console.log(keyword)
  // }
  const pageChange = (page:number):void=>{
    console.log(page);
    setPage(page)
    // 请求获取分页数据
    getData()
  }
  // 获取列表数据
  const getData = ():void=>{
    console.log('获取列表数据');
  }
  const updateTime = ():void=>{}
  const playEnd = ():void=>{}
  return (
    <div className={styles.home}>
      <Row gutter={30}>
        <Col sm={24} md={16}>
          <Item {...obj} />
          <Item {...obj1} />
          <Item {...obj1} />
          <Item {...obj} />
          <Item {...obj} />
          <div className={styles.page}>
            <Pagination showTitle={false} current={page} total={total} defaultPageSize={7} onChange={pageChange}/>
          </div>
        </Col>
        <Col sm={8} md={8} className='hidden-xs-only'>
          <div className={styles.sider}>
            <div className={styles.search}>
              <MyInput />
            </div>
            <div className={styles.music}>
              <div className={styles.header}>
                <i className="iconfont icon-plane"></i>
                <span className={styles.title}>推荐音乐</span>
              </div>
              <div className={styles.content}>
                <div className={styles.cover}>
                   <img className={styles.img} src="https://p3.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg?param=140y140" alt='music' />
                   <audio ref={audioRef} src="http://m701.music.126.net/20230112151157/40b9207824969b47be64215622f44f6d/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096542463/09af/7340/9112/67d10438e99744c7995d0be66c464b94.m4a" onTimeUpdate={updateTime} onEnded={playEnd}></audio>
                   <i className={[`${styles.icon}`,"iconfont icon-bofang"].join(' ')}></i>
                </div>
                <div className={styles.desc}>
                  <div className={styles.name}>遇到</div>
                  <div className={styles.singer}>颜人中</div>
                </div>
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.header}>
                <i className="iconfont icon-fenlei"></i>
                <span className={styles.title}>分类目录</span>
              </div>
              <div className={styles.card}>
                <span className={styles.txt}>Vue</span>
                <span className={styles.count} style={{backgroundColor:getRgb()}}>9</span>
              </div>
              <div className={styles.card}>
                <span className={styles.txt}>Vue</span>
                <span className={styles.count} style={{backgroundColor:getRgb()}}>37</span>
              </div>
              <div className={styles.card}>
                <span className={styles.txt}>Vue</span>
                <span className={styles.count} style={{backgroundColor:getRgb()}}>99+</span>
              </div>
              {/* {
                [...new Array(20)].map((i,idx)=>{
                  return (
                    <div className={styles.card} key={idx}>
                      <span>Vue</span>
                      <span className={styles.count}>{idx}</span>
                    </div>
                  )
                })
              } */}
            </div>
            <div className={styles.tags}>
              <div className={styles.header}>
                <i className="iconfont icon-tag"></i>
                <span className={styles.title}>标签云集</span>
              </div>
              {/* <div className={styles.tags}> */}
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
                  <span className={styles.tag} style={{backgroundColor:getRgb()}}>HTML</span>
              {/* </div> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
