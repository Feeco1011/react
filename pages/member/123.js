import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Member from '@/components/member/member'
import {
  updateProfile,
  getUserById,
  updateProfileAvatar,
} from '@/services/user'
import { useAuth } from '@/hooks/use-auth'
import toast, { Toaster } from 'react-hot-toast'
import PreviewUploadImage from '@/components/user-test/preview-upload-image'
import { avatarBaseUrl } from '@/configs'
// 定義要在此頁呈現/編輯的會員資料初始物件
const initUserProfile = {
  name: '',
  sex: '',
  phone: '',
  birth_date: '',
  avatar: '',
}


const Profile = () => {
  const { auth } = useAuth()
const [userProfile, setUserProfile] = useState(initUserProfile)
const [hasProfile, setHasProfile] = useState(false)
const [selectedFile, setSelectedFile] = useState(null)

const getUserData = async (id) => {
  const res = await getUserById(id)

  console.log(res.data)

  if (res.data.status === 'success') {
    // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料
    const dbUser = res.data.data.user
    const dbUserProfile = { ...initUserProfile }

    for (const key in dbUserProfile) {
      if (Object.hasOwn(dbUser, key)) {
        // 這裡要將null值的預設值改為空字串 ''
        dbUserProfile[key] = dbUser[key] || ''
      }
    }

    // 設定到狀態中
    setUserProfile(dbUserProfile)

    toast.success('會員資料載入成功')
  } else {
    toast.error(`會員資料載入失敗`)
  }
}

// auth載入完成後向資料庫要會員資料
useEffect(() => {
  if (auth.isAuth) {
    getUserData(auth.userData.id)
  }
  // eslint-disable-next-line
}, [auth])

// 提示其它相關個人資料元件可以載入資料
useEffect(() => {
  // 純粹觀察userProfile狀態變化用
  // console.log('userProfile狀態變化', userProfile)
  if (userProfile.name) {
    setHasProfile(true)
  }
}, [userProfile])

// 輸入一般資料用
const handleFieldChange = (e) => {
  setUserProfile({ ...userProfile, [e.target.name]: e.target.value })
}

// 送出表單用
const handleSubmit = async (e) => {
  // 阻擋表單預設送出行為
  e.preventDefault()

  // 這裡可以作表單驗証

  // 送到伺服器進行更新
  // 更新會員資料用，排除avatar
  let isUpdated = false

  const { avatar, ...user } = userProfile
  const res = await updateProfile(auth.userData.id, user)

  // console.log(res.data)

  // 上傳頭像用，有選擇檔案時再上傳
  if (selectedFile) {
    const formData = new FormData()
    // 對照server上的檔案名稱 req.files.avatar
    formData.append('avatar', selectedFile)

    const res2 = await updateProfileAvatar(formData)

    // console.log(res2.data)
    if (res2.data.status === 'success') {
      toast.success('會員頭像修改成功')
    }
  }

  if (res.data.status === 'success') {
    toast.success('會員資料修改成功')
  } else {
    toast.error('會員資料修改失敗')
  }
}

// 未登入時，不會出現頁面內容
if (!auth.isAuth) return <></>


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
              value={userProfile.name}
              onChange={handleFieldChange}
            />
          </div>

          <div className={styles.sexGroup}>
            <div className={styles.div8}>
              <p className={styles.p}>性別</p>
            </div>
            <div className={styles.sex}>
           <label>
                <input type="radio" name="sex" value="male"  checked={userProfile.sex === 'male'}
              onChange={handleFieldChange}/>
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
      </form>
   </div>

  
  )
}

export default Profile