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
        2024年10月14日
      </div>
      <div>
        <img src="/logoTest/time_icon.jpg" alt="" />
        下午 7:00
      </div>
      <div>
        <img src="/logoTest/num_icon.jpg" alt="" />
        2位
      </div>
    </div>
  </div>
  <div className={style.selectShowing}>場合:周年紀念</div>
  <div className={style.textareashowing}>特殊需求:</div>
    <button className={style.finsh}>取消訂位</button>
</div>
 
 </>
)
}