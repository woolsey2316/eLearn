function findAverages(grouped_results) {
  return Object.keys(grouped_results).map(examType => {
    let number = 0;
    let outOf;
    const total = grouped_results[examType].reduce((accum, examResult) => {
      number++
      outOf = examResult.total
      return accum + examResult.score
    },0);

    const average = total / (outOf * number)
    return average

  });
}

function weightedAverage(examResults) {
  return Object.values(examResults)
    .reduce(
      (acc, elem) => acc + (elem?.score / elem?.total) * elem?.weight,
      0
    )
}

function classAverages(grouped_results) {
  return Object.keys(grouped_results).map(userId => {
    return weightedAverage(grouped_results[userId])
  })
}

function calculateRank(userAvaerage, total_average) {
  total_average = total_average.sort((a,b) => b - a)
  let rank = 0;
  for (let i = 0; i < total_average.length; i++) {
    if (total_average[i] === userAvaerage) {
      rank = i + 1
    }
  }
  return rank
}

function groupExamResultsByUser(examResults) {
  let grouped_results = {};
    examResults.forEach(examResult => {
      if (grouped_results[examResult.userId]) {
        grouped_results[examResult.userId].push(examResult);
      } else {
        grouped_results = { ...grouped_results, [examResult.userId]: [examResult] };
      }
    }, {});
    return grouped_results
}

function notDue(due) {
  return due > new Date();
}

function matchesUser(userId1, userId2) {
  return String(userId1) === String(userId2)
}

function sameYearAndSameMonth(date) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth()

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date(date).getMonth();

  return year === currentYear && month === currentMonth
}

module.exports =  {
  findAverages,
  weightedAverage,
  classAverages,
  calculateRank,
  groupExamResultsByUser,
  notDue,
  matchesUser,
  sameYearAndSameMonth
}