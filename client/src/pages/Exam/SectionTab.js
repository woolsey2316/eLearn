import React from 'react'
import * as Icon from 'react-feather'

function SectionTab(props) {
  return (
    <>
      <div
        className={
          'border border-white box flex' +
          (props.currentSection === props.index
            ? ' bg-theme-1 text-white'
            : ' bg-theme-14 text-theme-10')
        }
      >
        <h2
          onClick={() => props.onClick(props.index)}
          style={{ cursor: 'pointer' }}
          className="flex items-center pt-2 pb-2 pl-5 pr-5"
        >
          {props.name}
        </h2>
        <Icon.Activity
          style={{ cursor: 'pointer' }}
          className={
            'ml-0 mr-5 mt-2' +
            (props.currentSection === props.index
              ? ' bg-theme-1 text-white'
              : ' bg-theme-14 text-theme-10')
          }
        />
      </div>
    </>
  )
}
export { SectionTab }
