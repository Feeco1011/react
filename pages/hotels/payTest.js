import React from 'react'
import styles from '@/styles/pay.module.css'

const Pay = () => {
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
              className={styles.focusInput}
              name="phone"
              placeholder="+886"
              required
            />
          </label>
          <label>
            電子信箱:
            <input
              type="email"
              className={styles.focusInput}
              name="email"
              required
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
        <p>支付金額:$699</p>
        <p>訂單總金額:$699</p>
        <p>訂單完成後回饋:$22</p>
        <button className={styles.button}>確認付款</button>
      </div>
    </div>
  )
}

export default Pay
