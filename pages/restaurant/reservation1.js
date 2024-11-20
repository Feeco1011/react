import React, { useEffect, useState } from 'react'
import style from '@/styles/reservation1.module.css'
import Link from 'next/link'
export default function Index() {
  const [people, setPeople] = useState(0)
  const [time, setTime] = useState(0)
  const [date, setDate] = useState('')
  const [memo, setMemo] = useState('')
  const [resaon, setResaon] = useState('')
  useEffect(() => {
    if (localStorage.getItem('restaurant-people')) {
      setPeople(localStorage.getItem('restaurant-people'))
    }
    if (localStorage.getItem('restaurant-time')) {
      setTime(localStorage.getItem('restaurant-time'))
    }
    if (localStorage.getItem("restaurant-date")) {
      const storedDate = new Date(localStorage.getItem("restaurant-date"));
      // 格式化为仅日期，例如 "2023年11月20日"
      const formattedDate = storedDate.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDate(formattedDate);
    }
  }, [])

  const handleMemoChange = (e) => {
    setMemo(e.target.value)
    // console.log('e',e.target.value);
    localStorage.setItem('restaurant-memo', e.target.value)
  }

  const handleResaonChange = (e) => {
    setResaon(e.target.value)
    // console.log('e',e.target.value);
    localStorage.setItem('restaurant-resaon', e.target.value)
  }

  return (
    <>
    <title>快要完成了!</title>
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
              {date}
            </div>
            <div>
              <img src="/logoTest/time_icon.jpg" alt="" /> {time}
            </div>
            <div>
              <img src="/logoTest/num_icon.jpg" alt="" /> {people}位
            </div>
          </div>
        </div>
        <div className={style.selectAndtextarea}>
          <select className={style.select}
          value={resaon}
          onChange={handleResaonChange}
          >
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
          <button className={style.finsh}>下一步</button>
        </Link>
      </div>
    </>
  )
}
