import styles from '@/styles/profile.module.css'

import React, { useState, useEffect } from 'react'
import Member from '@/components/member/member'
import { useAuth } from '@/hooks/use-auth'


export default function Profile() {
  // 從勾子的context得到註冊函式
  const { update, getMember } = useAuth()


   // 狀態為物件，屬性對應到表單的欄位名稱
   const [user, setUser] = useState({
    name: '',
    sex: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  })

   // 錯誤訊息狀態
   const [errors, setErrors] = useState({
    name: '',
    sex: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  })

   // 多欄位共用事件函式
   const handleFieldChange = (e) => {
    // ES6特性: 計算得來的物件屬性名稱(computed property name)
    let nextUser = { ...user, [e.target.name]: e.target.value }

    setUser(nextUser)
  }

  const checkError = (user) => {
    // 表單檢查--START---
    // 1. 建立一個全新的錯誤訊息用物件
    const newErrors = {
    name: '',
    sex: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    }

     // 2.開始作各欄位的表單檢查，如果有錯誤訊息就加到newErrors
     if (!user.name) {
      newErrors.name = '姓名為必填'
    }

    if (!user.mobile) {
      newErrors.mobile = '電話號碼為必填'
    }


    if (user.password !== user.confirmPassword) {
      newErrors.password = '密碼與確認密碼需要相同'
      newErrors.confirmPassword = '密碼與確認密碼需要相同'
    }

    if (user.password.length < 6) {
      newErrors.password = '密碼長度不能小於6'
    }

    if (!user.password) {
      newErrors.password = '密碼為必填'
    }

    if (!user.confirmPassword) {
      newErrors.confirmPassword = '確認密碼為必填'
    }


//   const { auth } = useAuth()
// const [userProfile, setUserProfile] = useState(initUserProfile)
// const [hasProfile, setHasProfile] = useState(false)
// const [selectedFile, setSelectedFile] = useState(null)
 // 如果newErrors中的物件值中其中有一個非空白字串，代表有錯誤發生
 const hasErrors = Object.values(newErrors).some((v) => v)

 // 表單檢查--END---
 return { newErrors, hasErrors }
}

const handleSubmit = async (e) => {
 // 固定的ajax/fetch的語法，會在表單submit觸發的第一行阻擋表單的預設行為
 e.preventDefault()

 // 檢查錯誤
 const { newErrors, hasErrors } = checkError(user)
 // 呈現錯誤訊息
 setErrors(newErrors)
 // 有錯誤，不送到伺服器，跳出此函式
 if (hasErrors) {
   return // 跳出此函式，在下面的程式碼不會再執行
 }

 // 送到伺服器
 // 刪除不必要的欄位(不一定需要)
 const { confirmPassword, ...newUser } = user
 // 呼叫register(useAuth勾子裡)
 await update(newUser)
}

// 初始化會員資料
const initMemberData = async () => {
 const member = await getMember()
 setUser({ ...member, password: '', confirmPassword: '' })
}

// 本頁一開始render後就會設定到user狀態中
useEffect(() => {
 initMemberData()
}, [])

  return (
      <div>
        <Member />
        <form onSubmit={handleSubmit}>
      <div className={styles.card1}>
        <b className={styles.b1}>修改個人資訊</b>
        <div className={styles.info1}>
          <div className={styles.inputGroup}>
            <label className={styles.name} htmlFor="name">
              姓名
            </label>

            <input
              type="text"
              className={styles.input}
              placeholder="請輸入姓名"
              id="name"
              name="name"
              value={user.name}
              onChange={handleFieldChange}
            />
          </div>

          <div className={styles.sexGroup}>
            <div className={styles.div8}>
              <p className={styles.p}>性別</p>
            </div>
            <div className={styles.sex}>
           <label>
                <input type="radio" name="sex" value="male"  checked={user.sex === 'male'}
              onChange={handleFieldChange}/>
                男性
              </label>
              <label>
                <input type="radio" name="sex" value="female" checked={user.sex === 'female'}
              onChange={handleFieldChange} />
                女性
              </label>
              <label>
                <input type="radio" name="sex" value="other" checked={user.sex === 'other'}
              onChange={handleFieldChange} />
                其他
              </label>
            </div>
          </div>
          <div className={styles.inputGroup1}>
            <label className={styles.div6} htmlFor="mobile">電話號碼</label>
            <input
              type="tel"
              name="mobile"
              value={user.mobile}
              onChange={handleFieldChange}
              maxLength={10}
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
            <button type="submit" className={styles.savePcChild}>
              儲存
            </button>
          </div>
        </div>
      </div>
      </form>
      </div>
 
  )
}


