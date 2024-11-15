import React from 'react'
import styles from '@/styles/new.module.css'

export default function ForumCard(props) {
  // 檢查傳入的是哪種類型的數據
  const cardData = props.view || props.category || props.data || {}
  
  // 使用可選鏈運算符來安全地訪問數據
  const userData = {
    user: cardData?.user || '未知用戶',
    createdDate: cardData?.pt_created || '未知日期',
    city: cardData?.pt_city || '未知城市',
    description: cardData?.pt_sf || '暫無描述',
    image: cardData?.pt_img || 'https://media.istockphoto.com/id/1502547874/zh/%E5%90%91%E9%87%8F/travel-to-world-on-banner-background-landscape-template-tourism-cards-road-trip-vacation-as-in.jpg?s=1024x1024&w=is&k=20&c=WJSv71le86s6btsNKlRoMpQP98r1T68Ux7P7B8zo1lo='
  }

  // 添加數據檢查
  console.log('收到的props:', props)
  console.log('處理後的數據:', userData)

  return (
    <div className={styles.hed}>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={userData.image}
          alt="景點圖片"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=圖片載入失敗'
          }}
        />

        <div className={styles.date}>
          <div className={styles.name}>{userData.user}</div>
          <div className={styles.day}>{userData.createdDate}</div>
        </div>

        <div className={styles.city}>{userData.city}</div>

        <div className={styles.p}>{userData.description}</div>
      </div>
    </div>
  )
}