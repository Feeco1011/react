import React, { useState, useEffect } from 'react'
import styles from '@/styles/new3.module.css'
import { FaDeviantart } from 'react-icons/fa6'
import axios from 'axios' // 假設使用 axios 來進行後端請求

export default function Messages(props) {
  //console.log('eddieee', props)

  const [isLiked, setIsLiked] = useState(false) // 點擊狀態
  const [likeCount, setLikeCount] = useState('') // 初始讚數
  // 點擊 "讚" 按鈕時的處理函式
  const handleLikeClick = async () => {
    setIsLiked(!isLiked) // 切換高亮狀態
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1) // 點擊切換讚數

    try {
      // 將點擊資訊傳送到後端
      await axios.post('/api/like', {
        messageId: props.data.id, // 假設每條訊息都有唯一 id
        isLiked: !isLiked,
      })
    } catch (error) {
      console.error('無法傳送資料到後端:', error)
    }
  }

  // useEffect(() => {
  //   if (blogID) {
  //     // 如果 blogID 存在，發送 API 請求
  //     fetchBlogData(blogID)
  //     setId(blogID)
  //   }
  // }, [router.query.blogID]) // 監聽 blogID 的變化

  // const fetchBlogData = async (id) => {
  //   try {
  //     const url = `http://localhost:3005/api/posts/${id}` // 使用動態 blogID
  //     const response = await fetch(url)
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch blog data')
  //     }
  //     const data = await response.json()
  //     setBlogData(data) // 更新 blogData
  //   } catch (error) {
  //     console.error('Error fetching blog data:', error)
  //   }
  // }

  return (
    <>
      <div className={styles.had}>
        <div class={styles.card}>
          <div className={styles.profile}>
            <img
              className={styles.img}
              src={props.data.imgUrl ? props.data.imgUrl : `/default.jpg`}
              // "https://cdn2.ettoday.net/images/4697/d4697600.jpg"
              alt=""
            />
            <div className={styles.name}>{props.data.username}</div>
          </div>

          <div className={styles.data}>
            <div className={styles.message}>{props.data.ct_sf}</div>
            <div>
              <div className={styles.date}>
                <div>{props.data.ct_createdtime}</div>
                <div className={styles.reply}>
                  <br></br>
                  <br></br>

                  <div>{likeCount}</div>
                  <div
                    className={`${styles.good} ${isLiked ? styles.liked : ''}`} // 若被點擊則加上 liked 樣式
                    onClick={handleLikeClick}
                  >
                    讚
                  </div>

                  <div>回復</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
