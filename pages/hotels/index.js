import React, { useState, useEffect } from 'react'
import styles from '@/styles/Accommodation.module.css'
import ProductCard from '@/components/productCard'

const Index = () => {
  const [accommodations, setAccommodations] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedRating, setSelectedRating] = useState('')

  useEffect(() => {
    // 模擬 API 呼叫
    const fetchAccommodations = async () => {
      // 使用靜態資料來模擬獲取的住宿資料
      const data = [
        {
          id: 1,
          title: 'COZZI Blu 和逸飯店',
          description: '',
          price: 2680,
          rating: 5,
          city: '桃園',
          type: '雙人房',
          imageUrl: './imge/COZZI Blu 和逸飯店.jpg',
        },
        {
          id: 2,
          title: '西湖渡假村',
          description: '',
          price: 2980,
          rating: 4,
          city: '苗栗',
          type: '雙人房',
          imageUrl: './imge/西湖渡假村.jpg',
        },
        {
          id: 3,
          title: '168 motel',
          description: '',
          price: 3689,
          rating: 4,
          city: '新竹',
          type: '單人房',
          imageUrl: './imge/168 motel.jpg',
        },
        {
          id: 4,
          title: 'i hotel 電競旅館',
          description: '',
          price: 699,
          rating: 5,
          city: '桃園',
          type: '單人房',
          imageUrl: './imge/i hotel 電競旅館.jpg',
        },
        {
          id: 5,
          title: '凱達大飯店',
          description: '',
          price: 3689,
          rating: 5,
          city: '新北',
          type: '四人房',
          imageUrl: './imge/凱達大飯店.jpg',
        },
        {
          id: 6,
          title: 'UiNN Business Hotel 悠逸商旅',
          description: '',
          price: 3689,
          rating: 3,
          city: '台北',
          type: '雙人房',
          imageUrl: './imge/UiNN Business Hotel 悠逸商旅.jpg',
        },
        {
          id: 7,
          title: '台北星美休閒飯店',
          description: '',
          price: 3689,
          rating: 3,
          city: '台北',
          type: '四人房',
          imageUrl: './imge/台北星美休閒飯店.jpg',
        },
        {
          id: 8,
          title: 'Hotel Begins基隆八斗子容軒園區',
          description: '',
          price: 3689,
          rating: 2,
          city: '基隆',
          type: '單人房',
          imageUrl: './imge/Hotel Begins基隆八斗子容軒園區.jpg',
        },
        {
          id: 9,
          title: '北都大飯店',
          description: '',
          price: 2680,
          rating: 3,
          city: '基隆',
          type: '雙人房',
          imageUrl: './imge/北都大飯店.jpg',
        },
        {
          id: 10,
          title: '大華飯店',
          description: '',
          price: 2980,
          rating: 2,
          city: '苗栗',
          type: '雙人房',
          imageUrl: './imge/大華飯店.jpg',
        },
        {
          id: 11,
          title: '將捷金鬱金香酒店',
          description: '',
          price: 3650,
          rating: 4,
          city: '新竹',
          type: '單人房',
          imageUrl: './imge/將捷金鬱金香酒店.jpg',
        },
        {
          id: 12,
          title: '福朋喜來登酒店',
          description: '',
          price: 2330,
          rating: 5,
          city: '新北',
          type: '四人房',
          imageUrl: './imge/16868032835639.jpg',
        },
        {
          id: 13,
          title: '丰居旅店薇風館',
          description: '',
          price: 499,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl: './imge/丰居旅店薇風館.jpg',
        },
        {
          id: 14,
          title: '台麗精品旅店',
          description: '',
          price: 1150,
          rating: 3,
          city: '新北',
          type: '四人房',
          imageUrl: './imge/台麗精品旅店.jpg',
        },
        {
          id: 15,
          title: '金山凱悅渡假酒店',
          description: '',
          price: 2600,
          rating: 3,
          city: '新北',
          type: '四人房',
          imageUrl: './imge/凱悅渡假酒店.jpg',
        },
        {
          id: 16,
          title: '台北趣淘漫旅',
          description: '',
          price: 1300,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl: './imge/台北趣淘漫旅.jpg',
        },
        {
          id: 17,
          title: '桔子商旅',
          description: '',
          price: 990,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl: './imge/桔子商旅.jpg',
        },
        {
          id: 18,
          title: '台灣青旅膠囊旅店',
          description: '',
          price: 750,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl: './imge/台灣青旅膠囊旅店.jpg',
        },
        {
          id: 19,
          title: '金湧泉溫泉汽車旅館',
          description: '',
          price: 1435,
          rating: 4,
          city: '新北',
          type: '單人房',
          imageUrl: './imge/金湧泉溫泉汽車旅館.jpg',
        },
        {
          id: 20,
          title: '鼎帥溫泉旅館',
          description: '',
          price: 960,
          rating: 4,
          city: '新北',
          type: '單人房',
          imageUrl: './imge/鼎帥溫泉旅館.jpg',
        },
        {
          id: 21,
          title: '北海岸白沙灣沐藍棧',
          description: '',
          price: 1880,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl: './imge/北海岸白沙灣沐藍棧.jpg',
        },
        {
          id: 22,
          title: '福格大飯店',
          description: '',
          price: 2340,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl: './imge/福格大飯店.jpg',
        },
        {
          id: 23,
          title: '成旅晶贊飯店',
          description: '',
          price: 1295,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl: './imge/成旅晶贊飯店.jpg',
        },
        {
          id: 24,
          title: '新莊客旅',
          description: '',
          price: 3689,
          rating: 3,
          city: '新北',
          type: '雙人房',
          imageUrl: './imge/新莊客旅.jpg',
        },
        {
          id: 29,
          title: '陽光水岸會館',
          description:
            '國姓鄉的陽光水岸渡假會館，與眾不同之處在於附設了泡腳池，挑高空間臨溪岸而建，泡腳時可觀賞群山，景色優美，也可以向櫃檯購買藥包一同浸泡，促進血液循環。自助式早餐美味料理值得稱讚，餐廳附設卡拉ok，有位伴奏樂師，盡興時可以打賞，會館位置佳，去惠蓀林場只20分鐘車程即達。',
          price: 3580,
          rating: 1,
          city: '南投',
          type: '單人房',
          imageUrl: './imge/陽光水岸會館.jpg',
        },
        {
          id: 30,
          title: '藍海旅館',
          description:
            '搭到美麗島站出11號出口就到六合夜市，在康是美右轉就到了、到六合夜市吃東西真的超級方便。房間真的很老舊、說乾淨好像又覺得怕怕的，霉味濕氣很重、開了冷氣有改善。被子是我完全不敢蓋的那種、枕頭也異味很重。價格是很便宜、二個晚上1300多。房間有冰箱加分。',
          price: 2000,
          rating: 4,
          city: '高雄',
          type: '單人房',
          imageUrl: './imge/藍海旅館.jpg',
        },
        {
          id: 31,
          title: '山林小屋',
          description:
            '空氣跟環境都很美好，搭帳草地+碎石排水良好，共用衛浴很乾淨，真的跟網路上說的一樣有檜木香；合掌屋空間大，有獨立衛浴及穩定的水壓超舒適；營主很熱情，願意為孩子們詳細導覽生態及植物，夜晚有機會還會有噴火龍出沒互動，孩子們很愛，大人也很放鬆，是很棒的近郊營區。',
          price: 2800,
          rating: 3,
          city: '南投',
          type: '四人房',
          imageUrl: './imge/山林小屋.jpg',
        },
        {
          id: 32,
          title: '星空旅館',
          description:
            '離羅東火車站、葛瑪蘭公車終點非常的近。服務人員非常的親切，全日都可以喝咖啡跟飲料，好貼心。房間寬闊乾淨，視野極佳，面海的房間晚上燈火點點，遠離塵囂，夜景很美。浴室非常的乾淨，使用起來很舒適，水量豐沛，沐浴用品味道清香。整體房價物超所值。離羅東夜市步行10分鐘可到。白天可以到運動公園或羅東林業文化園區漫步，感性、知性收穫滿滿。',
          price: 3200,
          rating: 4,
          city: '台中',
          type: '雙人房',
          imageUrl: 'https://girlsmood.com/wp-content/uploads/2019/10/bg1.jpg',
        },
      ]
      setAccommodations(data)
    }

    fetchAccommodations()
  }, [])

  const handleCityChange = (event) => setSelectedCity(event.target.value)
  const handleTypeChange = (event) => setSelectedType(event.target.value)
  const handleRatingChange = (event) => setSelectedRating(event.target.value)

  // 重設所有過濾條件
  const resetFilters = () => {
    setSelectedCity('')
    setSelectedType('')
    setSelectedRating('')
  }
  const filteredAccommodations = accommodations.filter((acc) => {
    return (
      (!selectedCity || acc.city === selectedCity) &&
      (!selectedType || acc.type === selectedType) &&
      (!selectedRating || acc.rating.toString() == selectedRating)
    )
  })

  // 將前面的卡片和最後四張卡片分開
  const mainCards = filteredAccommodations.slice(0, -4)
  const lastFourCards = filteredAccommodations.slice(-4)

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <select onChange={handleCityChange} value={selectedCity}>
          <option disabled value="">
            搜尋目的地
          </option>
          <option value="基隆">基隆</option>
          <option value="台北">台北</option>
          <option value="新北">新北</option>
          <option value="桃園">桃園</option>
          <option value="新竹">新竹</option>
          <option value="苗栗">苗栗</option>
        </select>

        <select onChange={handleTypeChange} value={selectedType}>
          <option disabled value="">
            房型
          </option>
          <option value="單人房">單人房</option>
          <option value="雙人房">雙人房</option>
          <option value="四人房">四人房</option>
        </select>

        <select onChange={handleRatingChange} value={selectedRating}>
          <option disabled value="">
            星級
          </option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★</option>
          <option value="3">★★★</option>
          <option value="2">★★</option>
          <option value="1">★</option>
        </select>
        {/* 取消選擇按鈕 */}
        <button onClick={resetFilters} style={{ color: 'red' }}>
          <img src="./hotel-svg/exchange.png" width={25}></img>
        </button>
      </div>

      <div className={styles.accommodationList}>
        {mainCards.map((acc) => (
          <ProductCard
            key={acc.id}
            data={acc}
            className={`accommodationItem size-${acc.id}`}
          />
        ))}

        {/* 用新容器包裹最後四張卡片 */}
        <div className={styles.lastRow}>
          {lastFourCards.map((acc) => (
            <ProductCard
              key={acc.id}
              data={acc}
              className={`accommodationItem size-${acc.id}`}
            />
          ))}
        </div>
      </div>
      <div className={styles.photo}>
        <img src="./imge/101.jpg" alt="" />
        <img src="./imge/20230630-045412_U16224_M866770_51b0.jpg" alt="" />
        <img src="./imge/1024x768_image1637716343843799600.jpg" alt="" />
        <img src="./imge/en_fac_list_19a29_jzt9fk8rw6.jpg" alt="" />
        <img src="./imge/NTC0000085_92382.jpg" alt="" />
        <img src="./imge/271.jpg" alt="" />
      </div>
    </div>
  )
}

export default Index
