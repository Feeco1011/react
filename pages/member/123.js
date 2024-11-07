import styles from '@/styles/profile.module.css'
import { FaUser, FaCamera } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.card}>
        <div className={styles.image}>
          <img className={styles.imageChild} alt="" src="Ellipse 1.png" />
          <b className={styles.b}>王小明</b>
        </div>

        <FaCamera
          className="icon"
          style={{
            position: 'absolute',
            top: '110px',
            left: '147px',
            height: '50px',
            overflow: 'hidden',
          }}
          size="30px"
          //  onClick={}
        />

        <div className={styles.info}>
          <div className={styles.div}>修改個人資訊</div>
          <div className={styles.div1}>變更密碼</div>
          <div className={styles.div1}>我的訂房</div>
          <div className={styles.div1}>我的訂位</div>
          <div className={styles.div1}>我的論壇</div>
          <div className={styles.div1}>我的收藏</div>
        </div>
      </div>
      <div className={styles.card1}>
        <b className={styles.b1}>修改個人資訊</b>
        
        <div className={styles.info1}>
          <div className={styles.inputGroup}>
            <label className={styles.div6}>姓名</label>
            <div className={styles.input}>
           
              <div className={styles.div7}>姓名</div>
            </div>
          </div>
          <div className={styles.sexGroup}>
            <div className={styles.div8}>
              <p className={styles.p}>性別</p>
            </div>
            <div className={styles.sex}>
              <div className={styles.sexChild} />
              <div className={styles.div9}>
                <p className={styles.p}>男性</p>
              </div>
              <div className={styles.sexChild} />
              <div className={styles.div9}>
                <p className={styles.p}>女姓</p>
              </div>
              <div className={styles.sexChild} />
              <div className={styles.div7}>其他</div>
            </div>
          </div>
          <div className={styles.inputGroup1}>
            <div className={styles.div6}>電話號碼</div>
            <div className={styles.input}>
              <div className={styles.div7}>電話號碼</div>
            </div>
          </div>
          <div className={styles.inputGroup2}>
            <div className={styles.div6}>電子信箱</div>
            <div className={styles.input}>
              <div className={styles.div7}>電子信箱</div>
            </div>
          </div>
        </div>
        <div className={styles.div16}>
          <div className={styles.savePc}>
            <div className={styles.savePcChild} />
            <b className={styles.b2}>儲存</b>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.logo1}>LOGO</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.component22Wrapper}>
              <div className={styles.component22}>
                <div className={styles.destination}>
                  <div className={styles.iconpin}>
                    <img
                      className={styles.iconpin1}
                      alt=""
                      src="Icon/Pin.svg"
                    />
                  </div>
                  <div className={styles.paragraphTw}>新北市</div>
                </div>
              </div>
            </div>
            <div className={styles.component21Wrapper}>
              <div className={styles.component21}>
                <div className={styles.div17}>景點</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.iconGroup}>
          {/* <img className={styles.magnifyingGlass1Icon} alt="" src="magnifying-glass 1.png" /> */}
          <FaSearch />
          <div className={styles.iconGroup1}>
            <div className={styles['button']}>
              <FaUser />
              {/* <img className={styles.personfillIcon} alt="" src="PersonFill.svg" />
												<FaUser /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
