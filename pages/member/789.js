import React from 'react'
import styles from '@/styles/header.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { HiMapPin } from "react-icons/hi2";
// import React, { useState, useEffect } from 'react'
import Link from 'next/link'



export default function Navbar() {
  return (
    // const Index = () => {
    //   const [accommodations, setAccommodations] = useState([])
    //   const [selectedCity, setSelectedCity] = useState('')
    //   const [selectedType, setSelectedType] = useState('')
    //   const [selectedRating, setSelectedRating] = useState('')
 

     
 
 <div className={styles.header}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
          
        
         <a href="index.js" ><img src="/taiwango.png" alt="" className="logo" width='100%' height='90px'/>  
         </a>
        
          </div>
          <div className={styles.frameParent}>
            <div className={styles.component22Wrapper}>
              <div className={styles.component22}>
                <div className={styles.destination}>
                  <div className={styles.iconpin}>
                  {/* <HiMapPin /> */}
                
                  </div>
                  {/* <div className={styles.paragraphTw}>新北市</div> */}
                  <select onChange={''} value={''}>
          <option value="新北市">
          新北市
          </option>
          <option value="台北市">台北市</option>
          <option value="宜蘭縣">宜蘭縣</option>
          <option value="花蓮縣">花蓮縣</option>
        </select>
                </div>
              </div>
            </div>
            <div className={styles.component21Wrapper}>
              <div className={styles.component21}>
                {/* <div className={styles.div17}>景點</div> */}
                <select onChange={''} value={''}>
          <option value="住宿">
          住宿
          </option>
          <option value="餐廳">餐廳</option>
          <option value="景點">景點</option>
          <option value="論壇">論壇</option>
          <option value="露營">露營</option>
          <option value="宮廟參拜">宮廟參拜</option>
        </select>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconGroup}>
          <FaSearch className="icon" size="30px" />

          <div className={styles.iconGroup1}>
         <div className={styles['button']}>
           <FaUser
                className="icon"
                style={{
                  marginBottom: '3px',
                  color:'FC9F4D',
                }}
                size="30px"
              />
              
          
            </div>
          </div>
        </div>
        </div>
           

              ) }
              