import React from 'react'
import styles from '@/styles/Accommodation.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function productCard({ data }) {
  return (
    <div className={styles.accommodationItem}>
      <Link href={`/hotels/${data.id}`}>
        <div>
          <img
            className={styles.accommodationImage}
            src={data.imageUrl}
            alt={data.title}
          />
          <div className={styles.accommodationContent}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>價格：NT${data.price}</p>
            <p className={styles.star}>星級：{'★'.repeat(data.rating)}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
