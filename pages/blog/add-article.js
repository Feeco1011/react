import React, { useState, useEffect } from 'react'
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













    </>
  )
}
