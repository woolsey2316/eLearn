import { ExamResult } from "../types/ExamState";

function weightedAverage(examResults: ExamResult[] | undefined) {
  if (examResults) {
    return Object.values(examResults)
      .reduce(
        (acc, elem) => acc + (elem?.score / elem?.total) * elem?.weight,
        0
      )
      .toFixed(2);
  } else {
    return "";
  }
}

export { weightedAverage }