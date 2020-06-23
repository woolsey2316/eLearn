import React from 'react'
import { MobileMenu } from '../../components'
import { SideMenu } from '../../components'
import { TopBar } from '../../components'
import { Inbox } from '../../components'

import { examData } from './ExamData'

import { ExamCard } from './ExamCard'

function ExamList(props) {
  const [examList, setExamList] = React.useState({
    activeExams: [],
    upcomingExams: [],
    completedExams: [],
  })
  return (
    <div className="app">
      <MobileMenu />
      <div style={{paddingLeft:"2.3em"}} className="flex">
        {props.sideMenu}
        <div className="content">
          <TopBar />
          <h2 className="intro-y text-lg font-medium mt-10"> Exams </h2>
          <div class="grid grid-cols-12 gap-6 mt-8">
            <div class="col-span-12 lg:col-span-3 xxl:col-span-2">
              <Inbox />
            </div>
            <div class="col-span-12 lg:col-span-9 xxl:col-span-10">
              {/*<!-- BEGIN: Inbox Content -->*/}
              <div class="intro-y inbox box ">
                {examData.map((exam) => (
                  <ExamCard exam={exam} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ExamList }
