import styles from '@/styles/header.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { HiMapPin } from 'react-icons/hi2'
// import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const [menuOpen, setMenuOpen] = useState(false)


  return (

    // const Index = () => {
    //   const [accommodations, setAccommodations] = useState([])
    //   const [selectedCity, setSelectedCity] = useState('')
    //   const [selectedType, setSelectedType] = useState('')
    //   const [selectedRating, setSelectedRating] = useState('')

    <div className={styles.header}>
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <a href="index123">
            <img
              src="/taiwango.png"
              alt=""
              className="logo"
              width="100%"
              height="90px"
            />
          </a>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.component22Wrapper}>
            <div className={styles.component22}>
              <div className={styles.destination}>
                <div className={styles.iconpin}>{/* <HiMapPin /> */}</div>
                {/* <div className={styles.paragraphTw}>新北市</div> */}
                <select onChange={''} value={''}>
                  <option value="新北市">新北市</option>
                  <option value="台北市">台北市</option>
                  <option value="宜蘭縣">宜蘭縣</option>
                  <option value="花蓮縣">花蓮縣</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.component21Wrapper}>
            <div className={styles.component21}>
              {/* <div className={styles.div17}>景點</div> */}
              <select onChange={''} value={''}>
                <option value="住宿">住宿</option>
                <option value="餐廳">餐廳</option>
                <option value="景點">景點</option>
                <option value="論壇">論壇</option>
                <option value="露營">露營</option>
                <option value="宮廟參拜">宮廟參拜</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.iconGroup}>
        <FaSearch className="icon" size="30px" />

        <div className={styles.iconGroup1}>
          <div className={styles['button']}>
            {/* 用戶頭像 */}
            
          
            
             
         

            {/* 下拉選單 */}
            {menuOpen && (
              <div className={styles.menu}>
                 <ul>
                 {/* <li>{user.name}</li> */}


                 <li> <Link href="/member/edit-profile">修改個人資訊</Link></li>

                 <li><Link href="/member/change-password">變更密碼</Link></li>

                 <li><Link href="/member/hotel-booking">我的訂房</Link></li>

                 <li><Link href="/member/restaurant-reservation">我的訂位</Link></li>

                 <li><Link href="/member/my-blog">我的論壇</Link></li>

                 <li><Link href="/member/logout">登出</Link></li>
               
                </ul>
              </div>
            )}
          </div>

          <FaUser
            className="icon"
            onClick={toggleMenu}
            style={{
              marginBottom: '3px',
              color: 'FC9F4D',
              cursor: 'pointer',
            
            }}
            size="30px"
          />
        </div>
      </div>
    </div>
    // </div>
  )
}
