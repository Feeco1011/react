import React, { useEffect, useState } from 'react'
import style from '@/styles/reservation1.module.css'
import Link from 'next/link'
export default function Index() {
  const [people, setPeople] = useState(0)
  const [memo, setMemo] = useState('')
  useEffect(() => {
    if (localStorage.getItem('restaurant-people')) {
      setPeople(localStorage.getItem('restaurant-people'))
    }
  }, [])

  const handleMemoChange = (e) => {
    setMemo(e.target.value)
    // console.log('e',e.target.value);
    localStorage.setItem('restaurant-memo', e.target.value)
  }
  return (
    <>
      <div className={style.block}>
        <div className={style.blockTitle}>快要完成了!</div>
        <img
          className={style.rImg}
          src="/restaurantPicture/one/心潮1.jpg"
          alt=""
        />
        <div className={style.ifoAndName}>
          <div>心潮飯店</div>
          <div className={style.ifo}>
            <div>
              <img src="/logoTest/date_icon.jpg" alt="" />
              2024年12月21日
            </div>
            <div>
              <img src="/logoTest/time_icon.jpg" alt="" /> 下午 6:30
            </div>
            <div>
              <img src="/logoTest/num_icon.jpg" alt="" /> {people}位
            </div>
          </div>
        </div>
        <div className={style.selectAndtextarea}>
          <select className={style.select}>
            <option>選擇場合(選填)</option>
            <option>生日</option>
            <option>周年紀念</option>
            <option>約會之夜</option>
            <option>商業聚餐</option>
            <option>慶祝</option>
          </select>
          <textarea
            className={style.textarea}
            placeholder="新增特殊要求(選填)"
            onInput={handleMemoChange}
          >
            {memo}
          </textarea>
        </div>
        <Link href="/restaurant/reservation2">
          <button className={style.finsh}>完成訂位</button>
        </Link>
      </div>
    </>
  )
}
