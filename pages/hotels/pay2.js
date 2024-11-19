import React from 'react'
import styles from '@/styles/pay2.module.css'
import { useRouter } from 'next/router' // 引入 useRouter
import Button from '@/components/button'

const Pay2 = () => {
  const router = useRouter() // 初始化 useRouter

  const handleComplete = () => {
    router.push('/hotels') // 點擊完成後跳轉到 /hotels
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>付款成功</h1>
      <p className={styles.subtitle}>1個工作日內確認</p>

      <div className={styles.order}>
        <div className={styles.ordersummary}>
          <h2 className={styles.h2}>訂單明細</h2>
          <div className={styles.details}>
            <p>
              <strong>訂購人資料</strong>
            </p>
            <p>
              <strong>訂單編號:</strong>A1245378200
            </p>
            <p>
              <strong>姓氏:</strong>王
            </p>
            <p>
              <strong>名字:</strong>大明
            </p>
            <p>
              <strong>國家/地區:</strong> 台灣
            </p>
            <p>
              <strong>聯絡電話:</strong> +886 0975378406
            </p>
            <p>
              <strong>電子信箱:</strong> wong1@gmail.com
            </p>
          </div>
          <Button className={styles.button} onClick={handleComplete}>
            完成
          </Button>{' '}
          {/* 當按鈕被點擊時，呼叫 handleComplete */}
        </div>
      </div>
    </div>
  )
}

export default Pay2
