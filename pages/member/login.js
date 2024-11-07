import styles from '@/styles/login.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Login = () => {
  // input-password
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  // 呈現密碼用
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.logo1}>LOGO</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.component22Wrapper}>
              <div className={styles.component22}>
                <div className={styles.destination}>
                  <div className={styles.iconpin}>
                    <img
                      className={styles.iconpin1}
                      alt=""
                      src="Icon/Pin.svg"
                    />
                  </div>
                  <div className={styles.paragraphTw}>新北市</div>
                </div>
              </div>
            </div>
            <div className={styles.component21Wrapper}>
              <div className={styles.component21}>
                <div className={styles.div}>景點</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconGroup}>
          <img
            className={styles.magnifyingGlass1Icon}
            alt=""
            src="magnifying-glass 1.png"
          />
          <div className={styles.div1}>登入</div>
          <div className={styles.div1}>註冊</div>
        </div>
      </div>
      <div className={styles.signincard}>
        <b className={styles.b}>會員登入</b>
        <div className={styles.info} />
        <div className={styles.alllogin}>
          <button type="button" className={styles.child}>
            會員登入
          </button>
        </div>
        {/* <b className={styles.b1}>會員登入</b> */}
        <div className={styles.logingrorp1}>
          <b className={styles.memberyet}>尚未註冊會員?</b>
          <div className={styles.logingrorp2}>
            <Link href="registerfinal" className={styles.tosignup}>
              會員註冊
            </Link>
            {/* <b className={styles.tosignup}>會員註冊</b> */}
          </div>
        </div>
        <div className={styles.login}>
          <div className={styles.inputGroup}>
            {/* <div className={styles.item} /> */}
          </div>

          <div className={styles.div14}>
            <div className={styles.div15}>
              <div className={styles.div16}>
                <div className={styles.profileInfo}>
                  <div className={styles.inputGroup2}>
                    <label className={styles.div13} htmlFor="email">電子信箱</label>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="請輸入電子信箱"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.div18}>
                <label className={styles.div13} htmlFor="password">密碼</label>
                <input
                  type={showNewPass ? 'text' : 'password'}
                  value={newPass}
                  className={styles.input}
                  placeholder="請輸入密碼"
                  id="password"
                  onChange={(e) => {
                    setNewPass(e.target.value)
                  }}
                />
              </div>

              <button
                className={styles.showloginpass}
                onClick={() => {
                  setShowNewPass(!showNewPass)
                }}
              >
                {showNewPass ? '顯示' : '不顯示'}
              </button>
            </div>
            <div className={styles.div20}>
              <label className={styles.div13} htmlFor="confirmPassword">確認密碼</label>
              <input
                type={showConfirmPass ? 'text' : 'password'}
                value={confirmPass}
                className={styles.input}
                placeholder="再次確認密碼"
                id="confirmPassword"
                onChange={(e) => {
                  setConfirmPass(e.target.value)
                }}
              />
            </div>
            <button
              className={styles.loginconfirmshowpass}
              onClick={() => {
                setShowConfirmPass(!showConfirmPass)
              }}
            >
              {showConfirmPass ? '顯示' : '不顯示'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
