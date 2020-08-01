import React, { useState } from 'react'
import { FilterButton } from '../FilterButton'

import * as Icon from 'react-feather'

function ExamFilterPanel() {
  const [active, setActive] = useState('Active')
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
        <div className="flex items-center px-3 py-2 truncate">
          <div className="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
          This Week
        </div>
        <div
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <div className="w-2 h-2 bg-theme-9 rounded-full mr-3"></div>
          Expired
        </div>
        <div
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <div className="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
          This Month
        </div>
        <div
          className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
        >
          <div className="w-2 h-2 bg-theme-6 rounded-full mr-3"></div>
          Today
        </div>
      </div>
    </div>
  )
}
export { ExamFilterPanel }
