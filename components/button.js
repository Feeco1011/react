import React from 'react'
import styles from '@/styles/Button.module.css' // 引入 CSS 模組

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export default Button
