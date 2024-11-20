import styles from '@/styles/header.module.css'
import { FaUser } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

export default function Navbar() {
  const { auth, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={styles.header}>
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <a href="../">
            <img
              src="/taiwango.png"
              alt="logo"
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
                <select>
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
              <select>
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
        {auth.isAuth ? (
          // 已登入時顯示 FaUser 圖標和下拉選單
          <div className={styles.iconGroup1}>
            <div className={styles['button']}>
              {menuOpen && (
                <div className={styles.menu}>
                  <ul>
                    <li>
                      <Link href="/member/edit-profile">修改個人資訊</Link>
                    </li>
                    <li>
                      <Link href="/member/hotel-booking">我的訂房</Link>
                    </li>
                    <li>
                      <Link href="/member/restaurant-reservation">我的訂位</Link>
                    </li>
                    <li>
                      <Link href="/member/my-blog">我的論壇</Link>
                    </li>
                    {/* <li> */}
                    <div  className={styles.alllogout}>
                      <button
                        type="button"
                        className={styles}
                        onClick={logout}
                      >
                        
                        登出
                      </button>
                      </div>
                    {/* </li> */}
                  </ul>
                </div>
              )}
            </div>
            <FaUser
              className="icon"
              onClick={toggleMenu}
              style={{
                marginBottom: '3px',
                color: '#FC9F4D',
                cursor: 'pointer',
              }}
              size="30px"
            />
          </div>
        ) : (
          // 未登入時顯示登入與註冊連結
          <div className={styles.authLinks}>
            <Link href="/member/login" className={styles.loginLink}>
              登入
            </Link>
            <Link href="/member/register" className={styles.registerLink}>
              註冊
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
