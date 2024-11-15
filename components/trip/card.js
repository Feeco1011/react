import React, { useState, useEffect } from 'react'
import styles from '@/styles/tripcard.module.css'

export default function ForumCard(props) {
  // console.log(props.data)
  return (
    <>
      <div className={styles.hed}>
     
        <div className={styles.card}>
        <a href="index.js" >
          <img className={styles.img} src="https://edison.com.tw/wp-content/uploads/2023/11/Jiufen-Village-6.jpg" alt=""/>
        

          <div className={styles.date}>
            <div className={styles.name}>王小明</div>
            <div className={styles.day}>2024年1月1日</div>
          </div>

          <div className={styles.city}>新北|九份</div>

          <div className={styles.p}>九份的階梯巷弄和茶館充滿懷舊氣息，特別是在夜晚燈火通明之時。</div>
          </a>
        </div>
      </div>
      
    </>
  )
}