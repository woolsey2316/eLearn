import React, { useEffect, useState } from 'react'
import * as Icon from 'react-feather'
import ReactTooltip from 'react-tooltip'

const IconMap = new Map();
IconMap.set("Answered", <div className="mx-auto"><Icon.Check className="w-5 h-5 text-theme-9 mx-auto" data-for="1" data-tip="1"/><ReactTooltip place="left" id="1">Question is answered</ReactTooltip></div>)
IconMap.set("NotAnswered", <div className="mx-auto"><Icon.AlertTriangle className="w-5 h-5 text-theme-12 mx-auto" data-for="2" data-tip="2"/><ReactTooltip place="left" id="2">Question was skipped</ReactTooltip></div>)
IconMap.set("Marked", <div className="mx-auto"><Icon.Crosshair className="w-5 h-5 text-theme-11 mx-auto" data-for="3" data-tip="3"/><ReactTooltip place="left" id="3">Question was NOT answered and marked for review</ReactTooltip></div>)
IconMap.set("AnsweredAndMarked", <div className="mx-auto"><Icon.UserCheck className="w-5 h-5 text-theme-9 mx-auto" data-for="4" data-tip="4"/><ReactTooltip place="left" id="4">Question was answered AND marked for review</ReactTooltip></div>)
IconMap.set("NotVisited", <div className="mx-auto"><Icon.AlertCircle className="w-5 h-5 text-gray-600 mx-auto" data-for="5" data-tip="5"/><ReactTooltip place="left" id="5">Haven't visited question yet</ReactTooltip></div>)
IconMap.set("", <div className="mx-auto"><Icon.AlertCircle className="w-5 h-5 text-gray-600 mx-auto" data-for="6" data-tip="6"/><ReactTooltip place="left" id="6">Haven't visited question yet</ReactTooltip></div>)

function AnswerStatusIcon(props) {
  const [answerStatus, setStatus] = useState("NotVisited")
  useEffect(() => {
    if (props.answer && props.marked.includes(props.questionId)) {
      setStatus("AnsweredAndMarked")
      return
    } else if (props.answer) {
      setStatus("Answered")
      return
    } else if (props.visited && props.marked.includes(props.questionId)) {
      setStatus("Marked")
      return
    } else if (props.visited && props.currentQuestion === props.questionId) {
      setStatus("NotAnswered")
      return
    }
  },
  [props.answer, props.marked, props.currentQuestion, props.questionId, props.visited]
  )
  
  return (
    IconMap.get(answerStatus)
  )

}
export { IconMap, AnswerStatusIcon }