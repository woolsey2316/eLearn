import React, { ChangeEventHandler } from "react";

type Props = {
  // using `interface` is also ok
  answerIndex: number;
  selectedOption: number;
  answerContent: string;
  getUserAnswer: ChangeEventHandler<HTMLInputElement>;
};
type State = {
  checked: boolean; // like this
};

class AnswerOption extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div className="flex items-center text-gray-700 mt-2">
        <li className="flex items-center">
          <input
            type="checkbox"
            className="input border mr-2"
            value={this.props.answerIndex}
            checked={this.props.selectedOption === this.props.answerIndex}
            onChange={this.props.getUserAnswer}
          />
          <label className="radioCustomLabel">{this.props.answerContent}</label>
        </li>
      </div>
    );
  }
}

export { AnswerOption };
