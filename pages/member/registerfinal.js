import styles from '@/styles/login.module.css'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

const Register = () => {
    // 從勾子的context得到註冊函式
  const { register } = useAuth()
  
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
  
  const [newPass, setNewPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  // 呈現密碼用
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  // 多欄位共用事件函式
  const handleFieldChange = (e) => {
    // ES6特性: 計算得來的物件屬性名稱(computed property name)
    let nextUser = { ...user, [e.target.name]: e.target.value }

    if (e.target.name === 'agree') {
      nextUser = { ...user, agree: e.target.checked }
    }

    setUser(nextUser)
  }

  const checkError = (user) => {
    // 表單檢查--START---
    // 1. 建立一個全新的錯誤訊息用物件
    const newErrors = {
      name: '',
      sex: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

   // 2.開始作各欄位的表單檢查，如果有錯誤訊息就加到newErrors
   if (!user.name) {
    newErrors.name = '姓名為必填'
  }

  if (!user.sex) {
    newErrors.sex = '性別為必填'
  }

  if (!user.mobile) {
    newErrors.mobile = '電話號碼為必填'
  }


  if (!user.email) {
    newErrors.email = '電子信箱為必填'
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
  await register(newUser)
}


  return (
    <form onSubmit={handleSubmit}>
    <div className={styles.profile}>
      <div className={styles.signupcard}>
        <b className={styles.b}>會員註冊</b>
        {/* <div className={styles.info} /> */}
        <div className={styles.div3}>
          <button type="submit" className={styles.registerchild}>
            會員註冊
          </button>
          <button
          type="button"
          onClick={() => {
            setUser({
              name: '',
           sex: '',
           mobile: '',
           email: '',
         password: '',
           confirmPassword: '',

            })
          }}
        ></button>
        </div>
        {/* <b className={styles.b1}>會員註冊</b> */}
        <div className={styles.registergroup1}>
          <b className={styles.b2}>已有會員帳號?</b>
          <div className={styles.registergroup2}>
            <Link href="login" className={styles.b3}>
              回會員登入
            </Link>
        
          </div>
        </div>
        <div className={styles.register}>
          <div className={styles.inputGroup}>
            <label className={styles.div600} htmlFor="name">
              姓名
            </label>
            <input
              type="text"
              name="name"
              className={styles.input}
              onChange={handleFieldChange}
              value={user.name}
              placeholder="請輸入姓名"
              id="name"
            />
            <span className="error" style={{color: 'red',
  fontSize: '12px',
  height: '16px',top:'50px',left:'130px',   position:'absolute', } }>{errors.sex}</span>
           
          
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
            <span className="error" style={{color: 'red',
  fontSize: '12px',
  height: '16px',top:'130px',left:'130px',   position:'absolute', } }>{errors.sex}</span>
          </div>
         

          <div className={styles.div12}>
            <label className={styles.div13} htmlFor="mobile">電話號碼</label>
            <input
              type="tel"
               name="mobile"
              className={styles.input}
              placeholder="請輸入電話號碼"
              id="mobile"
              value={user.mobile}
              onChange={handleFieldChange}
            />
             <span className="error" style={{color: 'red',
  fontSize: '12px',
  height: '16px',top:'55px',left:'130px',   position:'absolute', } }>{errors.mobile}</span>
          </div>
          
          <div className={styles.div14}>
            <div className={styles.div15}>
              <div className={styles.div16}>
                <div className={styles.profileInfo}>
                  <div className={styles.inputGroup2}>
                    <label className={styles.div13} htmlFor="email">電子信箱{' '}</label>
                    <input
                      type="email"
                       name="email"
                      className={styles.input}
                      onChange={handleFieldChange}
                      placeholder="請輸入電子信箱"
                      id="email"
                      value={user.email}

                    />  
                   
                  </div>
                  <span className="error" style={{color: 'red',
  fontSize: '12px',
  height: '16px',top:'50px',left:'130px',   position:'absolute', } }>{errors.email}</span>
                </div>
               
              </div>
             
              <div className={styles.div18}>
                <label className={styles.div13} htmlFor="password">密碼{' '}</label>
                <input
                  type={showNewPass ? 'text' : 'password'}
                    name="password"
                  value={user.password.newPass}
                  className={styles.input}
                  placeholder="請輸入密碼"
                  id="password"
                  // onChange={handleFieldChange}
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
               <span className="error" style={{color: 'red',
  fontSize: '12px',
  height: '16px',top:'180px',left:'185px',   position:'absolute', } }>{errors.password}</span>
              
              
               

            <div className={styles.div20}>
              <label className={styles.div13} htmlFor="confirmPassword">確認密碼{' '}</label>
              <input
                type={showConfirmPass ? 'text' : 'password'}
                value={user.confirmPassword.confirmPass}
                className={styles.input}
                placeholder="再次確認密碼"
                id="confirmPassword"
                // onChange={handleFieldChange}
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
         
 <span className="error" style={{color: 'red',
  fontSize: '12px',
  height: '16px',top:'560px',left:'190px',   position:'absolute', } }>{errors.confirmPassword}</span>
        </div>
      </div>
    </div>
    </form>

  
      
  )
}

export default Register
