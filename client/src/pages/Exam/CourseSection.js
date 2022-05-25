import React from 'react'
import { SectionTab } from './SectionTab'
import { CountdownTimer } from '../../utils/CountdownTimer'

function CourseSection(props) {
  return (
    <div className="ml-5">
      <div className="flex justify-between items-end">
        <div className="font-medium items-center pt-2 pb-1">Section</div>
        <CountdownTimer
          setTimeLeft={props.setTimeLeft}
          timeLeft={props.timeLeft}
          duration={props.duration}
        />
      </div>
      <div className="flex flex-wrap items-center">
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
