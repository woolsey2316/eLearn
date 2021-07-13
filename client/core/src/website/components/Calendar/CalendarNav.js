import React from 'react';
import * as Icon from 'react-feather'
import Calendar from './Calendar'

const CalendarNav = ({today, setDate}) => {
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    today
  )
  const year = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(
    today
  )
  return ( 
    <div className="flex">
      <button 
        style={{ cursor: 'pointer' }} 
        onClick={()=> Calendar.previousMonth(today, setDate)}>
        <Icon.ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <div
        className="font-medium mx-auto flex"
      > <Icon.Calendar 
          onClick={() => Calendar.todayDate(setDate)}
          className="w-3 h-3 mt-1 mr-1 cursor-pointer"/>
        {`${month}, ${year}`}
      </div>
      <button 
        style={{ cursor: 'pointer' }} 
        onClick={()=> Calendar.nextMonth(today,setDate)}>
        <Icon.ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
   );
}
 
export default CalendarNav;