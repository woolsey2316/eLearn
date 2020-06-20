import React from 'react'
import * as Icon from 'react-feather'

function Breadcrumb() {
  const path = window.location.pathname.split('/')
  // finds the url link from a given URL section, eg. grades => /student/grades
  function findURL(section) {
    var n = window.location.pathname.search(section)
    return window.location.pathname.substring(0, n + section.length)
  }
  return (
    <div className="-intro-x breadcrumb mr-auto hidden flex sm:flex">
      {path
        .filter((elem, index) => index < path.length - 1 && index > 0)
        .map((section, index) => (
          <div key={index} className="flex sm:flex mt-auto mb-auto">
            <a href={findURL(section)} className="">
              {section}
            </a>
            <Icon.ChevronRight className="breadcrumb__icon mt-auto mb-auto" />
          </div>
        ))}
      <a href={window.location.pathname} className="breadcrumb--active">
        {path.pop()}
      </a>
    </div>
  )
}

export { Breadcrumb }
