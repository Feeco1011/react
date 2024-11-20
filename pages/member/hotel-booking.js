import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Member from '@/components/member/member'

const Hotel = () => {
  return (
    <div>
      <Member />
      <div className={styles.card1}>
        <b className={styles.b1}>我的訂房</b>
        <div className={styles.item1}>
          <Link href="/hotels/pay3" className={styles.id}>
            A1245378200
          </Link>
          <div className={styles.hotelName}>福朋喜來登酒店</div>
          <div className={styles.hotelDate}>{`2024-11-21 `}</div>
          <div className={styles.hotelPrice}>NT$4380.00</div>
        </div>
        <div className={styles.caption}>
          <b className={styles.hotelNames}>訂單編號</b>
          <b className={styles.hotelNames}>飯店名稱</b>
          <b className={styles.b3}>訂單建立日期</b>
          <b className={styles.b3}>總價</b>
        </div>
        <div className={styles.category}>
          <button type="button" className={styles.button25}>
            <b className={styles.b5}>進行中訂單</b>
          </button>
          <button type="button" className={styles.button1}>
            <b className={styles.b5}>已完成訂單</b>
          </button>
          <button type="button" className={styles.button1}>
            <b className={styles.b5}>已取消訂單</b>
          </button>
        </div>
      </div>
      <title>我的飯店訂房</title>
    </div>
  )
}

export default Hotel
