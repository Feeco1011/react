import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Member from '@/components/member/member'
import Card from '@/components/trip/card'

const Blog = () => {
  return (
      <div>
        <Member />
      <div className={styles.card1}>
      			<b className={styles.b1}>我的論壇</b>
            <Card />
      			</div>
    		</div>
     
  )
}


export default Blog

