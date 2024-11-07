import styles from '@/styles/login.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

const Register = () => {
    // 從勾子的context得到註冊函式
  const { register } = useAuth()
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  // 呈現密碼用
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  // 狀態為物件，屬性對應到表單的欄位名稱
  const [user, setUser] = useState({
    name: '',
    sex: false,
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // 錯誤訊息狀態
  const [errors, setErrors] = useState({
    name: '',
    sex: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '', // 錯誤訊息用字串
  })

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
      <div className={styles.signupcard}>
        <b className={styles.b}>會員註冊</b>
        {/* <div className={styles.info} /> */}
        <div className={styles.div3}>
          <button type="button" className={styles.registerchild}>
            會員註冊
          </button>
        </div>
        {/* <b className={styles.b1}>會員註冊</b> */}
        <div className={styles.registergroup1}>
          <b className={styles.b2}>已有會員帳號?</b>
          <div className={styles.registergroup2}>
            <Link href="login" className={styles.b3}>
              回會員登入
            </Link>
            {/* <b className={styles.b3}>回會員登入</b> */}
          </div>
        </div>
        <div className={styles.register}>
          <div className={styles.inputGroup}>
            <label className={styles.div600} htmlFor="name">
              姓名
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="請輸入姓名"
              id="name"
            />
            <div className={styles.item} />
          </div>
          <div className={styles.sexGroup}>
            <div className={styles.div8}>
              <p className={styles.p}>性別</p>
            </div>
            <div className={styles.sex}>
              {/* <label className={styles.sexChild} > */}

              <label class="radio-container">
                <input type="radio" name="sex" value="male" />
                男性
              </label>
              <label class="radio-container">
                <input type="radio" name="sex" value="female" />
                女姓
              </label>
              <label>
                <input type="radio" name="sex" value="other" />
                其他
              </label>
            </div>
          </div>

          <div className={styles.div12}>
            <label className={styles.div13} htmlFor="mobile">電話號碼</label>
            <input
              type="tel"
              className={styles.input}
              placeholder="請輸入電話號碼"
              id="mobile"
            />
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
                className={styles.showpass}
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
              className={styles.registerconfirmshowpass}
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

export default Register
