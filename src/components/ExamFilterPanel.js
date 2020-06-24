import React, { useState } from 'react'
import { FilterButton } from './FilterButton'

function ExamFilterPanel() {
  const [active, setActive] = useState('All Exams')
  function setActiveFilter(name) {
    setActive(name)
  }
  return (
    <div class="intro-y box bg-theme-1 p-5">
      <div class="text-white">
        <FilterButton
          active={active}
          setActive={setActiveFilter}
          name={'All Exams'}
        />
        <FilterButton
          active={active}
          setActive={setActiveFilter}
          name={'Active'}
        />
        <FilterButton
          active={active}
          setActive={setActiveFilter}
          name={'Completed'}
        />
      </div>
      <div class="border-t border-theme-3 mt-5 pt-5 text-white">
        <a href="" class="flex items-center px-3 py-2 truncate">
          <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
          Important
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-theme-9 rounded-full mr-3"></div>
          Ready for
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
          Work
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-theme-6 rounded-full mr-3"></div>
          Next Week
        </a>
      </div>
    </div>
  )
}
export { ExamFilterPanel }
