import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import ForumCard from '@/components/forum/forumCard'
import styles from '@/styles/bolg.module.css'

export default function Index(props) {
    const [data, setData] = useState([{
        id:1,
        imgUrl:'https://newtaipei.travel/content/images/attractions/25297/1024x768_attractions-image-wytsty13ckmyyxuf9upjvq.jpg',
        user:'張小姐',
        date:'2024年1月1日',
        city:'新北 | 九份',
        desc:'很貼心連走路都幫我護著對向車🙂 看山看海，而且大哥很會拍照📷拍的超好看，整天都很滿意。這是個非常棒的行程'
      },{
        id:2,
        imgUrl:'https://www.travel.taipei/content/images/attractions/65071/1024x768_attractions-image-jbrgnbjyqku-hbrfiedjqg.jpg',
        user:'王小姐',
        date:'2024年10月1日',
        city:'台北 | 平溪',
        desc:'123456789'
      },{
        id:3,
        imgUrl:'https://newtaipei.travel/content/images/attractions/25297/1024x768_attractions-image-wytsty13ckmyyxuf9upjvq.jpg',
        user:'陳小姐',
        date:'2024年10月10日',
        city:'新北 | 金山',
        desc:'123456789'
      },{
        id:4,
        imgUrl:'https://newtaipei.travel/content/images/attractions/25297/1024x768_attractions-image-wytsty13ckmyyxuf9upjvq.jpg',
        user:'陳小姐',
        date:'2024年10月10日',
        city:'新北 | 金山',
        desc:'123456789'
      }
    
    
    ])
    
    

  return (
    <>
      



      <br></br>
<div className={styles.word}>
<div className={styles.title}>熱門</div>
</div>
<br></br>


      <div style={{display:'flex',gap:"20px"}}>

    {
      data.map((item)=>{
        return(
            <Link href={`/blog/${item.id}`} key={item.id} >
          <ForumCard key={item.id} data={item} />
          </Link>
        )
      })
    }
</div>


    
<br></br>
<div className={styles.word}>
  <div className={styles.title}>景點</div>
</div>
    
<br></br>
<div style={{display:'flex',gap:"20px"}}>

{
  data.map((item)=>{
    return(
        <Link href={`/blog/${item.id}`} key={item.id} >
      <ForumCard key={item.id} data={item} />
      </Link>
    )
  })
}
</div>


    
<br></br>
<div className={styles.word}> 
<div className={styles.title1}>歷史古蹟 | 舒適休閒 | 自然環境 | 人文藝術</div>
</div>
    
<br></br>
<select>
        <option>歷史古蹟</option>
        <option>舒適休閒</option>
        <option>自然環境</option>
        <option>人文藝術</option>
</select>

<div style={{display:'flex',gap:"20px"}}>

{
  data.map((item)=>{
    return(
        <Link href={`/blog/${item.id}`} key={item.id} >
      <ForumCard key={item.id} data={item} />
      </Link>
    )
  })
}
</div>

    
<br></br>
<div className={styles.word}>
<div className={styles.title1}>城市</div>
</div>
    
<br></br>
<select>
        <option>台北</option>
        <option>新北</option>
        <option>基隆</option>
        <option>桃園</option>
        <option>新竹</option>
        <option>台中</option>
        <option>彰化</option>
        <option>雲林</option>
        <option>嘉義</option>
        <option>南投</option>
        <option>台南</option>
        <option>高雄</option>
        <option>宜蘭</option>
        <option>台東</option>
        <option>金門</option>
        <option>澎湖</option>
        <option>蘭嶼</option>
        <option>屏東</option>
        <option>墾丁</option>
        <option>花蓮</option>
        <option>馬祖</option>
        <option>綠島</option>
        <option>小琉球</option>
        
</select>

<div style={{display:'flex',gap:"20px"}}>
{
  data.map((item)=>{
    return(
        <Link href={`/blog/${item.id}`} key={item.id} >
      <ForumCard key={item.id} data={item} />
      </Link>
    )
  })
}
</div>












      {/* ID 1</Link>
      <Link href="/blog/2" >ID 2</Link>
      <Link href="/blog/3" >ID 3</Link> */}
    </>
  )
}
