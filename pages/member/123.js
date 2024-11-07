import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'


export default function Member() {
  return (
    <div className={styles.profile}>
    <div className={styles.card}>
      <div className={styles.image}>
        <img className={styles.imageChild} alt="" src="Ellipse 1.png" />
        <b className={styles.b}>王小明</b> 
      </div>
    
      

      <FaCamera
        className="icon"
        style={{
          position: 'absolute',
          top: '110px',
          left: '147px',
          height: '50px',
          overflow: 'hidden',
        }}
        size="30px"
        // onClick={}
      />

      <div className={styles.info}>
        <Link href="/test/user/edit-profile">修改個人資訊</Link>
        <Link href="/change-password">變更密碼</Link>
        <Link href="/hotel-booking">我的訂房</Link>
        <Link href="/restaurant-reservation">我的訂位</Link>
        <Link href="/my-blog">我的論壇</Link>
        <Link href="/my-fav">我的收藏</Link>

        {/* <div className={styles.div}>修改個人資訊</div> */}
        {/* <div className={styles.div1}>變更密碼</div> */}
      </div>
    </div>
    </div>
  
  )
}
