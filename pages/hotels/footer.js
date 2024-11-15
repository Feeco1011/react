import React from 'react'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h4>關於我們</h4>
          <ul>
            <li>使用者條款</li>
            <li>隱私權保護政策</li>
            <li>幫助中心</li>
            <li>媒體報導</li>
            <li>最新消息</li>
            <li>聯絡我們</li>
            <li>社群媒體</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>給旅人</h4>
          <ul>
            <li>三大保障</li>
            <li>合作夥伴</li>
            <li>官方部落格</li>
            <li>Points 介紹</li>
            <li>兌換商品</li>
            <li>Points 兌換</li>
            <li>企業旅遊規劃</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>合作夥伴</h4>
          <ul>
            <li>成為商城供應商</li>
            <li>供應商登入</li>
            <li>旅遊業專用預約系統 rezio</li>
            <li>同業合作</li>
            <li>聯盟行銷</li>
            <li>人才招募</li>
            <li>部落客/攝影師合作計畫</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
