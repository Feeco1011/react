import React, { useEffect, useState } from 'react'
import style from '@/styles/reservation2.module.css'
import Link from 'next/link'
export default function Index() {
  const [people, setPeople] = useState(0)
  const [time, setTime] = useState(0)
  const [memo, setMemo] = useState('')
  const [resaon, setResaon] = useState('')
  useEffect(() => {
    if (localStorage.getItem('restaurant-people')) {
      setPeople(localStorage.getItem('restaurant-people'))
    }
    if (localStorage.getItem('restaurant-time')) {
      setTime(localStorage.getItem('restaurant-time'))
    }
    if (localStorage.getItem('restaurant-memo')) {
      setMemo(localStorage.getItem('restaurant-memo'))
    }

    if (localStorage.getItem('restaurant-resaon')) {
      setResaon(localStorage.getItem('restaurant-resaon'))
    }

  }, [])

  return (
    <>
<title>完成訂位</title>
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
        {time}
      </div>
      <div>
        <img src="/logoTest/num_icon.jpg" alt="" />
        {people}位
      </div>
    </div>
  </div>
  <div className={style.selectShowing}>{resaon}</div>
  <div className={style.textareashowing}>{memo}</div>
  <Link href="/restaurant/reservation1"><button className={style.finsh}>修改備註</button></Link>
  <Link href="/restaurant"><button className={style.finsh}>完成訂位</button></Link>
</div>
 
 </>
)
}