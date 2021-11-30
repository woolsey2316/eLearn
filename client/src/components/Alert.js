import React from 'react'

import * as Icon from 'react-feather'

function Alert({ type, message }) {
  const ALERT_SUCCESS =
    'intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-9 text-white'
  const ALERT_MODERATE =
    'intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-12 text-white'
  const ALERT_ERROR =
    'intro-x rounded-md flex items-center px-5 py-4 mt-4 bg-theme-6 text-white'
  const DEFAULT =
    'intro-x  rounded-md flex items-center px-5 py-4 mt-4 bg-gray-200 text-gray-600'
  switch (type) {
    case 'alert-success':
      return (
        <div className={ALERT_SUCCESS}>
          <Icon.AlertCircle className="mr-4" />
          {message}
        </div>
      )
    case 'alert-moderate':
      return (
        <div className={ALERT_MODERATE}>
          <Icon.AlertOctagon className="mr-4" />
          {message}
        </div>
      )
    case 'alert-danger':
      return (
        <div className={ALERT_ERROR}>
          <Icon.AlertOctagon className="mr-4" />
          {message}
        </div>
      )
    case '':
      return <></>
    default:
      return <div className={DEFAULT}></div>
  }
}
export { Alert }
