import React, { useState } from 'react'
import { FilterButton } from '../FilterButton'

import * as Icon from 'react-feather'

function ExamFilterPanel() {
  const [active, setActive] = useState('All Exams')
  function setActiveFilter(name) {
    setActive(name)
  }
  return (
    <div className="intro-y box p-5">
      <div>
        <FilterButton
          active={active}
          setActive={setActiveFilter}
          name={'All Exams'}
        >
          {<Icon.Database className="w-4 h-4 mr-2 mb-1" />}
        </FilterButton>

        <FilterButton
          active={active}
          setActive={setActiveFilter}
          name={'Active'}
        >
          {<Icon.Sun className="w-4 h-4 mr-2 mb-1" />}
        </FilterButton>
        <FilterButton
          active={active}
          setActive={setActiveFilter}
          name={'Completed'}
        >
          {<Icon.Lock className="w-4 h-4 mr-2 mb-1" />}
        </FilterButton>
      </div>
      <div className="border-t border-grey-200 mt-5 pt-5">
        <a href="" className="flex items-center px-3 py-2 truncate">
          <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
          Important
        </a>
        <a
          href=""
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <div className="w-2 h-2 bg-theme-9 rounded-full mr-3"></div>
          Ready for
        </a>
        <a
          href=""
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
          Work
        </a>
        <a
          href=""
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <div className="w-2 h-2 bg-theme-6 rounded-full mr-3"></div>
          This Week
        </a>
      </div>
    </div>
  )
}
export { ExamFilterPanel }
