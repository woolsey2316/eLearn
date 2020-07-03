import React from 'react'
import profile2 from '../../assets/dist/images/profile-2.jpg'
import { NotificationIcon } from '../../components'
import { DateIcon } from './DateIcon'
import * as Icon from 'react-feather'

function ExamCard({ exam }) {
  const [description, show] = React.useState(false)
  console.table({ exam })
  return (
    <div className="intro-x inbox__item inbox__item--active box mb-2">
      <div className="intro-x flex items-center box">
        <DateIcon due={exam.due} />
        <div className=" inbox__item--active inline-block sm:block text-gray-700">
          <div className="flex px-5 py-1">
            <h2 className="text-xl mt-2 font-medium leading-none">
              {exam.examName}
            </h2>
          </div>
          <h2 className="leading-none ml-5 my-2">
            {`exam duration: ${exam.duration}, number of sections: ${exam.sections}`}
          </h2>
          <div className="flex px-5 py-1">
            <h2 className="font-medium text-gray-700 leading-none mr-5">
              {'due: ' + exam.due}
            </h2>
            <h2 className="font-medium leading-none mr-1 ml-1">|</h2>
            <h2
              onClick={() => show(!description)}
              style={{ cursor: 'pointer' }}
              className="font-medium leading-none ml-5"
            >
              more info
            </h2>
            {description ? (
              <Icon.ChevronUp
                style={{ cursor: 'pointer' }}
                onClick={() => show(!description)}
                size={16}
                className="font-medium leading-none mx-1 my-auto"
              />
            ) : (
              <Icon.ChevronDown
                style={{ cursor: 'pointer' }}
                onClick={() => show(!description)}
                size={16}
                className="font-medium leading-none mx-1 my-auto"
              />
            )}
          </div>
        </div>
        <div className="flex ml-auto mr-5">
          <a
            href="/student/exams"
            className="button w-24 inline-block my-auto mx-1 bg-theme-9 text-white"
          >
            Take Exam
          </a>
          <a
            href="/student/grades"
            className="button w-24 inline-block mx-1 border text-gray-700"
          >
            See Result
          </a>
        </div>
      </div>
      {description && (
        <div className="border-t border-gray-300 pl-5 pb-5 mb-2 bg-white">
          <h2 className="font-bold mt-2 mb-1">Exam Description</h2>
          <h2 className="leading-none ml-4 mb-3">{exam.description}</h2>
        </div>
      )}
    </div>
  )
}

export { ExamCard }
