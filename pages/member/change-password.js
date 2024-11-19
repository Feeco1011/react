import styles from '@/styles/profile.module.css'
import React, { useState, useEffect } from 'react'
import Member from '@/components/member/member'
import toast, { Toaster } from 'react-hot-toast'
import { updatePassword } from '@/services/user'
import { useAuth } from '@/hooks/use-auth'

// 定義要在此頁呈現/編輯的會員資料初始物件
const initUserPassword = {
  origin: '', // 原本密碼，要比對成功才能修改
  new: '', // 新密碼
  confirm: '', //確認新密碼用(前端檢查用，不送後端)
}

export default function PasswordPassword() {
  // 需要會員登入時的id
  const { auth } = useAuth()
  // 本頁狀態用
  const [userPassword, setUserPassword] = useState(initUserPassword)

  // 純粹觀察userPassword狀態變化用
  // useEffect(() => {
  //   console.log('userPassword狀態變化', userPassword)
  // }, [userPassword])

  // 輸入資料用
  const handleFieldChange = (e) => {
    setUserPassword({ ...userPassword, [e.target.name]: e.target.value })
  }

  // 送出表單用
  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    // e.preventDefault()

    // 表單驗証 - START
    if (!userPassword.new || !userPassword.origin || !userPassword.confirm) {
      toast.error('密碼欄位為必填')
      return // 跳出函式
    }

    if (userPassword.new !== userPassword.confirm) {
      toast.error('新密碼與確認密碼不同')
      return // 跳出函式
    }
    // 表單驗証 - END

    // 送到伺服器進行更新
    const password = { origin: userPassword.origin, new: userPassword.new }
    const res = await updatePassword(auth.userData.id, password)

    console.log(res.data)

    if (res.data.status === 'success') {
      toast.success('會員密碼修改成功')
    } else {
      toast.error('會員密碼修改失敗')
    }
  }

  // input-password
  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [showOldPass, setShowOldPass] = useState(false)
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Member />
        <div className={styles.card1}>
          <b className={styles.b1}>變更密碼</b>
          <div className={styles.passwordinfo1}>
            <div className={styles.inputGroup}>
              <label className={styles.div100} htmlFor="oldPassword">
                舊密碼
              </label>
              <input
                type={showOldPass ? 'text' : 'password'}
                className={styles.input}
                placeholder="請輸入舊密碼"
                id="oldPassword"
                value={userPassword.origin || oldPass}
                onChange={(e) => {
                  handleFieldChange(e)
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
              <label className={styles.div100} htmlFor="newPassword">
                新密碼
              </label>
              <input
                type={showNewPass ? 'text' : 'password'}
                className={styles.input}
                placeholder="請輸入新密碼"
                id="newPassword"
                value={userPassword.new || newPass}
                onChange={(e) => {
                  handleFieldChange(e)
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
            <div className={styles.inputGroup2}>
              <label className={styles.div100} htmlFor="confirmPassword">
                確認新密碼
              </label>
              <input
                type={showConfirmPass ? 'text' : 'password'}
                className={styles.input}
                name="confirm"
                placeholder="再次確認新密碼"
                id="confirmPassword"
                value={userPassword.confirm || confirmPass}
                onChange={(e) => {
                  handleFieldChange(e)
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
              <button type="submit" className={styles.savePcChild}>
                儲存
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </form>
  )
}
