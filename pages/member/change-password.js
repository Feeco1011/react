import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'



const Password = () => {
 // input-password
 const [pass, setPass] = useState('')
 // checkbox呈現密碼用
 const [show, setShow] = useState(false)
 
 const [oldPass, setOldPass] = useState('');
const [newPass, setNewPass] = useState('');
const [confirmPass, setConfirmPass] = useState('');
const [showOldPass, setShowOldPass] = useState(false);
const [showNewPass, setShowNewPass] = useState(false);
const [showConfirmPass, setShowConfirmPass] = useState(false);


  return (
    <div className={styles.profile}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img className={styles.imageChild} alt="" src="Ellipse 1.png" />
          <b className={styles.b}>王小明</b>
        </div>

        <FaCamera
          className="icon"
          style={{
            position: 'absolute',
            top: '110px',
            left: '147px',
            height: '50px',
            overflow: 'hidden',
          }}
          size="30px"
          // onClick={}
        />

        <div className={styles.info}>
        <Link href="/test/user/edit-profile">修改個人資訊</Link>
        <Link href="/test/user/change-password">變更密碼</Link>
        <Link href="/test/user/hotel-booking">我的訂房</Link>
        <Link href="/test/user/restaurant-reservation">我的訂位</Link>
        <Link href="/test/user/my-blog">我的論壇</Link>
        <Link href="/test/user/my-fav">我的收藏</Link>

          {/* <div className={styles.div}>修改個人資訊</div> */}
          {/* <div className={styles.div1}>變更密碼</div> */}
         </div>
      </div>
      <div className={styles.card1}>
        <b className={styles.b1}>變更密碼</b>
        <div className={styles.passwordinfo1}>
          <div className={styles.inputGroup}>
            <label className={styles.div100}>舊密碼</label>
            <input
               type={showOldPass ? 'text' : 'password'}
               value={oldPass}
              className={styles.input}
              placeholder="請輸入舊密碼"
              onChange={(e) => {
                setOldPass(e.target.value)
              }}
            />
         </div>
         <button
          className={styles.showpass}
        onClick={() => {
          setShowOldPass(!showOldPass)
        }}
      >
        {showOldPass ? '顯示': '不顯示'}
      </button>
  

          <div className={styles.inputGroup1}>
            <label className={styles.div100}>新密碼</label>
           <input
               type={showNewPass ? 'text' : 'password'}
               value={newPass}
              className={styles.input}
              placeholder="請輸入新密碼"
              onChange={(e) => {
                setNewPass(e.target.value)
              }} />
         </div>
          <button
          className={styles.showpass}
        onClick={() => {
          setShowNewPass(!showNewPass)
        }}
      >
        {showNewPass ? '顯示': '不顯示'}
      </button>
          {/* <input
        type="checkbox"
        // checked={show}
        onChange={(e) => {
          setShow(e.target.checked)
        }}
      />{' '}
      呈現密碼
          */}


          <div className={styles.inputGroup2}>
            <label className={styles.div100}>確認新密碼</label>
            <input
               type={showConfirmPass ? 'text' : 'password'}
               value={confirmPass}
              className={styles.input}
              placeholder="再次確認新密碼"
              onChange={(e) => {
                setConfirmPass(e.target.value)
              }}
            />
          </div>
          <button
          className={styles.showpass}
        onClick={() => {
          setShowConfirmPass(!showConfirmPass)
        }}
      >
        {showConfirmPass ? '顯示': '不顯示'}
      </button>
        </div>
        
        <div className={styles.div16}>
          <div className={styles.savePc2}>
            {/* <div className={styles.savePcChild} />
            <div className={styles.b2}>儲存</div> */}
            <button type="button" className={styles.savePcChild}>儲存</button>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.logo1}>LOGO</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.component22Wrapper}>
              <div className={styles.component22}>
                <div className={styles.destination}>
                  <div className={styles.iconpin}>
                    <img
                      className={styles.iconpin1}
                      alt=""
                      src="Icon/Pin.svg"
                    />
                  </div>
                  <div className={styles.paragraphTw}>新北市</div>
                </div>
              </div>
            </div>
            <div className={styles.component21Wrapper}>
              <div className={styles.component21}>
                <div className={styles.div17}>景點</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconGroup}>
          <FaSearch
          className="icon" size="30px" /> 

          <div className={styles.iconGroup1}>
            <div className={styles['button']}>
             <FaUser
          className="icon" style={{
            marginBottom:'5px'
          }}size="30px" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Password;

