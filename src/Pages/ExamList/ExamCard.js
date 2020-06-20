import React from 'react'
import profile2 from '../../assets/dist/images/profile-2.jpg'
import { NotificationIcon } from '../../components'
import * as Icon from 'react-feather'

function ExamCard({exam}) {
  const [description, show] = React.useState(false)
  console.table({exam})
  return (
    <div class="intro-y">
      <div class=" inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
        <div class="flex px-5 py-3">
          <h2 className="text-lg text-gray-600 font-medium leading-none mt-3">
            {"course code: " + exam.examCode}
          </h2>
        </div>
        <div class="flex px-5 py-3">
          <h2 className="text-xl font-bold leading-none mt-3">
            {exam.examName}
          </h2>
        </div>
        <div class="flex px-5 py-3">
          <h2 className="font-medium leading-none mt-3 mr-5"> {"due: " + exam.due} </h2>
          <h2 className="font-medium leading-none mt-3 mr-1 ml-1">|</h2>
          <h2 onClick={() => show(!description)} style={{cursor:"pointer"}} className="font-medium leading-none mt-3 ml-5"> more info </h2>
          {description ? <Icon.ChevronUp size={16} className="font-medium leading-none mt-3 mb-auto"/> : <Icon.ChevronDown size={16} className="font-medium leading-none mt-3 mb-auto"/>}
        </div>
        {
          description && 
          <div class="px-5 py-3">
            <h2 className="text-xl font-medium ml-1 mb-1">Exam Description</h2>
            <h2 className="font-medium leading-none ml-4 mb-3 mt-3">{exam.description}</h2>
          </div>
        }
      </div>
    </div>
  )
}

export { ExamCard }
