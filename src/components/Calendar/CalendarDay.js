import React from 'react'

function CalendarDay(props) {
  function isTodayDate() {
    return new Date().getDate() === props.day && props.month === new Date().getMonth()
  }
  return (
    <div
      className={
        'p-3 mx-auto rounded relative' +
        (isTodayDate() ? ' bg-theme-1 text-white rounded relative' : '') +
        (props.disabled ? ' text-gray-500' : '')
      }
    >
      {props.day}
    </div>
  )
}
export { CalendarDay }
