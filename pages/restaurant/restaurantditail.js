import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import style from '@/styles/restaurantditail.module.css'
import Link from 'next/link'

export default function Index() {
  const [people, setPeople] = useState('人數')
  const [time, setTime] = useState('時間')

  const handlePeopleChange = (e) => {
    setPeople(e.target.value)
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }

  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <>
      <title>餐廳訂位頁面</title>
      <div className={`${style.container} ${style.restaunrantName}`}>
      心潮飯店 SINCHAO RICE SHOPPE
      </div>
      <div className={style.imgContainer}>
        <div className={style.imageWrapper}>
          <img
            src="/restaurantPicture/one/心潮1.jpg"
            alt="左側圖片"
            className={style.leftImage}
          />
        </div>
        <div className={style.rightImages}>
          <img
            src="/restaurantPicture/one/心潮2.jpg"
            alt="右側圖片1"
            className={style.rightImage}
          />
          <img
            src="/restaurantPicture/one/心潮3.jpg"
            alt="右側圖片2"
            className={style.rightImage}
          />
          <img
            src="/restaurantPicture/one/心潮4.jpg"
            alt="右側圖片3"
            className={style.rightImage}
          />
          <img
            src="/restaurantPicture/one/心潮5.jpg"
            alt="右側圖片4"
            className={style.rightImage}
          />
        </div>
        <div className={style.selectionBox}>
          <div className={style.selectionTitle}>選擇時間、人數</div>

          {/* 人數下拉式選單 */}
          <select
            className={`${style.box} ${style.box1}`}
            value={people}
            onChange={handlePeopleChange}
          >
            <option disabled>人數</option>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} 人
              </option>
            ))}
          </select>

          <DatePicker
            className={`${style.box2}`}
            calendarClassName={style.customDatepickerInput}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy年MM月dd日"
            minDate={new Date()}
            // 禁止選擇當天以前的日期
          />

          {/* 時間下拉式選單 */}
          <select
            className={`${style.box} ${style.box3}`}
            value={time}
            onChange={handleTimeChange}
          >
            <option disabled>時間</option>
            {Array.from(
              { length: 19 },
              (_, i) => `${11 + Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`
            ).map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          {/* 送出按鈕 */}
          <Link href="/restaurant/reservation1">
            <div className={`${style.box} ${style.box3}`}>送出</div>
          </Link>
        </div>
      </div>
      <div className={`${style.container} ${style.introduction}`}>
      心潮飯店在各台菜餐廳林立之下，我們提供了新式創新及保有經典台菜的餐點服務。
      另有提供雞尾酒、葡萄酒、各式軟性飲料的選擇，加上位處微風信義百貨內，整日營運之下，午茶時間餐廳沒有休息，整日也提供了咖啡及甜點的多樣性選擇。
        <div className={style.reservationKnowing}>
          <ol>
            <ol>
              <ul>餐廳名稱：心潮飯店 SINCHAO RICE SHOPPE</ul>
              <ul>餐廳電話：(02)2723-9976</ul>
              <ul>餐廳地址：台北市信義區忠孝東路五段68號2樓</ul>
              <ul>營業時間：周日至周三 11:00-21:30 &nbsp;&nbsp;周四至周六 11:00-22:00</ul>
              <ul>料理類型：中式料理, 百貨商圈</ul>
            </ol>
          </ol>
        </div>
      </div>
      <div className={`${style.container} ${style.googlemap}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.242338643222!2d121.5665695!3d25.0405014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abce7987eb23%3A0xd66dd276f16c59a2!2z5b-D5r2u6aOv5bqXIFNJTkNIQU8gUklDRSBTSE9QUEU!5e0!3m2!1szh-TW!2stw!4v1731667233415!5m2!1szh-TW!2stw"
          allowFullScreen=""
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
          title="googlemap"
        ></iframe>
      </div>
      <br /> <br />
      {/* <div className={`${style.container} ${style.guestCommentTitle}`}>
        顧客評論
      </div>
      <br />
      <br />
      <div className={`${style.container} ${style.guestComment}`}>
        <div className={style.comment1}>
          <div className={style.guestNameAndstarAndDate}>
            <div className={style.guestName}>小明</div>
            <div className={style.starAndDate}>
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <div className={style.commentDate}>2024/08/03</div>
            </div>
          </div>
          <div className={style.comment}>
            肉的品質很好，服務態度佳，自助吧的東西非常多元提供很多選擇，這次點了798套餐，真的很讚，很久沒吃過這麼讚的火鍋肉品。
          </div>
        </div>

        <div className={style.comment2}>
          <div className={style.guestNameAndstarAndDate}>
            <div className={style.guestName}>小明</div>
            <div className={style.starAndDate}>
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <div className={style.commentDate}>2024/08/03</div>
            </div>
          </div>
          <div className={style.comment}>
            肉的品質很好，服務態度佳，自助吧的東西非常多元提供很多選擇，這次點了798套餐，真的很讚，很久沒吃過這麼讚的火鍋肉品。
          </div>
        </div>

        <div className={style.comment3}>
          <div className={style.guestNameAndstarAndDate}>
            <div className={style.guestName}>小明</div>
            <div className={style.starAndDate}>
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <img
                className={style.starImg}
                src="/restaurantPicture/one/star.png"
                alt=""
              />
              <div className={style.commentDate}>2024/08/03</div>
            </div>
          </div>
          <div className={style.comment}>
            肉的品質很好，服務態度佳，自助吧的東西非常多元提供很多選擇，這次點了798套餐，真的很讚，很久沒吃過這麼讚的火鍋肉品。
          </div>
        </div>
      </div> */}
    </>
  )
}
