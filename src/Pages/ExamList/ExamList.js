import React from 'react'
import { MobileMenu } from '../../components'
import { TopBar } from '../../components'
import { ExamFilterPanel } from '../../components/Exam'

import { examData } from './ExamData'

import { ExamCard } from './ExamCard'

import { MonthContainer } from './MonthContainer'
/* 
  A web page that shows all exams grouped by month, Users go here to select an exam
  and take it.
*/
function ExamList(props) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  examData.sort((a, b) => a - b)
  const months = new Set(
    examData.map((elem) => monthNames[new Date(elem.due).getMonth()])
  )
  var ExamList = []
  for (let month of months.values()) {
    ExamList.push(
      // A white box that contains all exams for the month
      <MonthContainer month={month}>
        {examData
          .filter((elem) => monthNames[new Date(elem.due).getMonth()] === month)
          // Remove last years exams so they don't appear in current month
          // but allow January, February... of next year to show
          .filter(
            (elem) =>
              new Date(elem.due).getFullYear() >= new Date().getFullYear()
          )
          .map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
      </MonthContainer>
    )
  }
  return (
    <div className="app">
      <MobileMenu />
      <div className="flex px-2 sm:px-10">
        {props.sideMenu}
        <div className="content">
          <TopBar open={props.openModal} />
          <h2 className="intro-y text-lg font-medium mt-10"> Exams </h2>
          <div className="grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-12 lg:col-span-3 xxl:col-span-2">
              <ExamFilterPanel />
            </div>
            <div className="col-span-12 lg:col-span-9 xxl:col-span-10">
              <div className="intro-y inbox">{ExamList}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ExamList }
