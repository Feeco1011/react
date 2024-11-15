import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Message from '@/components/forum/message'
<<<<<<< HEAD
import Replay from '@/components/forum/replay'
import styles1 from '@/styles/new9.module.css'
import styles from '@/styles/bolg.module.css'


export default function BlogID(props) {
  const [blogId, setBlogId] = useState('')

  // 透過fetch跟伺服器要留言的資料
=======
import styles1 from '@/styles/new9.module.css'
import styles from '@/styles/bolg.module.css'

export default function BlogID(props) {
  const [blogId, setBlogId] = useState('')
  const [isLiked, setIsLiked] = useState(false) //初始化狀態為()
  const [likeCount, setLikeCount] = useState('') // 初始讚數

  const router = useRouter()
  //   const router = useRouter()
  //  // 切換「讚」按鈕狀態並更新讚數

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1) // 點擊切換讚數
  }

  // 使用 useEffect 獲取 blogId (從路由中讀取)
  useEffect(() => {
    setBlogId(router.query.blogID)
  }, [router.query.blogID])

  // 點擊「歷史古蹟」後返回 `/blog` 頁面

  const handleBackToBlog = () => {
    router.replace('/blog') // 直接更改URL為 /blog
  }
  
  const [newMessage, setNewMessage] = useState('')
  // 透過fetch跟伺服器要留言的資料




  useEffect(() => {
    // 用來獲取熱門文章資料
    const fetchSinglePop = async () => {
      try {
        const url = 'http://localhost:3001/posts' // 加上引號
        const response = await fetch(url)

        // 確認是否成功返回資料
        if (!response.ok) {
          throw new Error('Failed to fetch popular posts')
        }

        const data = await response.json()
        console.log(data)

        setPop(data) // 設置熱門文章資料
      } catch (error) {
        console.error('Error fetching popular posts:', error)
      }
    }

    fetchSinglePop()
  }, [router.query.postId]) // 依賴於 router.query.postId

>>>>>>> main
  const [messages, setMessages] = useState([
    {
      name: 'Bruce',
      message:
<<<<<<< HEAD
        '很貼心連走路都幫我護著對向車🙂看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒的行程',
      date: '2024/12/10',
      imgUrl:'https://newtaipei.travel/content/images/attractions/25297/1024x768_attractions-image-wytsty13ckmyyxuf9upjvq.jpg',
=======
        '建築外觀古色古香，內部展示的老照片很有意思，讓人了解早期台南的樣貌。可惜只開放一樓，但整體來說值得一看。',
      date: '2024/12/10',
      imgUrl:
        'https://newtaipei.travel/content/images/attractions/25297/1024x768_attractions-image-wytsty13ckmyyxuf9upjvq.jpg',
      isFavorite: true,
>>>>>>> main
    },
    {
      name: 'Eddy',
      message:
<<<<<<< HEAD
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
=======
        '位於神農街附近，交通方便。建築保存完整，但內部空間較小，參觀時間約15分鐘就足夠了。',
      date: '2024/12/30',
      imgUrl:
        'https://newtaipei.travel/content/images/attractions/25297/1024x768_attractions-image-wytsty13ckmyyxuf9upjvq.jpg',
      isFavorite: false,
    },

    {
      name: '大帥哥',
      message:
        '連走路都幫我護著對向車🙂看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒',
      date: '2024/12/30',
      imgUrl:
        'https://img.lovepik.com/free-png/20211130/lovepik-male-character-photo-sticker-4-png-image_401230538_wh1200.png',
    },
  ])

>>>>>>> main
  return (
    <>
      {/* <div>{blogId}</div> */}

<<<<<<< HEAD
      <div className={styles.bread}> 歷史古蹟｜赤崁樓｜</div>

      
=======
      <div
        className={styles.bread}
        onClick={handleBackToBlog}
        style={{ cursor: 'pointer' }}
      >
        {' '}
        歷史古蹟｜赤崁樓｜
      </div>

>>>>>>> main
      <div className={styles1.all}>
        <div className={styles1.profile}>
          <img
            className={styles1.img}
            src="https://cdn2.ettoday.net/images/4697/d4697600.jpg"
            alt=""
          />
<<<<<<< HEAD


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
=======
          <div className={styles1.name}>Bruce</div>
          <div className={styles.date}>2024年8月12日</div>~
          <div className={styles.cate}>歷史古蹟</div>
        </div>
      </div>

      <div className={styles1.p}> 歷史古蹟大賞</div>

      <div className={styles1.p}>
        隱身於台南市中西區的次崁樓，是一座古色古香的三層樓建築，建於清朝年間。這座百年古蹟以其精緻的閩南建築特色聞名，紅磚牆面與木質結構完美融合，展現傳統工藝之美。樓內陳列著許多珍貴的文物與老照片，訴說著台南的歷史故事。位於民族路上的次崁樓，不僅是重要的文化地標，更是遊覽台南古城時不容錯過的景點。
        <br></br>
        走進次崁樓，彷彿穿越時空回到百年前的台南。這裡不只是一棟建築，更是台南城市發展的活見證，凝聚著先民的智慧與工藝之美。每一塊磚、每一根樑，都訴說著屬於這座古都的動人故事。
>>>>>>> main
      </div>

      <img
        className={styles1.photo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg/1200px-%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg"
        alt=""
      />

<<<<<<< HEAD

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
=======
      <div className={styles1.gd}>
        <div>回復</div>
        <div>2</div>

        <div
          className={`${styles1.likeButton} ${isLiked ? styles1.liked : ''}`}
          onClick={handleLikeClick}
        >
          讚
        </div>
        <div>{likeCount}</div>
      </div>

      <br></br>

      {messages.map((message, index) => {
        return <Message key={index} data={message} />
      })}

      <div></div>

      {/* <div className={styles.button}>
        <button type="button">發送</button>
      </div>

      <div>
        <input></input>
      </div> */}

      {/* 
      區塊 > 圖片 + (容器 > input + btn)
      */}
      {/* img, input, hr, br, */}
      <div className={styles.msgContainer}>
        <div className={styles.photom}>
          <img
            src="https://i0.wp.com/www.flycan.com/article/wp-content/uploads/2012/08/012.jpg?fit=800%2C500"
            alt=""
            className={styles.msgPhoto}
          />
        </div>

        <div className={styles.msgCard}>
          <textarea
            placeholder="留個言吧...."
            className={styles.textArea}
          ></textarea>
          <div className={styles.Qa}>
            <button className={styles.button1}>留言</button>
          </div>
        </div>
      </div>
>>>>>>> main
    </>
  )
}
