import React, { useEffect, useState } from 'react'
import * as Icon from 'react-feather'
import ReactTooltip from 'react-tooltip'

function answered(id) {
  return (
    <div className="mx-auto">
      <Icon.Check
        className="w-5 h-5 text-theme-9 mx-auto"
        data-for={id}
        data-tip="1"
      />
      <ReactTooltip place="left" id={id}>
        Question is answered
      </ReactTooltip>
    </div>
  )
}
function notAnswered(id) {
  return (
    <div className="mx-auto">
      <Icon.AlertTriangle
        className="w-5 h-5 text-theme-12 mx-auto"
        data-for={id}
        data-tip="1"
      />
      <ReactTooltip place="left" id={id}>
        Question was skipped
      </ReactTooltip>
    </div>
  )
}
function marked(id) {
  return (
    <div className="mx-auto">
      <Icon.Crosshair
        className="w-5 h-5 text-theme-11 mx-auto"
        data-for={id}
        data-tip="1"
      />
      <ReactTooltip place="left" id={id}>
        Question was NOT answered and marked for review
      </ReactTooltip>
    </div>
  )
}
function answeredAndMarked(id) {
  return (
    <div className="mx-auto">
      <Icon.UserCheck
        className="w-5 h-5 text-theme-9 mx-auto"
        data-for={id}
        data-tip="1"
      />
      <ReactTooltip place="left" id={id}>
        Question was answered AND marked for review
      </ReactTooltip>
    </div>
  )
}
function notVisited(id) {
  return (
    <div className="mx-auto">
      <Icon.AlertCircle
        className="w-5 h-5 text-gray-600 mx-auto"
        data-for={id}
        data-tip="1"
      />
      <ReactTooltip place="left" id={id}>
        Haven't visited question yet
      </ReactTooltip>
    </div>
  )
}
function defaultStatus(id) {
  return (
    <div className="mx-auto">
      <Icon.AlertCircle
        className="w-5 h-5 text-gray-600 mx-auto"
        data-for={id}
        data-tip="1"
      />
      <ReactTooltip place="left" id={id}>
        Haven't visited question yet
      </ReactTooltip>
    </div>
  )
}

function AnswerStatusIcon(props) {
  var id = props.questionId.toString()
  if (props.answer && props.marked.includes(props.questionId)) {
    return answeredAndMarked(id)
  } else if (props.answer) {
    return answered(id)
  } else if (props.visited && props.marked.includes(props.questionId)) {
    return marked(id)
  } else if (props.visited && props.currentQuestion === props.questionId) {
    return notAnswered(id)
  }
  return notVisited(id)
}

export { AnswerStatusIcon }
