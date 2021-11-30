import React from 'react'
import PropTypes from 'prop-types'

function Question(props) {
  return <h2 className="font-medium text-base mr-auto mb-5">{props.content}</h2>
}

Question.propTypes = {
  content: PropTypes.string.isRequired,
}

export { Question }
