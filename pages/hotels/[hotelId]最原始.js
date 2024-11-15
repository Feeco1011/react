import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function HotelId() {
  const router = useRouter()
  const [hotelId, setHotelId] = useState('')
  useEffect(() => {
    setHotelId(() => router.query.hotelId)
  }, [router])
  return (
    <>
      <div>{hotelId}</div>
      <Image
        src={
          'https://i.ytimg.com/vi/CKsak2vWp-c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDmMY7dtktZC9rnPHaS6v5AgyXWXw'
        }
        width={500}
        height={500}
      />
    </>
  )
}
