import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import Image from 'next/image'
import styles from '@/styles/hotel.module.css'
import Button from '@/components/button'
import 'react-datepicker/dist/react-datepicker.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

function AddressMap() {
  return (
    <div className="google-map-code" style={{ marginTop: '20px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.2997461941113!2d121.42704267538065!3d25.159354777735228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a56948a37361%3A0x9982c24fc6b64f80!2z5YWr6YeM56aP5pyL5Zac5L6G55m76YWS5bqX!5e0!3m2!1szh-TW!2stw!4v1731047535596!5m2!1szh-TW!2stw"
        width="600"
        height="600"
        style={{ border: 0, width: '100%' }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default function HotelDetail() {
  const router = useRouter() // 使用 Next.js 的 useRouter
  const [hotelData, setHotelData] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [roomType, setRoomType] = useState('single') // 'single' or 'double'

  useEffect(() => {
    // const fetchData = async () => {
    //   // http://localhost:3001/hotel/getSingleHotel?id=${router.query.hotelId}
    //   // id: 12
    //   // data 是要傳給伺服器的資料
    //   const response = await fetch('node.js api', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   })
    //   return response.json()
    // }
    // const result = fetchData()
    // console.log('result',result);
    // setHotelData(()=>result)

    setHotelData({
      id: router.query.hotelId,
      name: '八里福朋喜來登酒店',
      address: '新北市八里區觀海大道8號',
      rating: 5,
      price: 2590,
      doubleRoomPrice: 4380,
      images: [
        '/imge/16868032835639.jpg',
        '/imge/Ee230308184900683868.jpg',
        '/imge/caption.jpg',
        '/imge/desc_9FmJef0MGo138N.jpg',
      ],
      features: [
        { icon: '/hotel-svg/fried-egg.png', label: '早餐' },
        { icon: '/hotel-svg/accepted.png', label: '信用卡' },
        { icon: '/hotel-svg/wifi.png', label: 'WIFI' },
        { icon: '/hotel-svg/swimming-pool.png', label: '游泳池' },
        { icon: '/hotel-svg/room service.png', label: '客房服務' },
        { icon: '/hotel-svg/massage.png', label: '舒壓按摩' },
        { icon: '/hotel-svg/wake-up.png', label: '起床服務' },
        { icon: '/hotel-svg/sport.png', label: '健身房' },
        { icon: '/hotel-svg/car2.png', label: '豪華接送' },
        { icon: '/hotel-svg/car.png', label: '停車場' },
        { icon: '/hotel-svg/phone.png', label: '市內電話' },
        { icon: '/hotel-svg/airplane.png', label: '機場接送' },
      ],
    })
  }, [router.query.hotelId])

  const handleDateChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  const handleRoomTypeChange = (type) => {
    setRoomType(type)
  }

  /*引入按鈕*/
  const btn = () => {
    const handleClick = () => {
      alert('Button clicked!')
    }

    return (
      <div>
        <Button onClick={handleClick}>Click Me</Button>
      </div>
    )
  }

  const handleClick = () => {
    // 使用 Next.js 的 router.push() 來導向
    router.push('/hotels/pay')
  }

  if (!hotelData) return <p>Loading...</p>

  const currentPrice =
    roomType === 'single' ? hotelData.price : hotelData.doubleRoomPrice

  return (
    <div className={styles.container}>
      <h1>{hotelData.name}</h1>
      <div>飯店 ID：{hotelData.id}</div> {/* 顯示飯店 ID */}
      <p>地點：{hotelData.address}</p>
      <p>評價：{'★'.repeat(hotelData.rating)}</p>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {hotelData.images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Hotel image ${index + 1}`}
            width={1440 / 4}
            height={300}
          />
        ))}
      </div>
      <h2>NT${currentPrice}/晚</h2>
      <h2>費用包含</h2>
      <div className={styles.featureContainer}>
        {hotelData.features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            {/* 檢測是否為 PNG 圖片 */}
            {feature.icon && feature.icon.endsWith('.png') ? (
              <img
                src={feature.icon} // 渲染圖片
                alt={feature.label}
                className={styles.featureIcon} // 添加樣式
                style={{ maxWidth: '4rem', maxHeight: '4rem' }}
              />
            ) : (
              <i
                className={`bi ${feature.icon}`} // 渲染字體圖標
                style={{
                  fontSize: 'calc(0.5rem + 2vw)', // 動態調整大小
                  maxWidth: '3rem',
                }}
              ></i>
            )}
            {/* 渲染標籤 */}
            <span className={styles.featureLabel}>{feature.label}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            marginTop: '20px',
          }}
        >
          {/* 日曆選擇 */}
          <div>
            <h3>選擇入住和退房日期</h3>
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              minDate={new Date()}
              dateFormat="yyyy年MM月dd日"
              placeholderText="選擇日期範圍"
            />
          </div>
          {/* 房型選擇按鈕 */}
          <div>
            <h3>選擇房型</h3>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <button
                onClick={() => handleRoomTypeChange('single')}
                style={{
                  padding: '10px 20px',
                  backgroundColor:
                    roomType === 'single' ? '#7DB9DE' : '#F0F0F0',
                  color: roomType === 'single' ? '#fff' : '#000',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                單人房
              </button>
              <button
                onClick={() => handleRoomTypeChange('double')}
                style={{
                  padding: '10px 20px',
                  backgroundColor:
                    roomType === 'double' ? '#7DB9DE' : '#F0F0F0',
                  color: roomType === 'double' ? '#fff' : '#000',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                雙人房
              </button>
            </div>
            <h2>選擇價格: NT${currentPrice}</h2>
            <Button
              onClick={handleClick}
              style={{
                padding: '10px 20px',
                marginTop: '10px',
                display: 'flex',
                Color: '#F0F0F0',
              }}
            >
              立即訂房
            </Button>
          </div>
        </div>
      </div>
      <div>
        <br />
        請事先撥打飯店電話訂房並告知持有此券，訂房成功再購買票券
        <br />
        入時請出示票券 本券限持中華民國身分證者使用 <br />
        飯店名稱：八里福朋喜來登酒店
        <br />
        飯店電話：(02) 2306 - 6777 <br />
        飯店地址：新北市八里區觀海大道8號
        <br />
        入住時間：16:00 以後
        <br />
        退房時間：11:00 以前
        <img
          style={{ maxWidth: '100%' }}
          src="/imge/喜來登大飯店外觀.jpeg"
          alt="喜來登大飯店外觀"
          srcset=""
        />
        <p>豪華客房雙人房｜一大床</p>
        <img
          style={{ maxWidth: '100%' }}
          src="/imge/豪華客房雙人房｜一大床.jpg"
          alt="豪華客房雙人房｜一大床"
          srcset=""
        />
        <p>豪華客房雙人房｜二小床</p>
        <img
          style={{ maxWidth: '100%' }}
          src="/imge/豪華客房雙人房｜二小床.jpg"
          alt="豪華客房雙人房｜二小床"
          srcset=""
        />
        <p
          style={{
            backgroundColor: '#FFBB77',
            marginTop: '20px',
            padding: '30px',
          }}
        >
          住宿規定 兒童與加床收費標準
          <br />
          【提醒您】加床規定依房型而異，請查看各房型的人數限制以了解詳細規定。
          <br />
          0至5歲嬰幼兒 在不加床的情況下可以免費與大人同住。
          <br />
          請直接向住宿洽詢嬰兒床。
          <br />
          6至11歲（含）兒童少數大學生超過限制時間，需另付加床費用。
          <br />
          座位加床，須加收額外費用。
          <br />
          12歲（含）以上兒童以大人標準收費。
          <br />
          必須加床，並加收額外費用。
          <br />
          其他規定
          <br />
          <p class="bi bi-exclamation-triangle">禁止攜帶寵物入住，導盲犬等。</p>
          <p class="bi bi-exclamation-triangle">
            根據政府規定，自2025年1月1日起，該飯店將不再提供一次性用品。如果您在入住期間有任何需求，請隨時聯絡前台尋求協助。
          </p>
          <p class="bi bi-exclamation-triangle">
            請注意：若單人預訂超過五間客房，可能需要遵守其他相關規定以及滿足額外的要求。
          </p>
        </p>
        <p style={{ marginTop: '20px' }}>
          Google地圖
          <br />
          地點名稱：八里福朋喜來登酒店
          <br />
          地址：新北市八里區觀海大道8號
        </p>
        {/* 加入 Google 地圖 */}
        <AddressMap />
      </div>
    </div>
  )
}
