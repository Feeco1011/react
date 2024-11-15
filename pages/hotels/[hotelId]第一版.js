import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

export default function HotelDetail() {
  const router = useRouter()
  const [hotelData, setHotelData] = useState(null)

  useEffect(() => {
    // 假設這裡之後可以串接後端 API 抓取飯店詳細資料
    setHotelData({
      id: router.query.hotelId,
      name: 'Intercontinental Osaka',
      location: '台北市 - 關渡大飯店',
      rating: 5,
      price: 2590,
      images: [
        'https://image-store.asiayo.com/bnb/42570/750xauto/desc_sEf0umTIGPvYc8.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3lKfl5tULpjM8x6nNa7QeV5TYOmZtcKzSQ&s',
        'https://media-cdn.tripadvisor.com/media/photo-s/27/18/13/a5/caption.jpg',
        'https://image-store.asiayo.com/bnb/30241/750xauto/desc_9FmJef0MGo138N.jpg',
      ],
      features: ['WIFI', '游泳池', '客房服務', '酒吧', '停車場', '市內電話'],
    })
  }, [router.query.hotelId])

  if (!hotelData) return <p>Loading...</p>

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '20px' }}>
      <h1>{hotelData.name}</h1>
      <p>地點：{hotelData.location}</p>
      <p>評價：{'★'.repeat(hotelData.rating)}</p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {hotelData.images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Hotel image ${index + 1}`}
            width={400}
            height={300}
          />
        ))}
      </div>
      <h2>NT${hotelData.price} / 晚</h2>

      <h3>費用包含</h3>
      <ul>
        {hotelData.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button style={{ padding: '10px 20px', marginTop: '20px' }}>
        立即訂購
      </button>
    </div>
  )
}
