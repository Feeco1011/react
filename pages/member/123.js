import styles from '@/styles/profile.module.css'
<<<<<<< HEAD
=======
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
>>>>>>> feeco
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
<<<<<<< HEAD

=======
>>>>>>> feeco
// 定義要在此頁呈現/編輯的會員資料初始物件
const initUserProfile = {
  name: '',
  sex: '',
  phone: '',
  birth_date: '',
  avatar: '',
}

<<<<<<< HEAD
export default function Profile() {
  const { auth } = useAuth()
  const [userProfile, setUserProfile] = useState(initUserProfile)
  const [hasProfile, setHasProfile] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  // 獲取會員資料
  const getUserData = async (id) => {
    const res = await getUserById(id)
    if (res.data.status === 'success') {
      const dbUser = res.data.data.user
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (Object.hasOwn(dbUser, key)) {
          dbUserProfile[key] = dbUser[key] || ''
        }
      }

      setUserProfile(dbUserProfile)
      toast.success('會員資料載入成功')
    } else {
      toast.error(`會員資料載入失敗`)
    }
  }

  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id)
    }
  }, [auth])

  useEffect(() => {
    if (userProfile.name) {
      setHasProfile(true)
    }
  }, [userProfile])

  const handleFieldChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isUpdated = false
    const { avatar, ...user } = userProfile
    const res = await updateProfile(auth.userData.id, user)

    if (selectedFile) {
      const formData = new FormData()
      formData.append('avatar', selectedFile)
      const res2 = await updateProfileAvatar(formData)
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

  if (!auth.isAuth) return <></>

  return (
    <>
      <h1>會員資料修改(一般)</h1>
      <hr />
      <p>
        規則: username與email不能修改(這與註冊機制或網站會員的安全機制的有關)
      </p>
      <p>
        注意: 密碼不在這裡修改，因機制不一樣，在
        <Link href="/test/user/profile-password">會員資料修改(密碼)</Link>
      </p>
      <hr />

      {hasProfile ? (
        <PreviewUploadImage
          avatarImg={userProfile.avatar}
          avatarBaseUrl={avatarBaseUrl}
          setSelectedFile={setSelectedFile}
          selectedFile={selectedFile}
        />
      ) : (
        <div>
          <img src="/blank.webp" alt="" width="200" height="200" />
        </div>
      )}


      <div>
      <Member />
=======

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
>>>>>>> feeco
      <div className={styles.card1}>
        <b className={styles.b1}>修改個人資訊</b>
        <div className={styles.info1}>
          <div className={styles.inputGroup}>
<<<<<<< HEAD
            <label className={styles.name} htmlFor="userName">姓名</label>
=======
            <label className={styles.name} htmlFor="name">
              姓名
            </label>

>>>>>>> feeco
            <input
              type="text"
              className={styles.input}
              placeholder="請輸入姓名"
<<<<<<< HEAD
              id="userName"
=======
              id="name"
>>>>>>> feeco
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
<<<<<<< HEAD
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  checked={userProfile.sex === 'male'}
                  onChange={handleFieldChange}
                />
                男性
              </label>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="female"
                  checked={userProfile.sex === 'female'}
                  onChange={handleFieldChange}
                />
                女性
              </label>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="other"
                  checked={userProfile.sex === 'other'}
                  onChange={handleFieldChange}
                />
=======
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
>>>>>>> feeco
                其他
              </label>
            </div>
          </div>
<<<<<<< HEAD

          <div className={styles.inputGroup1}>
            <label className={styles.div6} htmlFor="phone">電話號碼</label>
=======
          <div className={styles.inputGroup1}>
            <label className={styles.div6} htmlFor="mobile">電話號碼</label>
>>>>>>> feeco
            <input
              type="tel"
              className={styles.input}
              placeholder="請輸入電話號碼"
<<<<<<< HEAD
              id="phone"
              name="phone"
              value={userProfile.phone}
              onChange={handleFieldChange}
            />
          </div>

=======
              id="mobile"
            />
          </div>
>>>>>>> feeco
          <div className={styles.inputGroup2}>
            <label className={styles.div6} htmlFor="email">電子信箱</label>
            <input
              type="email"
              className={styles.input}
              placeholder="請輸入電子信箱"
              id="email"
<<<<<<< HEAD
              value={auth.userData.email}
=======
>>>>>>> feeco
              disabled
            />
          </div>
        </div>
<<<<<<< HEAD

        <div className={styles.div16}>
          <div className={styles.savePc}>
            <button type="button" onClick={handleSubmit} className={styles.savePcChild}>
=======
        <div className={styles.div16}>
          <div className={styles.savePc}>
            <button type="button" className={styles.savePcChild}>
>>>>>>> feeco
              儲存
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      </div>
    </>
  )
}
=======
      </form>
   </div>

  
  )
}

export default Profile
>>>>>>> feeco
