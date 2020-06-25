import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { CalendarDay } from './CalendarDay'

function CalendarContainer() {
  var now = new Date()
  const [today, setDate] = useState(new Date())
  function nextMonth() {
    var day = Math.min(now.getDate(),28)
    if (today.getMonth() === 11) {
      setDate( new Date(today.getFullYear() + 1, 0, day));
    } else {
      setDate( new Date(today.getFullYear(), today.getMonth() + 1, day));
    }
  }
  function todayDate() {
    setDate(new Date());
  }
  function previousMonth() {
    var day = Math.min(now.getDate(),28)
    if (today.getMonth() === 0) {
      setDate( new Date(today.getFullYear() - 1, 11, day));
    } else {
      setDate( new Date(today.getFullYear(), today.getMonth() - 1, day));
    }
  }
  var getDaysInMonth = function (month, year) {
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate()
  }
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    today
  )
  const year = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(
    today
  )
  const month_ = today.getMonth()
  const year_ = today.getYear()
  const date = today.getDate()
  const daysInLastMonth = getDaysInMonth(month_, year_)

  var firstDayCurrentMonth = today.setDate(1)
  const theFirstDayCurrentMonth = new Date(firstDayCurrentMonth).getDay()
  var lastDayCurrentMonth = today.setDate(getDaysInMonth(month_ + 1, year_))
  const theLastDayCurrentMonth = new Date(lastDayCurrentMonth).getDay()
  // ...29th,30th,31st might have to appear in the top left part of the calendar
  const daysBeforeCurrentMonth = Array(theFirstDayCurrentMonth)
    .fill(theFirstDayCurrentMonth)
    .map((e, i) => daysInLastMonth - e + i + 1)
  // ...1st,2nd,3rd day of next month might have to appear in the bottom right part of the calendar
  const daysAfterCurrentMonth = Array(Math.max(6 - (theLastDayCurrentMonth),0))
    .fill('')
    .map((e, i) => i + 1)

  return (
    <div className="mt-3" style={{ width: '38%' }}>
      <div className="intro-x flex items-center h-10">
        <h2 className="text-lg font-medium truncate mr-5">Schedules</h2>
      </div>
      <div className="mt-5">
        <div className="intro-x box">
          <div className="p-5">
            <div className="flex">
              <button style={{cursor:"pointer"}} onClick={previousMonth}>
                <Icon.ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div onClick={todayDate} className="font-medium mx-auto">{`${month}, ${year}`}</div>
              <button style={{cursor:"pointer"}} onClick={nextMonth}>
                <Icon.ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-4 mt-5 text-center">
              <div className="font-medium">Su</div>
              <div className="font-medium">Mo</div>
              <div className="font-medium">Tu</div>
              <div className="font-medium">We</div>
              <div className="font-medium">Th</div>
              <div className="font-medium">Fr</div>
              <div className="font-medium">Sa</div>
              {daysBeforeCurrentMonth.map((day) => (
                <CalendarDay day={day} disabled={true}/>
              ))}
              {Array(getDaysInMonth(month_ + 1, year_))
                .fill('')
                .map((elem, index) => (
                  <CalendarDay day={index + 1} curr={date} />
                ))}
              {daysAfterCurrentMonth.map((day) => (
                <CalendarDay day={day} disabled={true}/>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-200 p-5">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
              <span className="truncate">UI/UX Workshop</span>
              <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
              <span className="font-medium xl:ml-auto">23th</span>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
              <span className="truncate">VueJs Frontend Development</span>
              <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
              <span className="font-medium xl:ml-auto">10th</span>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
              <span className="truncate">Laravel Rest API</span>
              <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
              <span className="font-medium xl:ml-auto">31th</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { CalendarContainer }
