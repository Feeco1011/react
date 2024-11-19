import React from 'react'
import style from '@/styles/restaurantPage.module.css'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <title>餐廳列表頁面</title>
      
      <div className={style.container}>
      <Link href="/restaurant/restaurantditail">
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
            
            <p>心潮飯店</p>
            
      
            </div>
          </div>
          </Link>

        <div className={style.cardContainer} id="cardContainer2">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/Basement Cafe 樓下咖啡1.jpg"
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
            <p>Basement Cafe 樓下咖啡</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer3">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/BeGood1.jpg"
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
            <p>
            BeGood Bakery | Cafe | Restaurant</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer4">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/BurgerRay4.jpg"
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
            <p>burger ray個性漢堡</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer5">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/GinGin Coffee Company1.jpg"
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
            <p>GinGin Coffee Company</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer6">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/OUVERT SEOUL2.jpg"
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
            <p>OUVERT SEOUL</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer7">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/PAZZO Brun不然安和店2.jpg"
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
            <p>PAZZO Brun不然安和店</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer8">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/pico4.jpg"
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
            <p>
            PICO PICO</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer9">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/Smith and wollensky7.jpg"
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
            <p>Smith and wollensky</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer10">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/千雲5.jpg"
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
            <p>千雲拉麵</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer11">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/小小樹食1.jpg"
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
            <p>小小樹食</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer12">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/甲蟲秘境親子餐廳3.jpg"
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
            <p>甲蟲秘境親子餐廳</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer13">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/羽樂歐陸創意料理3.jpg"
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
            <p>羽樂歐陸創意料理</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer14">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/芋艿川豆花店3.jpg"
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
            <p>芋艿川豆花店</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer15">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/花彘醺2.jpg"
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
            <p>花彘醺</p>
            
          </div>
        </div>

        <div className={style.cardContainer} id="cardContainer16">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/疍宅 Eg ghost1.jpg"
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
            <p>疍宅 Eg ghost</p>
            
          </div>
        </div>
      </div>

      <div className={style.largeContainer}>
        <div className={style.cardContainerLarge} id="cardContainerLarge1">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/教父牛排1.jpg"
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
            <p>教父牛排</p>
            
          </div>
        </div>

        <div className={style.cardContainerLarge} id="cardContainerLarge2">
          <div className={style.imageSection}>
            <img
              src="/restaurantPicture/one/荷蘭小鬆餅 Poffertjes Cafe5.jpg"
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
            <p>荷蘭小鬆餅 Poffertjes Cafe</p>
            
          </div>
        </div>
      </div>

      <div className={style.rectangleContainer}>
        <div className={`${style.rectangle} ${style.rectangle1}`}>
          <div className={style.rectangleText}></div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle2}`}>
          <div className={style.rectangleText}></div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle3}`}>
          <div className={style.rectangleText}></div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle4}`}>
          <div className={style.rectangleText}></div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle5}`}>
          <div className={style.rectangleText}></div>
        </div>
        <div className={`${style.rectangle} ${style.rectangle6}`}>
          <div className={style.rectangleText}></div>
        </div>
      </div>
    </>
  )
}
