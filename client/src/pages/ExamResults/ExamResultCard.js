import React from 'react'
import { uppercaseFirstLetter } from '../../helpers/string'

function ExamResultCard({average, examInfo}) {
  return (
    <tr>
      <td className="border-b">
        <div className="font-medium whitespace-no-wrap">{uppercaseFirstLetter(examInfo.exam_name)}</div>
        <div className="text-gray-600 text-xs whitespace-no-wrap">{examInfo.dueDate}</div>
      </td>
      <td className="text-right border-b w-32">{examInfo.rank}</td>
      <td className="text-right border-b w-32">{examInfo.score}/{examInfo.total}</td>
      <td className="text-right border-b w-32 font-medium">{(examInfo.score/examInfo.total*100).toFixed(2)}</td>
      <td className="text-right border-b w-32">{(average*100).toFixed(2)}</td>
    </tr>
  )
}
export { ExamResultCard }
