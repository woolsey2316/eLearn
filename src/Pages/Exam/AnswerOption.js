import React from 'react'
import PropTypes from 'prop-types'

class AnswerOption extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  render() {
    return (
      <div className="flex items-center text-gray-700 mt-2">
        <li className="flex items-center">
          <input
            type="checkbox"
            className="input border mr-2"
            value={this.props.answerContent || ''}
            checked={this.props.selectedOption === this.props.answerContent}
            onChange={this.props.getUserAnswer}
          />
          <label className="radioCustomLabel" htmlFor={this.props.answerType}>
            {this.props.answerContent}
          </label>
        </li>
      </div>
    )
  }
}

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
  getUserAnswer: PropTypes.func.isRequired,
}

export { AnswerOption }
