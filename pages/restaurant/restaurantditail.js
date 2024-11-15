import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import style from '@/styles/restaurantditail.module.css'
import Link from 'next/link'

export default function Index() {
<<<<<<< HEAD
    const [people, setPeople] = useState("人數");
    const [time, setTime] = useState("時間");

    const handlePeopleChange = (e) => {
        setPeople(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <>
        <title>餐廳訂位頁面</title>
            <div className={`${style.container} ${style.restaunrantName}`}>嚮辣 台北松江店</div>
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
                        src="/restaurantPicture/one/心潮1.jpg"
                        alt="右側圖片1"
                        className={style.rightImage}
                    />
                    <img
                        src="/restaurantPicture/one/心潮1.jpg"
                        alt="右側圖片2"
                        className={style.rightImage}
                    />
                    <img
                        src="/restaurantPicture/one/心潮1.jpg"
                        alt="右側圖片3"
                        className={style.rightImage}
                    />
                    <img
                        src="/restaurantPicture/one/心潮1.jpg"
                        alt="右側圖片4"
                        className={style.rightImage}
                    />
                </div>
                <div className={style.selectionBox}> 
            <div className={style.selectionTitle}>選擇時間、人數</div>
            
            {/* 人數下拉式選單 */}
            <select className={`${style.box} ${style.box1}`} value={people} onChange={handlePeopleChange}>
                <option disabled>人數</option>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num} 人</option>
                ))}
            </select>
       
            <DatePicker
            className={`${style.box} ${style.box2}`}
            calendarClassName={style.customDatepickerInput}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy年MM月dd日"
                minDate={new Date()}  // 禁止選擇當天以前的日期
            />
        
            {/* 時間下拉式選單 */}
            <select className={`${style.box} ${style.box3}`} value={time} onChange={handleTimeChange}>
                <option disabled>時間</option>
                {Array.from({ length: 19 }, (_, i) => `${11 + Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`).map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            {/* 送出按鈕 */}
            <Link href="/restaurant/reservation1">
            <div className={`${style.box} ${style.box3}`}>送出</div>
            </Link>
        </div>
            </div>

            <div className={`${style.container} ${style.introduction}`}>
                嚮辣和牛麻辣鍋提供嗜辣族味覺與視覺雙飽足體驗，六種和牛玩味吃法，頂級海陸無限享用，搭配吸睛擺盤、時尚感的酒吧與自助吧台。讓吃到飽不只吃到爆，吃到飽也能有型有款！
                <div className={style.reservationKnowing}>
                    <ol>
                        訂位須知
                        <ol>
                            ◆訂位時間保留十五分鐘，逾時將取消訂位
                            <ul>餐廳名稱：台北凱達大飯店</ul>
                            <ul>餐廳電話：(02) 2515 - 1658</ul>
                            <ul>餐廳地址：台北市中山區松江路131-1號</ul>
                            <ul>營業時間：每日 00:00-02:00 每日 11:30-00:00</ul>
                            <ul>價位：NT$999及以下</ul>
                            <ul>料理：涮涮鍋</ul>
                        </ol>
                    </ol>
                </div>
            </div>

            <div className={`${style.container} ${style.googlemap}`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14457.620968102943!2d121.5332802!3d25.0542505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a94342e269a7%3A0x279d704e691345f3!2z5Zqu6L6jIOWSjOeJm-m6u-i-o-mNiyDlj7DljJfmnb7msZ_lupc!5e0!3m2!1szh-TW!2stw!4v1730274427824!5m2!1szh-TW!2stw"
                    allowFullScreen=""
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
            <br /> <br />
            <div className={`${style.container} ${style.guestCommentTitle}`}>顧客評論</div>
            <br /><br />
            <div className={`${style.container} ${style.guestComment}`}>
                <div className={style.comment1}>
                    <div className={style.guestNameAndstarAndDate}>
                        <div className={style.guestName}>小明</div>
                        <div className={style.starAndDate}>
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
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
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
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
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <img className={style.starImg} src="/restaurantPicture/one/star.png" alt="" />
                            <div className={style.commentDate}>2024/08/03</div>
                        </div>
                    </div>
                    <div className={style.comment}>
                        肉的品質很好，服務態度佳，自助吧的東西非常多元提供很多選擇，這次點了798套餐，真的很讚，很久沒吃過這麼讚的火鍋肉品。
                    </div>
                </div>
            </div>
        </>
    )
=======
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
        嚮辣 台北松江店
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
            src="/restaurantPicture/one/心潮1.jpg"
            alt="右側圖片1"
            className={style.rightImage}
          />
          <img
            src="/restaurantPicture/one/心潮1.jpg"
            alt="右側圖片2"
            className={style.rightImage}
          />
          <img
            src="/restaurantPicture/one/心潮1.jpg"
            alt="右側圖片3"
            className={style.rightImage}
          />
          <img
            src="/restaurantPicture/one/心潮1.jpg"
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
        嚮辣和牛麻辣鍋提供嗜辣族味覺與視覺雙飽足體驗，六種和牛玩味吃法，頂級海陸無限享用，搭配吸睛擺盤、時尚感的酒吧與自助吧台。讓吃到飽不只吃到爆，吃到飽也能有型有款！
        <div className={style.reservationKnowing}>
          <ol>
            訂位須知
            <ol>
              ◆訂位時間保留十五分鐘，逾時將取消訂位
              <ul>餐廳名稱：台北凱達大飯店</ul>
              <ul>餐廳電話：(02) 2515 - 1658</ul>
              <ul>餐廳地址：台北市中山區松江路131-1號</ul>
              <ul>營業時間：每日 00:00-02:00 每日 11:30-00:00</ul>
              <ul>價位：NT$999及以下</ul>
              <ul>料理：涮涮鍋</ul>
            </ol>
          </ol>
        </div>
      </div>
      <div className={`${style.container} ${style.googlemap}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14457.620968102943!2d121.5332802!3d25.0542505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a94342e269a7%3A0x279d704e691345f3!2z5Zqu6L6jIOWSjOeJm-m6u-i-o-mNiyDlj7DljJfmnb7msZ_lupc!5e0!3m2!1szh-TW!2stw!4v1730274427824!5m2!1szh-TW!2stw"
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
      <div className={`${style.container} ${style.guestCommentTitle}`}>
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
      </div>
    </>
  )
>>>>>>> main
}
