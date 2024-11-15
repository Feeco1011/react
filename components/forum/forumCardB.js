import React from 'react'
import styles from '@/styles/ForumCardB.module.css'

export default function ForumCardB(props) {
  const { pop } = props
  console.log('pop', pop)
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* 將圖片放在卡片頂部 */}
        <img className={styles.img} src="https://media.istockphoto.com/id/1363398400/zh/%E7%85%A7%E7%89%87/woman-traveler-in-europa-alhambra-in-spain.jpg?s=2048x2048&w=is&k=20&c=GJSOeZGKAk_dUER3WBLQGUfcBbEAKsNGVYHp8fIPHLU=" alt="" />

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
