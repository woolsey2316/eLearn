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

module.exports =  { findAverages }