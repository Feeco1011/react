import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Message from '@/components/forum/message'
import Replay from '@/components/forum/replay'
import styles1 from '@/styles/new9.module.css'
import styles from '@/styles/bolg.module.css'


export default function BlogID(props) {
  const [blogId, setBlogId] = useState('')

  // 透過fetch跟伺服器要留言的資料
  const [messages, setMessages] = useState([
    {
      name: 'Bruce',
      message:
        '很貼心連走路都幫我護著對向車🙂看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒的行程',
      date: '2024/12/10',
      imgUrl:'https://newtaipei.travel/content/images/attractions/25297/1024x768_attractions-image-wytsty13ckmyyxuf9upjvq.jpg',
    },
    {
      name: 'Eddy',
      message:
        '123456789111111111111111111111111111111111111111111111111111111111111111111111111111111111111很貼心連走路都幫我護著對向車🙂看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒',
      date: '2024/12/30',
      imgUrl:'https://newtaipei.travel/content/images/attractions/25297/1024x768_attractions-image-wytsty13ckmyyxuf9upjvq.jpg',
    },
    // {
    //   name: 'Tina',
    //   message:
    //     '連走路都幫我護著對向車🙂看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒',
    //   date: '2024/12/30',
    //   imgUrl:''
    // },
   


  ])

  const router = useRouter()
  useEffect(() => {
    setBlogId(router.query.blogID)
  }, [router.query.blogID])
  return (
    <>
      {/* <div>{blogId}</div> */}

      <div className={styles.bread}> 歷史古蹟｜赤崁樓｜</div>

      
      <div className={styles1.all}>
        <div className={styles1.profile}>
          <img
            className={styles1.img}
            src="https://cdn2.ettoday.net/images/4697/d4697600.jpg"
            alt=""
          />


<div className={styles1.name}>Bruce</div>
          <div className={styles.date}>2024年8月12日</div>
      </div>


      </div>
      <div className={styles1.p}>
        很貼心連走路都幫我護著對向車🙂
        看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒的行程
        很貼心連走路都幫我護著對向車🙂
        看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒的行程
        很貼心連走路都幫我護著對向車🙂
        看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒的行程
      </div>

      <img
        className={styles1.photo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg/1200px-%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg"
        alt=""
      />


<div className={styles1.gd}>
        <div>回復</div>
        <div>2</div>
        <div>讚</div>
        <div>1</div>
      </div>


      <br></br>

      
      {messages.map((message, index) => {
        return <Message key={index} data={message} />
      })}
      
      
      <div>搞什麼鬼...........................</div>

      {messages.map((message, index) => {
        return <Message key={index} data={message} />
      })}
      
      <div>111111</div>

      <Replay></Replay>

      <button>111</button>
    </>
  )
}
