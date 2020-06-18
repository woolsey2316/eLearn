import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  const [checked, setChecked] = React.useState(false);
  
  return (
    <div className="flex items-center text-gray-700 mt-2"> 
      <li>
        <input
          type="checkbox"
          className="input border mr-2"
          name="vertical_radio_button"
          checked={checked}
          id={props.answerType}
          value={props.answerContent}
          disabled={props.answer}
          onChange={function(e) {props.onAnswerSelected(e); setChecked(!checked)}.bind(this)}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    </div>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export { AnswerOption };