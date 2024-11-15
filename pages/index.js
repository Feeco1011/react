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
      <div className={style.container}>
          <div className={style.cardContainer} id="cardContainer1" >
            <div className={style.imageSection}>
              <img
                src="/restaurantPicture/one/心潮1.jpg"
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
              <p>這是第一行文字</p>
              <p>這是第二行文字</p>
            </div>
          </div>
        

        <div className={style.cardContainer} id="cardContainer2">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer3">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer4">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer5">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer6">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer7">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer8">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer9">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer10">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer11">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer12">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer13">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer14">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer15">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer16">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/心潮1.jpg"
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
            <p>這是第一行文字</p>
            <p>這是第二行文字</p>
          </div>
        </div>
      </div>

      

      <div className={style.rectangleContainer}>
        <div className={`${style.rectangle} ${style.rectangle1}`}>
          <div className={style.rectangleText}>文本1</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle2}`}>
          <div className={style.rectangleText}>文本2</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle3}`}>
          <div className={style.rectangleText}>文本3</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle4}`}>
          <div className={style.rectangleText}>文本4</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle5}`}>
          <div className={style.rectangleText}>文本5</div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle6}`}>
          <div className={style.rectangleText}>文本6</div>
        </div>
      </div>
    </>
  )
}
