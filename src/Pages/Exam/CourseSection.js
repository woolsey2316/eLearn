import React from 'react'
import { SectionTab } from './SectionTab'

function CourseSection(props) {
  return (
    <div className="ml-5">
      <div className="font-medium items-center pt-2 pb-1 border-b border-gray-200">
        Section
      </div>
      <div className="flex items-center border-b border-gray-200">
        {props.sections.map((elem, index) => (
          <SectionTab
            onClick={props.clicked}
            currentSection={props.section}
            name={elem}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export { CourseSection }
