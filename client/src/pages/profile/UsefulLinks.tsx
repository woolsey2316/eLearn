import React from 'react'
import * as Icon from "react-feather";
function UsefulLinks() {
  return (
    <div className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
        <div className="intro-y box">
          <div className="relative flex items-center p-5">
            <div className="dropdown relative">
              <h2 className="font-medium text-base mr-auto">Useful Links</h2>
            </div>
          </div>
          <div className="p-5 border-t border-gray-200">
            <a className="flex items-center mt-5" href="/student/exam_list">
              <Icon.Box className="w-4 h-4 mr-2" /> Exam List
            </a>
            <a className="flex items-center mt-5" href="/student/grades">
              <Icon.Edit className="w-4 h-4 mr-2" /> Grades
            </a>
            <a className="flex items-center mt-5" href="/student/grades">
              <Icon.Airplay className="w-4 h-4 mr-2" /> Dashboard
            </a>
            <a className="flex items-center mt-5" href="/login">
              <Icon.Settings className="w-4 h-4 mr-2" /> Logout
            </a>
          </div>
        </div>
      </div>
   );
}

export default UsefulLinks;