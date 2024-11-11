import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Member from '@/components/member/member'

const Blog = () => {
  return (
    // <div className={styles.profile}>
    //   <div className={styles.card}>
    //     <div className={styles.image}>
    //       <img className={styles.imageChild} alt="" src="Ellipse 1.png" />
    //       <b className={styles.b}>王小明</b>
    //     </div>

    //     <FaCamera
    //       className="icon"
    //       style={{
    //         position: 'absolute',
    //         top: '110px',
    //         left: '147px',
    //         height: '50px',
    //         overflow: 'hidden',
    //       }}
    //       size="30px"
    //       // onClick={}
    //     />

    //     <div className={styles.info}>
    //     <Link href="/edit-profile">修改個人資訊</Link>
    //     <Link href="/change-password">變更密碼</Link>
    //     <Link href="/hotel-booking">我的訂房</Link>
    //     <Link href="/restaurant-reservation">我的訂位</Link>
    //     <Link href="/my-blog">我的論壇</Link>
       
          
      //    </div>
      // </div>
      <div>
        <Member />
      <div className={styles.card1}>
      			<b className={styles.b1}>我的訂位</b>
      			<div className={styles.item}>
        				<div className={styles.id}>1234567890</div>
        				<div className={styles.hotelName}>煙波大飯店台南館</div>
        				<div className={styles.hotelDate}>{`2024-10-12 `}</div>
        			
      			</div>
      			<div className={styles.item1}>
        				<div className={styles.id}>1234567890</div>
        				<div className={styles.hotelName}>煙波大飯店台南館</div>
        				<div className={styles.hotelDate}>{`2024-10-12 `}</div>
        				
      			</div>
      			<div className={styles.caption}>
        				<b className={styles.hotelNames}>訂單編號</b>
        				<b className={styles.hotelNames}>餐廳名稱</b>
        				<b className={styles.b3}>訂單建立日期</b>
        				
      			</div>
      			<div className={styles.category}>
        				<button type='button' className={styles.button25}>
          					<b className={styles.b5}>進行中訂單</b>
        				</button>
        				<button type='button'  className={styles.button1}>
          					<b className={styles.b5}>已完成訂單</b>
        				</button>
        				<button type='button'  className={styles.button1}>
          					<b className={styles.b5}>已取消訂單</b>
        				</button>
      			</div>
    		</div>
      // </div> 
  )
}


export default Blog

