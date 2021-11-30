import React from 'react';
import Calendar from './Calendar'
import { CalendarDay } from './CalendarDay'

const CalendarDateTile = ({ today }) => {
  const month_ = today.getMonth()
  const year_ = today.getYear()
  const date = today.getDate()

  return ( 
    <React.Fragment>
      {Calendar.daysBeforeCurrentMonth(today).map((day, i) => (
        <CalendarDay key={i} month={month_-1} day={day} disabled={true} />
      ))}
      {Array(Calendar.getDaysInMonth(month_ + 1, year_))
        .fill('')
        .map((elem, index) => (
          <CalendarDay key={index} month={month_} day={index + 1} curr={date} />
        ))}
      {Calendar.daysAfterCurrentMonth(today).map((day, i) => (
        <CalendarDay key={i} month={month_} day={day} disabled={true} />
      ))}
    </React.Fragment>
   );
}
 
export default CalendarDateTile;