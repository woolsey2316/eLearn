var quizQuestions = [
  [
    {
      question: 'What is the Tallest Building?',
      possibleAnswers: [
        'Great Pyramid of Giza',
        'Burj Khalifa',
        'Shanghai Tower',
        'Taipai 101',
      ],
    },
    {
      question: 'What is the deepest part of ocean?',
      possibleAnswers: [
        'Mariana Trench',
        'Pacific ocean',
        'Dead Sea',
        'Challenge Deep',
      ],
    },
    {
      question: 'What is the oldest country?',
      possibleAnswers: ['England', 'France', 'Spain', 'India'],
    },
  ],
  [
    {
      question: '5 + 5?',
      possibleAnswers: ['10', '20', '5', '0'],
    },
    {
      question: '2 * 2?',
      possibleAnswers: ['10', '4', '5', '0'],
    },
    {
      question: '5 + 1?',
      possibleAnswers: ['10', '20', '6', '0'],
    },
  ],
  [
    {
      question: 'When did WW2 start?',
      possibleAnswers: [
        'Annexation of Austria',
        'Invasion of Poland',
        '5',
        '0',
      ],
    },
    {
      question: '9 * 9?',
      possibleAnswers: ['81', '4', '5', '0'],
    },
  ],
]
var QuizData = {
  title: 'History101 midterm exam',
  duration: 1,
  courseCode: 'History101',
  examCode: 'ec20393',
  courseName: 'string',
  questions: quizQuestions,
  sections: ['Maths', 'Chemistry', 'Physics'],
}

export { quizQuestions, QuizData }
