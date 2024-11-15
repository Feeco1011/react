import styles from '@/styles/frame.module.css'

const Frame = () => {
  return (
    <div className={styles.div}>
      <div className={styles.title}>玩遍台灣，吃遍美味，住進美好時光！</div>
      <div className={styles.pics}>
        <img className={styles.div2} alt="" src="/hotel.jpg" />
        <img className={styles.div4} alt="" src="/food.jpg" />
        <div className={styles.textParent}>
          <img className={styles.christmas} alt="" src="/trip.jpg" />
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.div5}>
          <a href="index123">
            <img className={styles.dish1Icon} alt="" src="/house.png" />
            <b className={styles.b5}>住宿</b>
          </a>
        </div>
        <div className={styles.div5}>
          <a href="index123">
            <img className={styles.dish1Icon} alt="" src="/dish.png" />
            <b className={styles.b5}>餐廳</b>
          </a>
        </div>
        <div className={styles.div5}>
          <a href="index123">
            <img className={styles.dish1Icon} alt="" src="/travel.png" />
            <b className={styles.b5}>景點</b>
          </a>
        </div>
        <div className={styles.div5}>
          <a href="index123">
            <img className={styles.dish1Icon} alt="" src="/speech.png" />
            <b className={styles.b5}>論壇</b>
          </a>
        </div>
        <div className={styles.div5}>
          <a href="index123">
            <img className={styles.dish1Icon} alt="" src="/camping-tent.png" />
            <b className={styles.b5}>露營</b>
          </a>
        </div>
        <div className={styles.div5}>
          <a href="index123">
            <img className={styles.dish1Icon} alt="" src="/shrine.png" />
            <b className={styles.b5}>宮廟參拜</b>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Frame
