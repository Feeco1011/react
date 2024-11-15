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
          imageUrl:
            'https://today-obs.line-scdn.net/0hQr7cyJpODl0KGhkKSf1xCi5MDTI5dh1ebixfT11_NgMnLUkJN3kVaC5NV290LE4CNnRCMykaVmhiKx0MZHpFay4/w644',
        },
        {
          id: 2,
          title: '西湖渡假村',
          description: '',
          price: 2980,
          rating: 4,
          city: '苗栗',
          type: '雙人房',
          imageUrl:
            'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_866/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lrpmvjjqpvvj11rwas5r/%E8%8B%97%E6%A0%97%E8%A5%BF%E6%B9%96%E6%B8%A1%E5%81%87%E6%9D%91%EF%BC%9A%E4%BD%8F%E5%AE%BF%E5%88%B8%EF%BC%88%E5%8A%A0%E8%B4%88%E8%8A%B1%E5%9C%92%E9%9C%B2%E5%A4%A9%E9%85%92%E5%90%A7100%E5%85%83%E5%AE%B5%E5%A4%9C%E6%8A%B5%E7%94%A8%E5%88%B82%E5%BC%B5%EF%BC%89.jpg',
        },
        {
          id: 3,
          title: '168 motel',
          description: '',
          price: 3689,
          rating: 4,
          city: '新竹',
          type: '單人房',
          imageUrl:
            'https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_122460/20210820044401_CRylD/jpg',
        },
        {
          id: 4,
          title: 'i hotel 電競旅館',
          description: '',
          price: 699,
          rating: 5,
          city: '桃園',
          type: '單人房',
          imageUrl:
            'https://admin.hotelnews.tw/FileUploads/hotel-1056/2022-06-21/220621112654983-XXL.JPG',
        },
        {
          id: 5,
          title: '凱達大飯店',
          description: '',
          price: 3689,
          rating: 5,
          city: '新北',
          type: '四人房',
          imageUrl:
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/156917661.jpg?k=707be3ff0503f2fe5afe384962022743fcd83776b3ce4b0c31fe571b1f4569e1&o=&hp=1',
        },
        {
          id: 6,
          title: 'UiNN Business Hotel 悠逸商旅',
          description: '',
          price: 3689,
          rating: 3,
          city: '台北',
          type: '雙人房',
          imageUrl:
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/77290959.jpg?k=85a0d073a20b574d493d880018c1ff202c23cbdfff4b0e1f51c7675f1c2b5ec5&o=&hp=1',
        },
        {
          id: 7,
          title: '台北星美休閒飯店',
          description: '',
          price: 3689,
          rating: 3,
          city: '台北',
          type: '四人房',
          imageUrl:
            'https://www.youke.tw/uploads/20230816/7829f5b4b76232ed4866ffc639753993.jpg',
        },
        {
          id: 8,
          title: '水之季主題旅館',
          description: '',
          price: 3689,
          rating: 2,
          city: '基隆',
          type: '單人房',
          imageUrl:
            'https://cdn.fontrip.com/fontour/file/show/5DyWA/600x400.jpg',
        },
        {
          id: 9,
          title: '北都大飯店',
          description: '',
          price: 2680,
          rating: 3,
          city: '基隆',
          type: '雙人房',
          imageUrl:
            'https://1.bp.blogspot.com/-XDNfMj4fqyo/WAhvCUIG0NI/AAAAAAAASd8/Evw9SrENgVsdTJovjk8ULWKWCcgxfKpMwCPcB/s1600/K.LOVE%2BIMAGE%2B20160703-1.jpg',
        },
        {
          id: 10,
          title: '大華飯店',
          description: '',
          price: 2980,
          rating: 2,
          city: '苗栗',
          type: '雙人房',
          imageUrl:
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/251228560.jpg?k=c6a14009ddfb69aaf0117faedc8fc471df4069574c2f153b56ff69f937130f6c&o=&hp=1',
        },
        {
          id: 11,
          title: '將捷金鬱金香酒店',
          description: '',
          price: 3689,
          rating: 4,
          city: '新竹',
          type: '單人房',
          imageUrl:
            'https://foodtracer.health.ntpc.gov.tw/WebUPD/foodtracer/FoodCompany/%E5%BA%97%E5%AE%B6%E5%9C%96_22021711534797867.jpg',
        },
        {
          id: 12,
          title: '八里福朋喜來登酒店',
          description: '',
          price: 699,
          rating: 4,
          city: '新北',
          type: '四人房',
          imageUrl:
            'https://images.abic.com.tw/photoDB/post_link/1693624882.jpg',
        },
        {
          id: 13,
          title: '丰居旅店薇風館',
          description: '',
          price: 3689,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0f/fd/9c/caption.jpg?w=700&h=-1&s=1',
        },
        {
          id: 14,
          title: '台麗精品旅店',
          description: '',
          price: 3689,
          rating: 3,
          city: '新北',
          type: '四人房',
          imageUrl:
            'https://pix2.agoda.net/hotelimages/41609858/0/74e6ff51196253f900a0993f6549c20e.png?s=450x',
        },
        {
          id: 15,
          title: '皇品時尚旅店 Golden Hotel',
          description: '',
          price: 3689,
          rating: 3,
          city: '新北',
          type: '四人房',
          imageUrl:
            'https://vivawei.tw/wp-content/uploads/20181231163206_80.jpg',
        },
        {
          id: 16,
          title: '台北趣淘漫旅',
          description: '',
          price: 3689,
          rating: 4,
          city: '新北',
          type: '雙人房',
          imageUrl:
            'https://newtaipei.travel/content/images/shops/27186/1024x768_shops-image-8ckgbqbos0o1ayjb7bleag.jpg',
        },
        {
          id: 17,
          title: '陽光水岸會館',
          description:
            '國姓鄉的陽光水岸渡假會館，與眾不同之處在於附設了泡腳池，挑高空間臨溪岸而建，泡腳時可觀賞群山，景色優美，也可以向櫃檯購買藥包一同浸泡，促進血液循環。自助式早餐美味料理值得稱讚，餐廳附設卡拉ok，有位伴奏樂師，盡興時可以打賞，會館位置佳，去惠蓀林場只20分鐘車程即達。',
          price: 3580,
          rating: 1,
          city: '南投',
          type: '單人房',
          imageUrl:
            'https://janice.life/wp-content/uploads/2018/10/20181028215154_72.jpg',
        },
        {
          id: 18,
          title: '藍海旅館',
          description:
            '搭到美麗島站出11號出口就到六合夜市，在康是美右轉就到了、到六合夜市吃東西真的超級方便。房間真的很老舊、說乾淨好像又覺得怕怕的，霉味濕氣很重、開了冷氣有改善。被子是我完全不敢蓋的那種、枕頭也異味很重。價格是很便宜、二個晚上1300多。房間有冰箱加分。',
          price: 2000,
          rating: 4,
          city: '高雄',
          type: '單人房',
          imageUrl: 'https://shinyoceanhotel.com/static/images/index_intro.jpg',
        },
        {
          id: 19,
          title: '山林小屋',
          description:
            '空氣跟環境都很美好，搭帳草地+碎石排水良好，共用衛浴很乾淨，真的跟網路上說的一樣有檜木香；合掌屋空間大，有獨立衛浴及穩定的水壓超舒適；營主很熱情，願意為孩子們詳細導覽生態及植物，夜晚有機會還會有噴火龍出沒互動，孩子們很愛，大人也很放鬆，是很棒的近郊營區。',
          price: 2800,
          rating: 3,
          city: '南投',
          type: '四人房',
          imageUrl:
            'https://dearbnb.com/media/uploads/best-forest-house-n1.jpg',
        },
        {
          id: 20,
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
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/fotojet-2024-05-20t171442-961-664b14e4e411c.jpg?crop=0.494xw:0.987xh;0,0.0130xh&resize=640:*"
          alt=""
        />
        <img
          src="https://image.cache.storm.mg/styles/smg-800x533-fp-wm/s3/media/image/2023/06/30/20230630-045412_U16224_M866770_51b0.jpg?itok=VSz0CXAy"
          alt=""
        />
        <img
          src="https://static.wixstatic.com/media/685d56_89b1058db55a4566af6fd2a461149101~mv2.jpg/v1/fill/w_980,h_655,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/685d56_89b1058db55a4566af6fd2a461149101~mv2.jpg"
          alt=""
        />
        <img
          src="https://www.hotelkuei.com.tw/en/attractions-detail/upload/fac_m/en_fac_list_19a29_jzt9fk8rw6.jpg"
          alt=""
        />
        <img
          src="https://dimg04.c-ctrip.com/images/0M75712000arp6z4k69D4_Q60.jpg_.webp"
          alt=""
        />
        <img
          src="https://img.ltn.com.tw/Upload/business/page/800/2019/03/15/271.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Index
