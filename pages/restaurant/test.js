import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from '@/styles/reservation1.module.css';

export default function ReservationForm() {
    // 用來控制顯示的頁面
    const [currentPage, setCurrentPage] = useState('form');
    // 儲存選擇的數據
    const [people, setPeople] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState('');

    // 處理人數選擇
    const handlePeopleChange = (e) => {
        setPeople(e.target.value);
    };

    // 處理時間選擇
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    // 提交表單，並將資料傳遞到下一個 "頁面"
    const handleSubmit = () => {
        setCurrentPage('confirmation');
    };

    return (
        <div>
            {currentPage === 'form' ? (
                <div className={style.selectionBox}>
                    <div className={style.selectionTitle}>選擇時間、人數</div>

                    {/* 人數下拉式選單 */}
                    <select className={`${style.box} ${style.box1}`} value={people} onChange={handlePeopleChange}>
                        <option disabled>人數</option>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                            <option key={num} value={num}>{num} 人</option>
                        ))}
                    </select>

                    {/* 日期選擇器 */}
                    <DatePicker
                        className={`${style.box} ${style.box2}`}
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy年MM月dd日"
                        minDate={new Date()} // 禁止選擇當天以前的日期
                        placeholderText="選擇日期"
                    />

                    {/* 時間下拉式選單 */}
                    <select className={`${style.box} ${style.box3}`} value={time} onChange={handleTimeChange}>
                        <option disabled>時間</option>
                        {Array.from({ length: 19 }, (_, i) => `${11 + Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`).map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>

                    {/* 送出按鈕 */}
                    <div className={`${style.box} ${style.box3}`} onClick={handleSubmit}>送出</div>
                </div>
            ) : (
                // 顯示確認頁面
                <div className={style.block}>
                    <div className={style.blockTitle}>快要完成了!</div>
                    <img className={style.rImg} src="/restaurantPicture/one/心潮1.jpg" alt="" />
                    <div className={style.ifoAndName}>
                        <div>心潮飯店</div>
                        <div className={style.ifo}>
                            <div>
                                <img src="/logoTest/date_icon.jpg" alt="" />
                                {selectedDate ? selectedDate.toLocaleDateString('zh-TW') : '未選擇日期'}
                            </div>
                            <div>
                                <img src="/logoTest/time_icon.jpg" alt="" /> {time || '未選擇時間'}
                            </div>
                            <div>
                                <img src="/logoTest/num_icon.jpg" alt="" /> {people ? `${people}位` : '未選擇人數'}
                            </div>
                        </div>
                    </div>
                    <div className={style.selectAndtextarea}>
                        <select className={style.select}>
                            <option>選擇場合(選填)</option>
                            <option>生日</option>
                            <option>周年紀念</option>
                            <option>約會之夜</option>
                            <option>商業聚餐</option>
                            <option>慶祝</option>
                        </select>
                        <textarea className={style.textarea} placeholder="新增特殊要求(選填)"></textarea>
                    </div>
                    <a href="">
                        <button className={style.finsh}>完成訂位</button>
                    </a>
                </div>
            )}
        </div>
    );
}
