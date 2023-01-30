import React from 'react'
import {timeFormat,copyToClip,formatText} from '@/utils'
import {Col,Row} from 'antd'
import styles from './index.module.scss'
import '@/assets/style/quill.css'

const txt = '<p>一个 npm 包执行器。npm版本大于5.2就可以使用；可以使用npx来执行创建vue或reacr项目的命令，使用npx创建项目会临时安装可执行依赖包，可避免全局安装vue/react脚手架，缺点就是创建项目时会慢一点。</p><pre class="ql-syntax" spellcheck="false">const b = "hello"const a = 6</pre><p>测试初始值</p><p><strong>加粗</strong></p><p><em>斜体</em></p><p><u>下划线</u></p><p><s>禁用</s></p><blockquote>引用</blockquote><pre class="ql-syntax" spellcheck="false">const num = 999</pre><ol><li>有序列表</li><li>有序</li></ol><ul><li>无序列表</li><li>无序</li></ul><p>上标<sup>2</sup></p><p>下标<sub>2</sub></p><p class="ql-indent-1">缩进</p><p class="ql-indent-1"><span class="ql-size-huge">大号字</span></p><h1>标题</h1><p><span style="color: rgb(230, 0, 0);">红色</span></p><p><span style="background-color: rgb(153, 51, 255);">紫色</span></p><p class="ql-align-center">居中</p><p><a href="https://www.baidu.com/" rel="noopener noreferrer" target="_blank">链接</a></p>'

export default function Read():JSX.Element {
  const handleCopy = (event:any):void=>{
    if (event.target.nodeName === 'SPAN') {
      copyToClip(event.target.parentNode.innerText)
      console.log('复制成功了')
    }
  }
  return (
    <div className={styles.read}>
      <Row>
        <Col sm={6} md={6} lg={4} className='hidden-xs-and-down'>
          <aside className={styles.sidebar}>
            <div className={styles.item}><span>nodejs学习</span></div>
            {
              [...new Array(20)].map((i,idx)=>{
                return(<div className={styles.item} key={idx}><span>nodejs学习{idx}</span></div>)
              })
            }
          </aside>
        </Col>
        <Col xs={24} sm={18} md={18} lg={20}>
          <section className={styles.content}>
            <div className={styles.title}>nodejs使用</div>
            <div className={styles.tags}>
              <span className={styles.tag}>
                <i className="iconfont icon-my"></i>
                <span className={styles.txt}>auth</span>
              </span>
              <span className={styles.tag}>
                <i className="iconfont icon-time"></i>
                <span className={styles.txt}>{timeFormat(1672787923366)}</span>
              </span>
            </div>
            <div onClick={handleCopy} className={[`${styles.richText}`,'ql-editor'].join(' ')} dangerouslySetInnerHTML={{__html:formatText(txt,/<\/pre>/g,'<span class="copy"></span></pre>')}}></div>
          </section>
        </Col>
      </Row>
    </div>
  )
}
