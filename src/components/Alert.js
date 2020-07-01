import React from 'react'

import * as Icon from 'react-feather'

function Alert(props) {
  const ALERT_SUCCESS =
    'rounded-md flex items-center px-5 py-4 mt-4 bg-theme-9 text-white'
  const ALERT_MODERATE =
    'rounded-md flex items-center px-5 py-4 mt-4 bg-theme-12 text-white'
  const ALERT_ERROR =
    'rounded-md flex items-center px-5 py-4 mt-4 bg-theme-6 text-white'
  const DEFAULT =
    'rounded-md flex items-center px-5 py-4 mt-4 bg-gray-200 text-gray-600'

  switch (props.type) {
    case 'alert-success':
      return (
        <div className={ALERT_SUCCESS}>
          <Icon.AlertCircle className="mr-4" />
          {props.message}
        </div>
      )
    case 'alert-moderate':
      return (
        <div className={ALERT_MODERATE}>
          <Icon.AlertOctagon className="mr-4" />
          {props.message}
        </div>
      )
    case 'alert-danger':
      return (
        <div className={ALERT_ERROR}>
          <Icon.AlertOctagon className="mr-4" />
          {props.message}
        </div>
      )
    default:
      return (
        <div className={DEFAULT}>
          <Icon.AlertCircle className="mr-4" />
          {props.message}
        </div>
      )
  }
}
export { Alert }
