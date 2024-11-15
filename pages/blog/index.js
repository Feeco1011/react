import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import ForumCard from '@/components/forum/forumCard'
import styles from '@/styles/bolg.module.css'
import ForumCardB from '@/components/forum/forumCardB'
import { useRouter } from 'next/router'

export default function Index() {
  const [pop, setPop] = useState([]) // 假設這些是需要從 API 獲取的數據
  const [view, setView] = useState([])
  const [category, setCategory] = useState([])
  const [city, setCity] = useState([])

  const router = useRouter()

  useEffect(() => {
    // 用來獲取熱門文章資料
    const fetchSinglePop = async () => {
      try {
        const url = 'http://localhost:3005/api/posts' // 加上引號
        const response = await fetch(url)

        // 確認是否成功返回資料
        if (!response.ok) {
          throw new Error('Failed to fetch popular posts')
        }

        const data = await response.json()
        console.log(data)

        setPop(data) // 設置熱門文章資料
      } catch (error) {
        console.error('Error fetching popular posts:', error)
      }
    }

    fetchSinglePop()
  }, [router.query.postId]) // 依賴於 router.query.postId

  useEffect(() => {
    // 用來獲取景點文章資料
    const fetchSingleView = async () => {
      try {
        const url = 'http://localhost:3005/vposts' // 加上引號
        const response = await fetch(url)

        // 確認是否成功返回資料
        if (!response.ok) {
          throw new Error('Failed to fetch popular view')
        }

        const data = await response.json()
        console.log(data)

        setView(data) // 設置景點文章資料
      } catch (error) {
        console.error('Error fetching popular View:', error)
      }
    }

    fetchSingleView()
  }, [router.query.postId]) // 依賴於 router.query.postId

  useEffect(() => {
    // 用來獲取分類文章資料
    const fetchSingleCategory = async () => {
      try {
        const url = 'http://localhost:3001/catoposts' // 加上引號
        const response = await fetch(url)

        // 確認是否成功返回資料
        if (!response.ok) {
          throw new Error('Failed to fetch popular Category')
        }

        const data = await response.json()
        console.log(data)

        setCategory(data) // 設置分類文章資料
      } catch (error) {
        console.error('Error fetching popular category:', error)
      }
    }

    fetchSingleCategory()
  }, [router.query.postId]) // 依賴於 router.query.postId

  useEffect(() => {
    // 用來獲取城市文章資料
    const fetchSingleCity = async () => {
      try {
        const url = 'http://localhost:3001/cityposts' // 加上引號
        const response = await fetch(url)

        // 確認是否成功返回資料
        if (!response.ok) {
          throw new Error('Failed to fetch popular city')
        }

        const data = await response.json()
        console.log(data)

        setCity(data) // 設置城市文章資料
      } catch (error) {
        console.error('Error fetching popular posts:', error)
      }
    }

    fetchSingleCity()
  }, [router.query.postId]) // 依賴於 router.query.postId

  return (
    <>
      <div className={styles.popwell}>
        <br />
        <div className={styles.word}>
          <div className={styles.title}>熱門</div>
        </div>
        <br />
        <div style={{ display: 'flex', gap: '20px' }}>
          {pop.map((p) => (
            <Link href={`/blog/${p.id}`} key={p.id}>
              {' '}
              {/* 修正 href 字串模板 */}
              <ForumCardB pop={p} />
            </Link>
          ))}
        </div>
      </div>

      <br />
      <div className={styles.viewwell}>
        <div className={styles.word}>
          <div className={styles.title}>景點</div>
        </div>
        <br />
        <div style={{ display: 'flex', gap: '20px' }}>
          {view.map((v) => (
            <Link href={`/blog/${v.id}`} key={v.id}>
              {' '}
              {/* 修正 href 字串模板 */}
              <ForumCard view={v} />
            </Link>
          ))}
        </div>
      </div>

      <br />
      <div className={styles.category}>
        <div className={styles.word}>
          <div className={styles.title1}>
            歷史古蹟 | 舒適休閒 | 自然環境 | 人文藝術
          </div>
        </div>
        <br />
        <select>
          <option>歷史古蹟</option>
          <option>舒適休閒</option>
          <option>自然環境</option>
          <option>人文藝術</option>
        </select>

        <div style={{ display: 'flex', gap: '20px' }}>
          {category.map((v) => (
            <Link href={`/blog/${v.id}`} key={v.id}>
              {' '}
              {/* 修正 href 字串模板 */}
              <ForumCard category={v} />
            </Link>
          ))}
        </div>
      </div>

      <br />
      <div className={styles.cityy}>
        <div className={styles.word}>
          <div className={styles.title1}>城市</div>
        </div>
        <br />
        <select>
          <option>台北</option>
          <option>新北</option>
          <option>基隆</option>
          {/* ...其他城市選項 */}
        </select>

        <div style={{ display: 'flex', gap: '20px' }}>
          {city.map((item) => (
            <Link href={`/blog/${item.id}`} key={item.id}>
              {' '}
              {/* 修正 href 字串模板 */}
              <ForumCard data={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}