import React from 'react'

function ExamResultCard() {
  return (
    <tr>
      <td class="border-b">
        <div class="font-medium whitespace-no-wrap">Exam 1</div>
        <div class="text-gray-600 text-xs whitespace-no-wrap">06/05/2020</div>
      </td>
      <td class="text-right border-b w-32">1</td>
      <td class="text-right border-b w-32">90/95</td>
      <td class="text-right border-b w-32 font-medium">95%</td>
      <td class="text-right border-b w-32">71%</td>
    </tr>
  )
}
export { ExamResultCard }
