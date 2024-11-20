import React from 'react'
import styles from '@/styles/new.module.css'

export default function ForumCard(props) {
  // 檢查傳入的是哪種類型的數據
  const cardData = props.view || props.category || props.data || {}

  // 動態選擇資料夾和圖片路徑
  // const folder = props.view
  //   ? 'viewblog-img'
  //   : props.category
  //   ? 'category-img'
  //   : props.data
  //   ? 'data-img'
  //   : ''

  //console.log('eddie',props.data);

  // const imagePath = folder
  //   ? `/${folder}/${cardData?.image || 'default.jpg'}`
  //   : '/default.jpg'

  // 使用可選鏈運算符來安全地訪問數據
  // const userData = {
  //   user: cardData?.user || '未知用戶',
  //   createdDate: cardData?.pt_created || '未知日期',
  //   city: cardData?.pt_city || '未知城市',
  //   description: cardData?.pt_sf || '暫無描述',
  // image:
  //   cardData?.pt_img ||
  //   'https://media.istockphoto.com/id/1502547874/zh/%E5%90%91%E9%87%8F/travel-to-world-on-banner-background-landscape-template-tourism-cards-road-trip-vacation-as-in.jpg?s=1024x1024&w=is&k=20&c=WJSv71le86s6btsNKlRoMpQP98r1T68Ux7P7B8zo1lo=',
  // }
  const newDesc = truncateString(props.data.pt_sf)

  function truncateString(input, maxLength = 55) {
    // 如果字串長度小於或等於最大長度，直接返回原字串
    if (input.length <= maxLength) {
      return input
    }
    // 截取字串並在末尾加上 "..."
    return input.substring(0, maxLength) + '...'
  }
  return (
    <div className={styles.hed}>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={`/blog-img/${props.data.pt_pe}.jpg`}
          alt="景點圖片"
          onError={(e) => {
            e.target.src =
              'https://via.placeholder.com/300x200?text=圖片載入失敗'
          }}
        />

        <div className={styles.date}>
          <div className={styles.name}>{props.data.user}</div>
          <div className={styles.day}>{props.data.pt_created}</div>
        </div>

        <div className={styles.city}>{props.data.pt_city}</div>

        {/* <div className={styles.p}>{props.data.pt_sf}</div> */}
        <div className={styles.p}>{newDesc}</div>
      </div>
    </div>
  )
}
