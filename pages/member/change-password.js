import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Member from '@/components/member/member'


const Password = () => {
  // input-password
  const [pass, setPass] = useState('')
  // checkbox呈現密碼用
  const [show, setShow] = useState(false)

  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [showOldPass, setShowOldPass] = useState(false)
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)


  return (
 

   
      <div>
        <Member />
      <div className={styles.card1}>
        <b className={styles.b1}>變更密碼</b>
        <div className={styles.passwordinfo1}>
          <div className={styles.inputGroup}>
            <label className={styles.div100} htmlFor="oldPassword">舊密碼</label>
            <input
              type={showOldPass ? 'text' : 'password'}
              value={oldPass}
              className={styles.input}
              placeholder="請輸入舊密碼"
              id="oldPassword"
              onChange={(e) => {
                setOldPass(e.target.value)
              }}
            />
          </div>
          <button
            className={styles.showpass}
            onClick={() => {
              setShowOldPass(!showOldPass)
            }}
          >
            {showOldPass ? '顯示' : '不顯示'}
          </button>

          <div className={styles.inputGroup1}>
            <label className={styles.div100} htmlFor="newPassword">新密碼</label>
            <input
              type={showNewPass ? 'text' : 'password'}
              value={newPass}
              className={styles.input}
              placeholder="請輸入新密碼"
              id="newPassword"
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
          {/* <input
        type="checkbox"
        // checked={show}
        onChange={(e) => {
          setShow(e.target.checked)
        }}
      />{' '}
      呈現密碼
          */}

          <div className={styles.inputGroup2}>
            <label className={styles.div100} htmlFor="confirmPassword">確認新密碼</label>
            <input
              type={showConfirmPass ? 'text' : 'password'}
              value={confirmPass}
              className={styles.input}
              placeholder="再次確認新密碼"
              id="confirmPassword"
              onChange={(e) => {
                setConfirmPass(e.target.value)
              }}
            />
          </div>
          <button
            className={styles.showpass}
            onClick={() => {
              setShowConfirmPass(!showConfirmPass)
            }}
          >
            {showConfirmPass ? '顯示' : '不顯示'}
          </button>
        </div>

        <div className={styles.div16}>
          <div className={styles.savePc2}>
            {/* <div className={styles.savePcChild} />
            <div className={styles.b2}>儲存</div> */}
            <button type="button" className={styles.savePcChild}>
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Password
