import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Member from '@/components/member/member'

const Profile = () => {
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
          // onClick={}
        // />

        // <div className={styles.info}>
        //   <Link href="/test/user/edit-profile">修改個人資訊</Link>
        //   <Link href="/change-password">變更密碼</Link>
        //   <Link href="/hotel-booking">我的訂房</Link>
        //   <Link href="/restaurant-reservation">我的訂位</Link>
        //   <Link href="/my-blog">我的論壇</Link>
         
         
        // </div>
      // </div>
      <div>
        <Member />
      <div className={styles.card1}>
        <b className={styles.b1}>修改個人資訊</b>
        <div className={styles.info1}>
          <div className={styles.inputGroup}>
            <label className={styles.name} htmlFor="userName">
              姓名
            </label>

            <input
              type="text"
              className={styles.input}
              placeholder="請輸入姓名"
              id="userName"
            />
          </div>

          <div className={styles.sexGroup}>
            <div className={styles.div8}>
              <p className={styles.p}>性別</p>
            </div>
            <div className={styles.sex}>
              {/* <label className={styles.sexChild} > */}

              <label>
                <input type="radio" name="sex" value="male" />
                男性
              </label>
              <label>
                <input type="radio" name="sex" value="female" />
                女性
              </label>
              <label>
                <input type="radio" name="sex" value="other" />
                其他
              </label>
            </div>
          </div>
          <div className={styles.inputGroup1}>
            <label className={styles.div6} htmlFor="mobile">電話號碼</label>
            <input
              type="tel"
              className={styles.input}
              placeholder="請輸入電話號碼"
              id="mobile"
            />
          </div>
          <div className={styles.inputGroup2}>
            <label className={styles.div6} htmlFor="email">電子信箱</label>
            <input
              type="email"
              className={styles.input}
              placeholder="請輸入電子信箱"
              id="email"
              disabled
            />
          </div>
        </div>
        <div className={styles.div16}>
          <div className={styles.savePc}>
            <button type="button" className={styles.savePcChild}>
              儲存
            </button>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Profile
