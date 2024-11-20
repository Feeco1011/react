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
      <h1 className={styles.title}>我的訂單</h1>

      <div className={styles.order}>
        <div className={styles.ordersummary}>
          <h2 className={styles.h2}>訂單內容</h2>
          <div className={styles.details}>
            <p>
              <strong>訂單編號:</strong>A1245378200
            </p>
            <p>
              <strong>姓氏:</strong> 王
            </p>
            <p>
              <strong>名字:</strong> 大明
            </p>
            <p>
              <strong>飯店:</strong>福朋喜來登酒店
            </p>
            <p>
              <strong>房型:</strong>雙人房
            </p>
            <p>
              <strong>價格:</strong>4380
            </p>
            <p>
              <strong>飯店電話：</strong>(02) 2306 - 6777
            </p>
            <p>
              <img
                src="/imge/16868032835639.jpg"
                width="300px"
                alt=""
                srcset=""
              />
              <img
                src="/imge/desc_9FmJef0MGo138N.jpg"
                width="300px"
                alt=""
                srcset=""
              />
            </p>
          </div>
          <Button className={styles.button} onClick={handleComplete}>
            完成
          </Button>{' '}
          {/* 當按鈕被點擊時，呼叫 handleComplete */}
        </div>
      </div>
      <title>我的訂單</title>
    </div>
  )
}

export default Pay2
