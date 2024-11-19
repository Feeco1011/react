import styles from '@/styles/login.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { auth, login, logout } = useAuth()

  // input-password
  // const [newPass, setNewPass] = useState('')
  // const [confirmPass, setConfirmPass] = useState('')
  // 呈現密碼用
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  return (
    <div className={styles.profile}>
      <div className={styles.signincard}>
        <b className={styles.b}>會員登入</b>
        <div className={styles.info} />
        <div className={styles.alllogin}>
          <button type="button" className={styles.child}  onClick={() => {
          login(email, password)
        }}>
            會員登入
          </button>
        </div>
        {/* <b className={styles.b1}>會員登入</b> */}
        <div className={styles.logingrorp1}>
          <b className={styles.memberyet}>尚未註冊會員?</b>
          <div className={styles.logingrorp2}>
            <Link href="register" className={styles.tosignup}>
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
                      name="email"
                      value={email}
                      onChange={(e) => {
                        
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.div18}>
                <label className={styles.div13} htmlFor="password">密碼</label>
                <input
                  type={showNewPass ? 'text' : 'password'}
                  value={password}
                className={styles.input}
                  placeholder="請輸入密碼"
                  id="password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value)
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
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default Login
