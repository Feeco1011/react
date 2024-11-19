import React from 'react'
import styles from '@/styles/ForumCardB.module.css'

export default function ForumCardB(props) {
  const { pop } = props
  console.log('pop', pop)

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* 將圖片放在卡片頂部 */}
        <img className={styles.img} src={`/blog-img/${pop.pt_id}.jpg`} alt="" />

        {/* 用於包裹文本內容 */}
        <div className={styles.content}>
          <div className={styles.date}>
            <div className={styles.name}>{pop.user}</div>
            <div className={styles.day}>{pop.pt_created}</div>
          </div>
          <div className={styles.city}>{pop.pt_city}</div>
          <div className={styles.p}>{pop.pt_sf}</div>
        </div>
      </div>
    </div>
  )
}
