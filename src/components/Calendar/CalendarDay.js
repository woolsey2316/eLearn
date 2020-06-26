import React from 'react'

function CalendarDay(props) {
  return (
    <div
      className={
        'py-1 rounded relative' +
        (props.curr === props.day
          ? ' bg-theme-1 text-white rounded relative'
          : '') +
        (props.disabled ? ' text-gray-500' : '')
      }
    >
      {props.day}
    </div>
  )
}
export { CalendarDay }
