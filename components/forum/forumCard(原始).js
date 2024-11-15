 import React, { useState, useEffect } from 'react'
import styles from '@/styles/new.module.css'

export default function ForumCard(props) {
  const { v } = props
  // console.log(props.data)
  console.log('pop', v)
  return (
    <div className={styles.hed}>
      <div className={styles.card}>
        <img
          className={styles.img}
          src="https://media.istockphoto.com/id/1502547874/zh/%E5%90%91%E9%87%8F/travel-to-world-on-banner-background-landscape-template-tourism-cards-road-trip-vacation-as-in.jpg?s=1024x1024&w=is&k=20&c=WJSv71le86s6btsNKlRoMpQP98r1T68Ux7P7B8zo1lo="
          alt=""
        />

        <div className={styles.date}>
          <div className={styles.name}>{props.user} </div>
          <div className={styles.day}>{props.pt_created}</div>
        </div>

        <div className={styles.city}>{props.pt_city}</div>

        <div className={styles.p}>{props.pt_sf}</div>
      </div>
    </div>
  )
}
