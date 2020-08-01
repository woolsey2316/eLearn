import React from 'react';
import Calendar from './Calendar'
import { CalendarDay } from './CalendarDay'

const CalendarDateTile = ({ today }) => {
  const month_ = today.getMonth()
  const year_ = today.getYear()
  const date = today.getDate()

  const daysInLastMonth = Calendar.getDaysInMonth(month_, year_)
  var firstDayCurrentMonth = today.setDate(1)
  const theFirstDayCurrentMonth = new Date(firstDayCurrentMonth).getDay()
  var lastDayCurrentMonth = today.setDate(Calendar.getDaysInMonth(month_ + 1, year_))
  const theLastDayCurrentMonth = new Date(lastDayCurrentMonth).getDay()
  // ...29th,30th,31st of previous month might have to appear in the top left 
  // part of the calendar
  const daysBeforeCurrentMonth = Array(theFirstDayCurrentMonth)
    .fill(theFirstDayCurrentMonth)
    .map((e, i) => daysInLastMonth - e + i + 1)
  // ...1st,2nd,3rd day of next month might have to appear in the bottom 
  // right part of the calendar
  const daysAfterCurrentMonth = Array(6 - theLastDayCurrentMonth)
    .fill('')
    .map((e, i) => i + 1)

  const totalDays = theFirstDayCurrentMonth + 
    Calendar.getDaysInMonth(month_ + 1, year_) + 
    6 - theLastDayCurrentMonth

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