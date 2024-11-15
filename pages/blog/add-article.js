import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import styles from '@/styles/addarticle.module.css'
export default function AddArticle(props) {
  return (
    <>
     <div className={styles.container}>

     <div className={styles.card}>
      <img className={styles.img}
        src="	https://cdn2.ettoday.net/images/4697/d4697600.jpg"
        alt=""
      />

<div className={styles.button}>
<div className={styles.p}>上傳圖片 </div>
</div>
<br></br>


<div className={styles.catogory}>

<div className={styles.button2}>
<div className={styles.p}>文章分類 </div>
</div>

<div className={styles.button}>
<div className={styles.p}> 人文藝術 </div>
</div>

</div>
<br></br>

<d></d>
<p>標題</p>
<div className={styles.t}>淡水魚人碼頭</div>

<br></br>


<div>文章內容</div>
<div className={styles.w}>.rgrgreerferfreferferferfrefreferffrefrerferef21321

</div>


<br></br>

<div className={styles.poo}>



<br></br>
<div className={styles.button}>
<div className={styles.p}>取消 </div>
</div>


<div className={styles.button}>
<div className={styles.p}>新增文章 </div>
</div>



</div>


<br></br>


</div>

     </div>













=======
import ReactDOM from 'react-dom'
import styles from '@/styles/addarticle.module.css'

export default function AddArticle(props) {
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // 處理表單提交
  const handleSubmit = () => {
    // 檢查是否已經填寫標題和內容
    if (!title || !content) {
      alert('請填寫標題和內容！')
      return
    }
    // 可以在這裡處理發布文章邏輯，例如將數據提交到伺服器
    console.log('發布文章:', { category, title, content })
    alert('文章已發布')
  }

  // 取消處理
  const handleCancel = () => {
    // 清空表單內容
    setCategory('')
    setTitle('')
    setContent('')
  }

  // 返回上一頁
  const handleBack = () => {
    window.history.back()
  }

  return (
    <>
      <div className={styles.container}>
        <img src="https://cdn2.ettoday.net/images/4697/d4697600.jpg" alt="" />

        <div>文章分類</div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)} // 更新文章分類
        >
          <option value="歷史古蹟">歷史古蹟</option>
          <option value="舒適休閒">舒適休閒</option>
          <option value="自然環境">自然環境</option>
          <option value="人文藝術">人文藝術</option>
        </select>

        <div>文章標題</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // 更新標題
        />

        <div>文章內容</div>
        <textarea
          placeholder="輸入文章內容"
          className={styles.textArea}
          value={content}
          onChange={(e) => setContent(e.target.value)} // 更新內容
        ></textarea>

        <br />
        <button className={styles.button1} onClick={handleSubmit}>
          發布文章
        </button>
        <button className={styles.button1} onClick={handleCancel}>
          取消
        </button>
        <button className={styles.button1} onClick={handleBack}>
          回上頁
        </button>
      </div>
>>>>>>> main
    </>
  )
}
