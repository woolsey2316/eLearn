import React from 'react'

function FilterButton(props) {
  return (
    <h2
      onClick={() => props.setActive(props.name)}
      style={{ cursor: 'pointer' }}
      className={
        'flex items-center px-3 py-2 rounded-md font-medium' +
        (props.name === props.active ? ' bg-theme-22' : '')
      }
    >
      {props.icon}
      {props.name}
    </h2>
  )
}
export { FilterButton }
