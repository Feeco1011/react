import React from 'react'
import styles from '@/styles/pay.module.css'
import { useRouter } from 'next/router'
import Button from '@/components/button'

const Pay = () => {
  const router = useRouter() // 初始化 useRouter

  const handleComplete = () => {
    router.push('http://localhost:3005/api/ecpay-test-only?')
  }
  return (
    <div className={styles.container}>
      {/* 訂購人資料 */}
      <div className={styles.section}>
        <h2>訂購人資料</h2>
        <form>
          <label>
            姓氏:
            <input
              type="text"
              className={styles.focusInput}
              name="lastName"
              required
            />
          </label>
          <label>
            名字:
            <input
              type="text"
              className={styles.focusInput}
              name="firstName"
              required
            />
          </label>
          <label>
            國家/地區:
            <select
              name="country"
              className={styles.focusSelect}
              defaultValue="台灣"
            >
              <option value="台灣">台灣</option>
              {/* 可加入其他國家選項 */}
            </select>
          </label>
          <label>
            聯絡電話:
            <input
              type="tel"
              name="phone"
              placeholder="+886"
              required
              maxLength={10}
              className={styles.focusInput}
            />
          </label>
          <label>
            電子信箱:
            <input
              type="email"
              name="email"
              required
              className={styles.focusInput}
            />
          </label>
          {/* <button type="submit">繼續</button> */}
        </form>
      </div>

      {/* 付款方式選擇 */}
      <div className={styles.section}>
        <h2>請選擇付款方式</h2>
        <form>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="greenCard"
              required
            />
            綠界
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              required
            />
            信用卡/簽帳金融卡
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="linePay" />
            LINE PAY
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="streetPay" />
            街口支付
          </label>
        </form>
      </div>

      {/* 電子發票、收據 */}
      <div className={styles.section}>
        <h2>電子發票</h2>
        <form>
          <label>
            手機條碼:
            <input
              type="text"
              className={styles.focusInput}
              name="mobileBarcode"
              placeholder="/"
              required
            />
          </label>
        </form>
      </div>

      {/* 訂單摘要 */}
      <div className={styles.summary}>
        <h2>訂單摘要</h2>
        <p>支付金額:NT$4380</p>
        <p>訂單總金額:NT$4380</p>
        <Button className={styles.button} onClick={handleComplete}>
          繼續
        </Button>
      </div>
      <title>付款頁面</title>
    </div>
  )
}

export default Pay
