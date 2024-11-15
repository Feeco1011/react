import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from '@/styles/test.module.css';

export default function Index() {
    const [people, setPeople] = useState("人數");
    const [time, setTime] = useState("時間");

    const handlePeopleChange = (e) => {
        setPeople(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className={style.selectionBox}> 
            <div className={style.selectionTitle}>選擇時間、人數</div>
            
            {/* 人數下拉式選單 */}
            <select className={`${style.box} ${style.box1}`} value={people} onChange={handlePeopleChange}>
                <option disabled>人數</option>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num} 人</option>
                ))}
            </select>
       
            <DatePicker
            className={`${style.box} ${style.box2}`}
            calendarClassName={style.customDatepickerInput}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy年MM月dd日"
                minDate={new Date()}  // 禁止選擇當天以前的日期
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
            <div className={`${style.box} ${style.box3}`}>送出</div>
        </div>
    );
}
