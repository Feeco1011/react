import styles from '@/styles/member.module.css'
import { FaCamera } from 'react-icons/fa6'
import Link from 'next/link'
import { useRouter } from 'next/router'



export default function Member() {
  const router = useRouter()

  return (
    <div className={styles.profile}>
    <div className={styles.card}>
    <Image
          width={300}
          height={180}
          src="/images/cat/c1.webp"
          className="card-img-top"
          alt="..."
        />
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
        <Link href="/member/edit-profile">
        <div className={router.pathname === '/member/edit-profile' ? styles.active : styles.inactive}>修改個人資訊</div></Link>
        <Link href="/member/change-password">
        <div className={router.pathname === '/member/change-password' ? styles.active : styles.inactive}>變更密碼</div></Link>
        <Link href="/member/hotel-booking">
        <div className={router.pathname === '/member/hotel-booking' ? styles.active : styles.inactive}>我的訂房</div></Link>
        <Link href="/member/restaurant-reservation">
        <div className={router.pathname === '/member/restaurant-reservation' ? styles.active : styles.inactive}>我的訂位</div></Link>
        <Link href="/member/my-blog">
        <div className={router.pathname === '/member/my-blog' ? styles.active : styles.inactive}>我的論壇</div></Link>
        

        {/* <div className={styles.div}>修改個人資訊</div> */}
        {/* <div className={styles.div1}>變更密碼</div> */}
      </div>
    </div>
    </div>
  
  )
}
