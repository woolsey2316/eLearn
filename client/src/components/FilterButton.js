import React from 'react'

function FilterButton(props) {
  return (
    <h2
      onClick={() => props.setActive(props.name)}
      style={{ cursor: 'pointer' }}
      className={
        'flex items-center px-3 py-2 mt-2 rounded-md' +
        (props.name === props.active
          ? ' bg-theme-1 text-white text-medium'
          : ' ')
      }
    >
      {props.children}
      {props.name}
    </h2>
  )
}
export { FilterButton }
