import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Message from '@/components/forum/message'
import styles1 from '@/styles/new9.module.css'
import styles from '@/styles/bolg.module.css'

export default function BlogID(props) {
  const [blogData, setBlogData] = useState(null) // 用來儲存文章資料
  const [isLiked, setIsLiked] = useState(false) // 初始化讚狀態
  const [likeCount, setLikeCount] = useState(0) // 初始化讚數
  const [messages, setMessages] = useState([]) // 留言數據
  
  const [id, setId] = useState([])
  const router = useRouter()

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1) // 切換讚數
  }

  useEffect(() => {
    const { blogID } = router.query

    if (blogID) {
      // 如果 blogID 存在，發送 API 請求
      fetchBlogData(blogID)
      setId(blogID)
    }
  }, [router.query.blogID]) // 監聽 blogID 的變化

  const fetchBlogData = async (id) => {
    try {
      const url = `http://localhost:3005/api/posts/${id}` // 使用動態 blogID
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch blog data')
      }
      const data = await response.json()
      setBlogData(data) // 更新 blogData
      console.log(data)
      if (data.messages.length > 0) {
        setMessages(data.messages)
      }
      {
        setMessages(data.messages) //將api中得message  messages 變數
      }
    } catch (error) {
      console.error('Error fetching blog data:', error)
    }
  }

  if (!blogData) {
    return <div>Loading...</div> // 顯示 loading 畫面
  }



  // 處理新增評論
  const handleMessage = async (message) => {
    try {
      const url = `http:localhost:3005/api/posts/${id}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: getAuthHeader ? await getAuthHeader() : {},
        body: JSON.stringify({
          content: comment,
        }),
      });
      if (!response.ok) throw new Error('新增回覆失敗');
      const data = await response.json();
      setComments((prev) => [data, ...prev]);
      toast.success('回覆成功！'); // 顯示成功提示
    } catch (error) {
      console.error('新增回覆錯誤:', error);
      toast.error('新增回覆失敗'); // 顯示錯誤提示
    }
  };






  return (
    <>
      <div
        className={styles.bread}
        onClick={() => router.replace('/blog')}
        style={{ cursor: 'pointer' }}
      >
        回到文章列表｜
      </div>

      <div className={styles1.all}>
        <div className={styles1.profile}>
          <img
            className={styles1.img}
            src={
              blogData.authorImage ||
              'https://cdn2.ettoday.net/images/4697/d4697600.jpg'
            }
            alt=""
          />
          <div className={styles1.name}>{blogData.user}</div>
          <div className={styles.date}>{blogData.pt_created}</div>
          <div className={styles.cate}>{blogData.pt_category}</div>
        </div>
      </div>

      <div className={styles1.p}>{blogData.pt_artname}</div>
      <div className={styles1.p}>{blogData.pt_sf}</div>

      <img
        className={styles1.photo}
        src={
          `/blog-img/${id}.jpg` ||
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg/1200px-%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg'
        }
        alt=""
      />

      <div className={styles1.gd}>
        <div>回復</div>
        {/* <div>{messages.length}</div> */}

        <div
          className={`${styles1.likeButton} ${isLiked ? styles1.liked : ''}`}
          onClick={handleLikeClick}
        >
          讚
        </div>
        <div>{likeCount}</div>
      </div>

      <br></br>

      {/* 顯示留言 */}
      {messages.map((m) => (
        <Message key={m.ct_id} data={m} />
      ))}

      <div className={styles.msgContainer}>
        <div className={styles.photom}>
          <img
            src="/user_pic.png"
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
    </>
  )
}
