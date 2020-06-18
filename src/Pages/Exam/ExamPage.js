import React, { Component } from 'react';
import { quizQuestions, QuizData } from './quizQuestions';
import Quiz from './Quiz';
import Result from './Result';

class ExamPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalAnswered: 0,
      questionId: 0,
      question: '',
      answerOptions: [],
      answer: '',
      answerList: {},
      finished: false,
      unansweredQuestionIds: Array(quizQuestions.length).fill(null).map((u, i) => i )
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
    this.confirmAnswer = this.confirmAnswer.bind(this)
  }

  componentDidMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].possibleAnswers
    });
  }

  handleAnswerSelected(event) {
    this.setState({ 
      answer: event.currentTarget.value
    })
  }

  confirmAnswer() {
    this.setUserAnswer(this.state.answer);
    if (this.state.unansweredQuestionIds.length) {
      setTimeout(() => this.setNextQuestion(this.state.unansweredQuestionIds[0]), 300);
    } else {
      this.setState({finished : true})
    }
  }

  setUserAnswer(answer) {
    const newArr = this.state.unansweredQuestionIds
    const first = newArr.splice(0,1)
    if (answer) {
      this.setState((state, props) => ({
        answerList: {
          ...state.answerList,
          [answer]: this.state.questionId
        },
        answer: answer,
        unansweredQuestionIds: newArr
      }));
    } else {
      // student did not answer current question 
      // and wants to go to next question and answer the skipped question last
      newArr.push(first)
      this.setState((state, props) => ({
        unansweredQuestionIds: newArr
      }))
    }
  }
  // finds the next question not answered yet
  setNextQuestion(qId) {
    this.setState({
      questionId: qId,
      question: quizQuestions[qId].question,
      answerOptions: quizQuestions[qId].possibleAnswers,
      answer: ''
    });
  }

  getResults() {
    const answerList = this.state.answerList;
    const answersCountKeys = Object.keys(answerList);
    const answersCountValues = answersCountKeys.map(key => answerList[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answerList[key] === maxAnswerCount);
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result />;
  }

  render() {
    return (
      <div style={{margin:"1em"}} className="content">
        <div className="intro-y box mt-5">
          <div className="items-center p-5 border-b border-gray-200">
            <h2 className="font-medium text-base mr-auto">Exam Name: {QuizData.title}</h2>
            <h2 className="text-base mr-auto">Exam Code: {QuizData.examCode}</h2>
            <h2 className="text-base mr-auto">Duration: {QuizData.duration} minutes</h2>
          </div>
          {this.state.finished ? this.renderResult() : this.renderQuiz()}
          <div className="intro-y box mt-5">
            <div className="items-center p-5 border-b border-gray-200">
              <button className="button w-30 shadow-md mr-1 mb-2 bg-theme-1 text-white" onClick={this.confirmAnswer}>
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { ExamPage };