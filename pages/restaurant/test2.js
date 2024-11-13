import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from '@/styles/test2.module.css';

function MyDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div>
            <DatePicker
            ClassName={style.customDatepicker}
            calendarClassName={style.customDatepicker__header}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy年MM月dd日"
                minDate={new Date()}  // 禁止選擇當天以前的日期
                placeholderText="選擇日期"
            />
        </div>
    );
}

export default MyDatePicker;
