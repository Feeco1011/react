import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '@/styles/home.module.css'
import styles from '@/styles/frame.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
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
            <a href="./hotels">
              <img className={styles.dish1Icon} alt="" src="/house.png" />
              <b className={styles.b5}>住宿</b>
            </a>
          </div>
          <div className={styles.div5}>
            <a href="./restaurant">
              <img className={styles.dish1Icon} alt="" src="/dish.png" />
              <b className={styles.b5}>餐廳</b>
            </a>
          </div>
          <div className={styles.div5}>
            <a href="./blog">
              <img className={styles.dish1Icon} alt="" src="/travel.png" />
              <b className={styles.b5}>景點</b>
            </a>
          </div>
          <div className={styles.div5}>
            <a href="./blog">
              <img className={styles.dish1Icon} alt="" src="/speech.png" />
              <b className={styles.b5}>論壇</b>
            </a>
          </div>
          <div className={styles.div5}>
            <a href="index123">
              <img
                className={styles.dish1Icon}
                alt=""
                src="/camping-tent.png"
              />
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
      <div className={style.container}>
        <div className={style.cardContainer} id="cardContainer1">
          <div className={style.imageSection}>
            <img
              src="/imge/taipei101.png"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台北</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>台北101</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer2">
          <div className={style.imageSection}>
            <img
              src="https://i.ytimg.com/vi/7_YrfvTKA_4/maxresdefault.jpg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台北</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>自由廣場</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer3">
          <div className={style.imageSection}>
            <img src="/imge/正濱漁港.jpg" className={style.photo} />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台北</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>正濱漁港</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer4">
          <div className={style.imageSection}>
            <img
              src="/imge/北投圖書館.jpg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台北</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>北投圖書館</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer5">
          <div className={style.imageSection}>
            <img
              src="/imge/大坑紙箱.jfif"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台中</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>大坑紙箱</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer6">
          <div className={style.imageSection}>
            <img
              src="/imge/新社古堡.jpeg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台中</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>新社古堡</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer7">
          <div className={style.imageSection}>
            <img
              src="/imge/月光紛飛.jpeg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台中</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>禹禹藝術工作室作品〈月光紛飛〉</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer8">
          <div className={style.imageSection}>
            <img
              src="/imge/國家歌劇院.jpg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>文字標題</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>台中國家歌劇院</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer9">
          <div className={style.imageSection}>
            <img src="/imge/赤崁樓.jpg" alt="Photo" className={style.photo} />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台南</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>赤崁樓</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer10">
          <div className={style.imageSection}>
            <img
              src="/imge/井採腳鹽田.jpg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台南</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>井採腳鹽田</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer11">
          <div className={style.imageSection}>
            <img src="/imge/安平古堡.jpg" alt="Photo" className={style.photo} />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台南</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>安平古堡</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer12">
          <div className={style.imageSection}>
            <img
              src="/imge/174翼騎士驛站.jpg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>台南</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>174翼騎士驛站</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer13">
          <div className={style.imageSection}>
            <img
              src="/imge/高雄國賓大飯店.jpg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>高雄</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>高雄國賓大飯店</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer14">
          <div className={style.imageSection}>
            <img
              src="/imge/高雄展覽館.jpg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>高雄</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>高雄展覽館</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer15">
          <div className={style.imageSection}>
            <img
              src="/imge/高雄流行音樂中心.jpg"
              alt="Photo"
              className={style.photo}
            />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>文字標題</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>高雄流行音樂中心</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer16">
          <div className={style.imageSection}>
            <img src="/imge/光之穹頂.jpg" alt="Photo" className={style.photo} />
            <div className={style.overlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.icon}
              />
              <span className={style.text}>高雄</span>
            </div>
            <div className={style.rightIconOverlay}>
              <img
                src="/logoTest/logoTest.ico"
                alt="icon"
                className={style.rightIcon}
              />
            </div>
          </div>
          <div className={style.textSection}>
            <p>美麗島捷運站&光之穹頂</p>
          </div>
        </div>
      </div>

      <div className={style.rectangleContainer}>
        <div className={`${style.rectangle} ${style.rectangle1}`}>
          <div className={style.rectangleText}>基隆</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle2}`}>
          <div className={style.rectangleText}>高雄</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle3}`}>
          <div className={style.rectangleText}>花蓮</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle4}`}>
          <div className={style.rectangleText}>九份</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle5}`}>
          <div className={style.rectangleText}>屏東</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle6}`}>
          <div className={style.rectangleText}>台東</div>
        </div>
      </div>
    </>
  )
}
