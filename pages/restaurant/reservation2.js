import React from 'react'
import style from '@/styles/reservation2.module.css'
import Link from 'next/link'
export default function Index() {
  return (
    <>

<div className={style.block}>
  <div className={style.blockTitle}>已完成訂位</div>
  <img className={style.rImg} src="/restaurantPicture/one/心潮1.jpg" alt="" />
  <div className={style.ifoAndName}>
    <div>心潮飯店</div>
    <div className={style.ifo}>
      <div>
        <img src="/logoTest/date_icon.jpg" alt="" />
        2024年12月21日
      </div>
      <div>
        <img src="/logoTest/time_icon.jpg" alt="" />
        下午 6:30
      </div>
      <div>
        <img src="/logoTest/num_icon.jpg" alt="" />
        2位
      </div>
    </div>
  </div>
  <div className={style.selectShowing}>場合:生日</div>
  <div className={style.textareashowing}>特殊需求:有蛋糕要冰</div>
  <Link href="/restaurant"><button className={style.finsh}>完成訂位</button></Link>
</div>
 
 </>
)
}